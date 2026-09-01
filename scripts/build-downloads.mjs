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
const cv = `# Michal Malček — AI Engineer / Explorer / SEO

Poprad, Slovakia · 10 min from the airport, 2 h to London
miso.malcek@gmail.com · +421 944 765 559
Interactive version: https://misomalcek.github.io/cyber-cv/
GitHub: https://github.com/misomalcek

---

## In one paragraph

Twenty years across both sides of software delivery — ERP testing at nineteen,
Google in Prague and Dublin at twenty-four, eight years proving things with
measurement in a market that punishes wishful thinking. In the last year that
turned into AI engineering: one production system delivered and handed over, one
running daily on the machine under my desk. Bachelor's in Applied Informatics,
hooked to cybernetics since high school, one three-day AI generalist course —
everything else learned from the systems themselves.

## Two systems

**Team Brain** — a multi-source SEO analytics platform an agency team used daily.
Fifteen users, five live data sources joined behind one query surface, one 8 GB
VPS. **93.9% tool success over 1,352 real calls** by non-engineers. Six
specialists with the model chosen per role (Sonnet for analysis, Haiku for
generation), five routing signals tried in order, nine autonomous jobs on cron.
49.4 M input tokens over five months — about **$30/month** in Claude API spend,
because snapshots answer first and the live API is the fallback. Built on the
Anthropic SDK, delivered with nine handover documents.

**Factorium** — a local-first desktop environment where a person and two models
share one memory. One Apple M4, 24 GB, **no cloud inference**. One Postgres
holding pgvector, two Apache AGE graphs and a TimescaleDB hypertable, with Qdrant
alongside. 23 tool modules behind one registry; the local model gets a
deliberately smaller surface because every extra schema is prompt tax on a 12B.
Six-layer retrieval fused by rank.
**186 source files, 563 commits, build passes at 2,911 modules, 23/23 smoke tests.**
Open source at release.

## Research

Three papers and an unedited audit of them by the local model, all written from
stored records rather than recollection.

- **Rules retrieved by their own wording: 1 in 5. Stored as the situations that
  trigger them: 10 in 10.**
- **Asked which of its own rules carried real information, the model misclassified
  7 of 8** — including three that had changed its decision minutes earlier. Value
  is measured by behaviour, never by asking.
- **1,512 of 3,039 entities silently lost their centrality tier** after one
  ordinary session. A derived global property is a cache, not a field.
- A selection defect found after publication: the measured rule set had been
  seeded by a **filename pattern**, which excluded the most-used rule in the
  system. Excluded rules average graph degree 7.1 against 3.9 for included ones.

## Experience

**2024 – 2026 · AI Engineer** (Team Brain, Factorium)
Two systems, described above.

**2023 – 2026 · SEO & Content Lead** — msg life Slovakia · Swiss Re (parallel, 3 months)
Swiss Re: keyword and synonym coverage for the Sigma annual report, readership
~1,500 → **4,500**. msg life: first large keyword clusters with Gemini + Ahrefs,
**traffic doubled inside a year** on WordPress. Ahrefs workshops at both.

**2019 – 2023 · Senior SEO Manager** — Lottoland, Gibraltar
50% management (4 internal, 5 external, 3 markets), 50% hands-on. Three internal
SEO trainings.

**2015 – 2019 · SEO Manager** — Lottostar24 · Tippland Hamburg
German traffic **zero → 30k monthly sessions**, 100k across satellites. 0.9%
vested equity. Two systems in Laravel with one developer — a result pipeline
recomputing statistics after every draw into live article text, and a
distribution layer feeding a network without duplicates. **Ran unattended for two
years and still ranks.** Server-side prerendering for Angular, years before
frameworks made it routine.

**Not one domain penalised and no legal claim in eight years**, in a vertical
where competitors kept a floor of lawyers.

**2012 – now · Founder**, My Marketing s.r.o. · co-founded a CEE sportswear
e-commerce reaching €50k monthly turnover in year one.

**2010 – 2011 · Google**, Prague and Dublin.

## Education

Bachelor of Applied Informatics, University of Economics Prague (avg 1.6) ·
CEMS International Management, taught in English (avg 1.7) · Information Systems
& Technologies, 41 ECTS · Erasmus at Corvinus Budapest, A in every subject ·
Top 10 student of ~500.

Every document is in the repository at
https://misomalcek.github.io/cyber-cv/credentials/ — no sign-in, no dead links.

## Languages

Slovak and Czech native · English advanced (a full master's studied in it) ·
Russian A2, third worldwide in a St Petersburg University olympiad · German A1,
Goethe-Institut.
`;
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
