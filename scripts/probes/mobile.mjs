/** No horizontal overflow and no clipped text at 390px. */
import pkg from '/Users/m/.claude/scripts/aimode-deps/node_modules/playwright-core/index.js';
const { chromium } = pkg;
const PAGES = ['', 'systems/', 'credentials/', 'work/', 'research/', 'crystal/',
               'career/', 'log/', 'suno/', 'next/', 'research/rules/', 'research/essay/'];
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
let fails = 0;
for (const path of PAGES) {
  await p.goto('http://localhost:8911/cyber-cv/' + path, { waitUntil: 'load' });
  await p.waitForTimeout(700);
  const r = await p.evaluate(() => {
    const scroll = document.documentElement.scrollWidth > window.innerWidth + 1;
    const clipped = [];
    document.querySelectorAll('body *').forEach(el => {
      if (['SCRIPT','STYLE','PRE','CODE'].includes(el.tagName)) return;
      if (el.children.length || !el.textContent.trim()) return;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') return;
      /* Skip anything inside a container that deliberately clips or scrolls:
         a marquee's second copy has a rect past the viewport by design, and the
         page does not actually scroll because of it. Measured 2026-08-21 — the
         probe was reporting the player title as overflow while the track's
         overflow:hidden was doing its job. */
      let anc = el, contained = false;
      while (anc && anc !== document.body) {
        const a = getComputedStyle(anc);
        if (['auto', 'scroll', 'hidden', 'clip'].includes(a.overflowX)) { contained = true; break; }
        anc = anc.parentElement;
      }
      if (contained) return;
      if (el.scrollWidth > el.clientWidth + 2) clipped.push(el.textContent.trim().slice(0, 32));
      if (el.getBoundingClientRect().right > window.innerWidth + 2) clipped.push('OVERFLOW: ' + el.textContent.trim().slice(0, 28));
    });
    return { scroll, clipped: [...new Set(clipped)].slice(0, 5), dw: document.documentElement.scrollWidth };
  });
  if (r.scroll || r.clipped.length) {
    fails++; console.log(`✗ /${path}  scrollW=${r.dw}`);
    r.clipped.forEach(c => console.log('    ' + c));
  }
}
console.log(fails === 0 ? `\n${PAGES.length}/${PAGES.length} clean at 390px` : `\n${fails} pages with issues`);
await b.close(); process.exit(fails === 0 ? 0 : 1);
