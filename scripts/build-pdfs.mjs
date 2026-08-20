/**
 * Render the markdown packs to PDF.
 *
 * Print styling on purpose: white ground, serif body, generous margins. The
 * site's palette is for a screen; a PDF is read on paper or in a viewer and
 * neon on black is unreadable in both. Same content, different medium.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import pkg from '/Users/m/.claude/scripts/aimode-deps/node_modules/playwright-core/index.js';
const { chromium } = pkg;

const DIR = 'public/downloads';

/** Minimal markdown → HTML. The documents use a narrow subset by design. */
function md2html(md) {
  // Join wrapped paragraph lines before parsing. The source documents are hard
  // wrapped at ~80 chars, so **bold** and `code` spans routinely cross a line
  // break — a line-based converter leaves those markers visible. Blank lines,
  // headings, list items, tables, quotes and fences all still break a paragraph.
  md = md.split('\n').reduce((acc, line) => {
    const prev = acc[acc.length - 1];
    const isBreak = (l) => l === '' || /^(#{1,4}\s|[-*]\s|\d+\.\s|\||>|```|---)/.test(l);
    // A continuation line joins its predecessor whenever the predecessor is a
    // paragraph OR a list item — a wrapped bullet is still that bullet.
    const isCont = (l) => l !== '' && !isBreak(l);
    const prevOpens = prev !== undefined && (isCont(prev) || /^([-*]\s|\d+\.\s)/.test(prev));
    if (prevOpens && isCont(line)) {
      acc[acc.length - 1] = prev + ' ' + line.trim();
    } else acc.push(line);
    return acc;
  }, []).join('\n');

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  const out = [];
  let inTable = false, inList = false, inCode = false;
  for (const raw of md.split('\n')) {
    const line = raw.trimEnd();
    if (line.startsWith('```')) {
      out.push(inCode ? '</pre>' : '<pre>'); inCode = !inCode; continue;
    }
    if (inCode) { out.push(esc(raw)); continue; }
    if (line.startsWith('|')) {
      const cells = line.split('|').slice(1, -1).map((c) => c.trim());
      if (/^[-: |]+$/.test(line)) continue;
      if (!inTable) { out.push('<table>'); inTable = true; }
      const tag = out[out.length - 1] === '<table>' ? 'th' : 'td';
      out.push('<tr>' + cells.map((c) => `<${tag}>${inline(c)}</${tag}>`).join('') + '</tr>');
      continue;
    }
    if (inTable) { out.push('</table>'); inTable = false; }
    const li = line.match(/^[-*]\s+(.*)/) || line.match(/^\d+\.\s+(.*)/);
    if (li) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${inline(li[1])}</li>`); continue;
    }
    if (inList) { out.push('</ul>'); inList = false; }
    const h = line.match(/^(#{1,4})\s+(.*)/);
    if (h) { out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); continue; }
    if (line.startsWith('> ')) { out.push(`<blockquote>${inline(line.slice(2))}</blockquote>`); continue; }
    if (line === '---') { out.push('<hr>'); continue; }
    out.push(line ? `<p>${inline(line)}</p>` : '');
  }
  if (inTable) out.push('</table>');
  if (inList) out.push('</ul>');
  return out.join('\n');
}

const CSS = `
  @page { margin: 20mm 18mm; }
  body { font: 10.5pt/1.55 "Georgia", "Times New Roman", serif; color: #1a1a1a; max-width: none; }
  h1 { font-size: 20pt; margin: 0 0 4pt; letter-spacing: -0.01em; }
  h2 { font-size: 13pt; margin: 18pt 0 5pt; border-bottom: 1px solid #ddd; padding-bottom: 3pt; }
  h3 { font-size: 11.5pt; margin: 13pt 0 3pt; }
  h4 { font-size: 10.5pt; margin: 10pt 0 2pt; }
  p { margin: 0 0 7pt; }
  ul { margin: 0 0 8pt; padding-left: 16pt; }
  li { margin-bottom: 3pt; }
  code { font: 9.5pt/1.4 "SF Mono", Menlo, monospace; background: #f3f3f3; padding: 1pt 3pt; border-radius: 2pt; }
  pre { font: 9pt/1.4 "SF Mono", Menlo, monospace; background: #f6f6f6; padding: 8pt; overflow-x: auto; border-radius: 3pt; }
  blockquote { margin: 8pt 0; padding-left: 11pt; border-left: 2pt solid #bbb; color: #444; font-style: italic; }
  table { border-collapse: collapse; width: 100%; margin: 8pt 0; font-size: 9.5pt; }
  th, td { border: 1px solid #ddd; padding: 4pt 6pt; text-align: left; vertical-align: top; }
  th { background: #f5f5f5; font-weight: 600; }
  a { color: #1a4d8f; text-decoration: none; }
  hr { border: 0; border-top: 1px solid #e0e0e0; margin: 14pt 0; }
  h1, h2, h3 { page-break-after: avoid; }
  table, blockquote, pre { page-break-inside: avoid; }
`;

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
const browser = await chromium.launch();
const page = await browser.newPage();
for (const f of files) {
  const html = `<!doctype html><meta charset="utf-8"><style>${CSS}</style>${md2html(readFileSync(join(DIR, f), 'utf8'))}`;
  await page.setContent(html, { waitUntil: 'load' });
  const out = join(DIR, f.replace(/\.md$/, '.pdf'));
  await page.pdf({ path: out, format: 'A4', printBackground: true });
  console.log(`  ✓ ${out.split('/').pop()}`);
}
await browser.close();
