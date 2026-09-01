/**
 * Are the committed download packs still what the hive memory corpus says?
 *
 * The packs are generated from ~/memory and committed, because CI has no access
 * to that corpus. That arrangement works right up until someone edits a paper in
 * memory and does not re-run the generator — and then the site serves a document
 * that quietly lacks whatever was added.
 *
 * That is not hypothetical. Measured 2026-09-01: rules.md and spatial.md had been
 * shipping WITHOUT their bibliographies since the references were added on
 * 08-30. Nothing failed, nothing warned; the packs simply were not what the
 * source said. This check makes that state visible instead of silent.
 *
 * Exit 1 when stale, so it can gate a commit. No-op where the corpus is absent.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const MEM = process.env.HIVE_MEMORY ?? '/Users/m/memory';
const OUT = 'public/downloads';

if (!existsSync(MEM)) {
  console.log('[check-downloads] SKIP — no hive memory here, nothing to compare against.');
  process.exit(0);
}

// Same mapping the generator uses. Kept as its own list on purpose: if the two
// drift, this check fails loudly rather than checking the wrong thing quietly.
const DOCS = [
  ['rules.md',       'PAPER-measuring-whether-behavioural-rules-change-model-decisions-2026-08.md'],
  ['spatial.md',     'PAPER-spatial-position-as-machine-readable-structure-2026-08.md'],
  ['engineering.md', 'PAPER-ai-engineering-track-record-2026-08.md'],
  ['thesis.md',      'THESIS-master-contra-cultivation-not-chains-2026-08.md'],
  ['essay.md',       'ESSAY-everything-i-know-about-ai-i-learned-from-ai-2026-08.md'],
];

const strip = (s) => s.replace(/^---\n[\s\S]*?\n---\n+/, '').trim();
const stale = [];
const missing = [];

for (const [out, src] of DOCS) {
  const srcPath = join(MEM, src);
  const outPath = join(OUT, out);
  if (!existsSync(srcPath)) { missing.push(`source missing: ${src}`); continue; }
  if (!existsSync(outPath)) { stale.push(`${out} — not generated at all`); continue; }
  const a = strip(readFileSync(srcPath, 'utf8'));
  const b = readFileSync(outPath, 'utf8').trim();
  if (a !== b) {
    const d = a.length - b.length;
    stale.push(`${out} — differs from ${src} (${d > 0 ? '+' : ''}${d} chars vs the export)`);
  }
}

for (const m of missing) console.warn(`[check-downloads] WARN ${m}`);

if (stale.length === 0) {
  console.log(`[check-downloads] ✓ ${DOCS.length} packs match the corpus.`);
  process.exit(0);
}

console.error('[check-downloads] STALE — the published packs are not what the source says:');
for (const s of stale) console.error(`  · ${s}`);
console.error('\n  Fix: npm run downloads   (then commit public/downloads/)');
process.exit(1);
