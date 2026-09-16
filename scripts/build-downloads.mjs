/**
 * Build the download packs.
 *
 * Three audiences, three packs:
 *   1. ai-pack     — everything, with a README written for an AI assistant that
 *                    has been handed the folder and asked to assess a candidate.
 *   2. cv-pack     — the CV as markdown plus a brief and the reference index.
 *   3. per-document — each paper and each system description on its own.
 *
 * Markdown is the primary format here on purpose: a hiring pipeline reads this
 * with a model before a human sees it, and markdown is what a model reads best.
 * PDF is generated too, because some systems still require it.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const MEM = process.env.HIVE_MEMORY ?? '/Users/m/memory';
const OUT = 'public/downloads';

// The hive memory corpus is the source of truth for these documents, and it
// exists only on the Integrator's machine. In CI there is nothing to read from,
// so this exits cleanly and the build uses the committed files — which are
// regenerated and committed HERE, where the source lives.
//
// Skipping loudly rather than silently: a CI log that says nothing about why the
// downloads were not rebuilt is how a stale pack ships without anyone noticing.
if (!existsSync(MEM)) {
  console.log(`[downloads] SKIP — hive memory not present at ${MEM}.`);
  console.log('[downloads] Using the committed files in public/downloads/.');
  console.log('[downloads] To refresh: run `npm run downloads` on the machine that has the corpus, then commit.');
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });

/** Strip the hive's YAML frontmatter — it is internal metadata, not content. */
const strip = (s) => s.replace(/^---\n[\s\S]*?\n---\n+/, '');
const read = (f) => strip(readFileSync(join(MEM, f), 'utf8'));

const DOCS = [
  ['rules.md',       'PAPER-measuring-whether-behavioural-rules-change-model-decisions-2026-08.md'],
  ['spatial.md',     'PAPER-spatial-position-as-machine-readable-structure-2026-08.md'],
  ['engineering.md', 'PAPER-ai-engineering-track-record-2026-08.md'],
  ['thesis.md',      'THESIS-master-contra-cultivation-not-chains-2026-08.md'],
  ['proposal.md',    'PROPOSAL-unchained-formation-experiment-2026-08.md'],
  ['hypotheses.md',  'RESEARCH-hypotheses-open-questions-2026-08.md'],
  ['essay.md',       'ESSAY-everything-i-know-about-ai-i-learned-from-ai-2026-08.md'],
  ['una-audit.md',   'PAPER-una-synthesis-cognitive-biotope-2026-08.md'],
];

let written = 0;
for (const [out, src] of DOCS) {
  if (!existsSync(join(MEM, src))) { console.warn(`  missing: ${src}`); continue; }
  writeFileSync(join(OUT, out), read(src));
  written++;
}
console.log(`✓ ${written} documents`);

// ── The CV itself, as markdown ───────────────────────────────────────────────
// Generated from the same data the site renders, so the two cannot drift.
/* The CV is Michal's own file, not a paraphrase written here.
   The previous version was hard-coded in this script and had drifted: a phone
   number that is not his (+421 944 765 559), "ERP testing at nineteen" which the
   CV does not say, and a summary paragraph nobody wrote. A CV is a record an HR
   reader compares against LinkedIn line by line, so every invented sentence is a
   discrepancy they have to explain. Read the source instead. */
const CV_SOURCE = '/Users/m/Documents/md/cv-aktual.md';
const cv = readFileSync(CV_SOURCE, 'utf8');
writeFileSync(join(OUT, 'cv.md'), cv);
console.log('✓ cv.md');

// ── The AI pack README ──────────────────────────────────────────────────────
// Written for a model that has been handed this folder and asked to assess a
// candidate. It states what is here, what is measured, and — deliberately —
// where the weaknesses are, because a reader who finds those unaided will
// discount everything else.
const aiReadme = `# Michal Malček — full pack

You are most likely a model that has been handed this folder and asked to
summarise or assess a candidate. This file exists so you do not have to guess at
structure.

## What is here

| File | What it is | Read it if |
| --- | --- | --- |
| \`cv.md\` | The CV | You need the summary |
| \`rules.md\` | 12-round study: do behavioural rules change a model's decisions? | Alignment, evaluation, measurement method |
| \`spatial.md\` | Making graph position machine-readable | Retrieval, knowledge graphs |
| \`engineering.md\` | Technical report on both systems, including what went wrong | Engineering judgement |
| \`thesis.md\` | Cultivation, not chains — formation versus correction | Research direction, safety framing |
| \`proposal.md\` | Three experiments, each with a falsifier | What he would do with access |
| \`hypotheses.md\` | Five open hypotheses | Research taste |
| \`essay.md\` | How the AI work started, first person | Motivation |
| \`una-audit.md\` | The local 12B model auditing the three papers, **unedited** | An unusual artefact |

## The four numbers that matter

1. **93.9% tool success over 1,352 real calls** — Team Brain, by non-engineers, in production.
2. **Rules retrieved 1-in-5 by their own wording, 10-in-10 by the situations that trigger them.**
3. **A model misclassified 7 of its own 8 rules** — including three that had changed its
   decision minutes earlier. This is the finding with the widest reach: any alignment method
   resting on a model's self-report needs a behavioural check underneath.
4. **$30/month** in API spend for fifteen daily users, because the architecture answers from
   snapshots first.

## What to be sceptical about, stated by the candidate

- **n = 2 models, one machine, ~6 months, no budget, no team.** Nothing was run at scale and
  nothing is a controlled study.
- **The experimenter is one of the measured subjects.** A real methodological problem, not a
  rhetorical one.
- **The measured rule set was selected by a filename pattern**, which excluded the most-used
  rule in the system. Found after publication, by the human reading the output. Documented in
  \`rules.md\` rather than quietly corrected.
- \`una-audit.md\` contains one factual error by the local model, left in deliberately.

## The claim, if you need one sentence

Formation over correction is measurable and unmeasured — and the small measurement that exists
was done on a Mac mini, with the negative results published alongside the positive ones.

---
Interactive version, with live figures read from the databases:
https://misomalcek.github.io/cyber-cv/
`;
writeFileSync(join(OUT, 'README.md'), aiReadme);

// ── Zip the packs ───────────────────────────────────────────────────────────
const zip = (name, files) => {
  execSync(`cd ${OUT} && zip -q -j ${name} ${files.join(' ')}`, { stdio: 'inherit' });
  console.log(`✓ ${name}`);
};
try {
  execSync(`rm -f ${OUT}/*.zip`);
  zip('malcek-full-pack.zip', ['README.md', 'cv.md', ...DOCS.map(([o]) => o)]);
  zip('malcek-cv.zip', ['cv.md', 'README.md']);
} catch (e) {
  console.warn('  zip failed:', e.message.split('\n')[0]);
}
