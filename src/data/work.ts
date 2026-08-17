/**
 * Repositories and public output.
 *
 * The principles and axioms that used to live here were cut: stated as a creed
 * they were unfalsifiable, and an independent review read the Gödel/Tarski
 * framing as claiming technical lineage the theorems do not support. What
 * survives is on the page as four operating rules, each named with the specific
 * failure that produced it.
 *
 * Repository claims here are checked against the code, not against the plan.
 * Where the graph says one thing and the source says another, the source wins
 * and the difference is stated.
 */

export const repos = [
  {
    name: 'cyber-cv',
    what: 'This site, and the pipeline behind it.',
    detail: 'Astro + Tailwind. Every figure is read from Postgres and Qdrant at build time by a script; a freshness gate fails the build on stale numbers. Includes the three.js crystal.',
    href: 'https://github.com/misomalcek/cyber-cv',
    state: 'public',
  },
  {
    name: 'aisearch',
    what: 'Why a Cloudflare AI Search index returned nothing.',
    detail: 'The index held the SPA shell, not the article bodies — an exact verbatim sentence scored zero while generic boilerplate scored ten. Diagnosis, evidence table, fix, and four secondary findings.',
    href: 'https://github.com/misomalcek/aisearch',
    state: 'public · WIP',
  },
  {
    name: 'todoapi',
    what: 'A small REST API, done properly.',
    detail: 'Express, SQLite, node:test. 16 tests covering the failure paths, not only the happy one. Published because a small complete thing says more than a large incomplete one.',
    href: 'https://github.com/misomalcek/todoapi',
    state: 'public · 16/16 tests',
  },
  {
    name: 'aurora',
    what: 'Single-file multi-provider AI chat.',
    detail: 'One HTML file, several providers, streaming, RAG grounding. The key is entered by the visitor and never stored — so it is safe to host publicly.',
    href: 'https://github.com/misomalcek/aurora',
    state: 'public',
  },
  {
    name: 'mini-grok',
    what: 'A native macOS chat window in Python.',
    detail: 'AppKit directly — no Electron, no web view. Starts in well under a second because it uses the window server the OS already has.',
    href: 'https://github.com/misomalcek/mini-grok',
    state: 'public',
  },
  {
    name: 'gsc-api',
    what: 'Search Console reporting for mixed-language queries.',
    detail: 'Topic clustering over Slovak and English queries written with and without diacritics — a keyword map rather than a model, because a wrong bucket has to be auditable in one line.',
    href: 'https://github.com/misomalcek/gsc-api',
    state: 'public',
  },
  {
    name: 'factorium · team-brain',
    what: 'The two production systems.',
    detail: 'Team Brain is client-owned and handed over; Factorium goes open source at release. Neither is mine to publish today, which is why the repositories above are the smaller things instead.',
    state: 'not public',
  },
];

export const public_output = [
  {
    name: 'aisvet.sk',
    what: 'Writing on AI, in Slovak',
    detail: 'Where the ideas get explained to people who are not engineers — a harder test of whether you understand something than explaining it to people who are.',
    href: 'https://aisvet.sk',
    meta: null,
  },
  {
    name: 'AI Svet',
    what: 'Video — 13 published',
    detail: 'Agentic workflows in Claude · AI and system design · agent harnesses · <b>AI alignment in the workplace</b>. Technical subjects in a language that has almost no technical AI material.',
    href: 'https://www.youtube.com/@aisvet-sk',
    meta: 'Most watched: a Claude guide in Slovak',
  },
  {
    name: 'AI Svet Podcast',
    what: 'Audio',
    detail: 'Long-form episodes on the same subjects. One reached <b>#6 in hearthis.at\'s audiobook chart</b> for the week of 17–24 May 2026 — <i>"AI a Kariéra: Rozhodne o vašej IT kariére chladný AI algoritmus"</i>, 21:48.',
    href: 'https://hearthis.at/aisvet/',
    meta: 'Chart position verifiable at the source',
  },
];
