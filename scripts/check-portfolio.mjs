/**
 * The CV markdown is the source. If a portfolio name in it is missing from
 * the built page, the build fails. Do not keep a third handwritten list.
 */
import fs from 'node:fs';

const CV_MD = '/Users/m/Documents/md/cv-aktual.md';
// The CV markdown lives on the hive machine only. CI has no copy, so the check
// runs locally and is skipped there rather than failing every deploy.
if (!fs.existsSync(CV_MD)) {
  console.log('check-portfolio: skipped,', CV_MD, 'is not on this machine');
  process.exit(0);
}
const md = fs.readFileSync(CV_MD, 'utf8');
// v5 (2026-11-01): the section is `## Portfolio`, one bullet per entry, `- **Name**: …`.
const section = md.split('\n## Portfolio')[1]?.split('\n## ')[0] ?? '';
const names = [...section.matchAll(/^- \*\*([^*]+)\*\*/gm)].map((m) => m[1].trim());
const htmlPath = 'dist/portfolio/index.html';
if (!fs.existsSync(htmlPath)) {
  console.error('missing', htmlPath);
  process.exit(1);
}
const html = fs.readFileSync(htmlPath, 'utf8');
const missing = names.filter((n) => !html.includes(n));
if (!names.length || missing.length) {
  console.error('portfolio page is missing names from cv-aktual.md:', missing.join(', ') || '(none parsed)');
  process.exit(1);
}
console.log('portfolio names present:', names.join(', '));
