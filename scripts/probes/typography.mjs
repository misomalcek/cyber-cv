/** Font floor: nothing visible may render below 17px, on any page. */
import pkg from '/Users/m/.claude/scripts/aimode-deps/node_modules/playwright-core/index.js';
const { chromium } = pkg;
const PAGES = ['', 'systems/', 'credentials/', 'work/', 'research/', 'crystal/',
               'career/', 'log/', 'suno/', 'next/', 'research/rules/', 'research/essay/'];
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
let bad = 0, worst = 99;
for (const path of PAGES) {
  await p.goto('http://localhost:8911/cyber-cv/' + path, { waitUntil: 'load' });
  await p.waitForTimeout(700);
  const small = await p.evaluate(() => {
    const out = [];
    document.querySelectorAll('body *').forEach(el => {
      if (['SCRIPT','STYLE','NOSCRIPT'].includes(el.tagName)) return;
      if (!el.textContent.trim() || el.children.length) return;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') return;
      const fs = parseFloat(cs.fontSize);
      if (fs < 17) out.push({ fs, cls: el.className.toString().slice(0, 40), txt: el.textContent.trim().slice(0, 26) });
    });
    return out;
  });
  small.forEach(s => { bad++; worst = Math.min(worst, s.fs); console.log(`/${path}  ${s.fs}px  ${s.cls} :: ${s.txt}`); });
}
console.log(bad === 0 ? `\nFLOOR HELD — 0 elements under 17px across ${PAGES.length} pages`
                      : `\n${bad} under floor, smallest ${worst}px`);
await b.close(); process.exit(bad === 0 ? 0 : 1);
