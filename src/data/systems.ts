/**
 * The two systems, kept apart.
 *
 * They are not one story. Team Brain is a multi-source analytics platform for a
 * team of people; Factorium is a local-first environment where one person and
 * two models share a memory. They overlap in stack and in lineage, and nowhere
 * else — describing them together flattens both.
 *
 * Figures come from the plan graph, the codebase and the production database at
 * handover, not from recollection.
 */

export const teamBrainSystem = {
  name: 'Team Brain',
  tagline: 'A multi-source analytics platform an SEO team used daily',
  status: 'built · deployed · handed over',
  period: 'Jan 2026 idea → delivered and handed over',
  host: 'one 8 GB Debian VPS',
  planNodes: 191,

  /** What it actually did, in the order a user encountered it. */
  what: [
    'Ask a question in Slovak; the system decides which of six specialists answers it, loads that specialist\'s context, and reaches for the tools it needs.',
    'Those tools query five live data sources, join across them, and return an answer with the age of every number attached.',
    'Anything worth keeping is written back as a memory record — which the next question can then use.',
  ],

  /** The data layer is the part that made it more than a chat wrapper. */
  dataLayer: {
    lead: 'Five sources, one query surface',
    body: `Most "AI for SEO" tools wrap a single API. This joined five, which is
      where the interesting questions live — a ranking drop is rarely visible in
      one source alone.`,
    sources: [
      { name: 'Ahrefs', detail: '23 tools across Site Explorer, Link Analysis, Keywords Explorer and Site Audit. 500k API units a month, budget-aware, with a check_budget tool so a large query could not silently exhaust the plan.' },
      { name: 'Google Search Console', detail: 'Direct API via a service account. Nightly snapshots of the top 1,000 queries over a 90-day window, three domains — so the common questions cost zero API calls.' },
      { name: 'Google Analytics 4', detail: 'Grew from 3 tools to 18: landing pages, engagement, source/medium, geo, device, key events, channel attribution, period comparison, funnels, cohort retention.' },
      { name: 'CrUX', detail: 'Chrome User Experience Report — real-user Core Web Vitals rather than lab numbers, which is the difference between a synthetic score and what visitors experienced.' },
      { name: 'Live page rendering', detail: 'Headless rendering for JavaScript-heavy pages, made the default for technical audits after fetch-only proved unreliable on client-rendered sites.' },
    ],
  },

  /** Decisions that are worth defending in an interview. */
  decisions: [
    {
      head: 'PostgreSQL with TimescaleDB, not a separate OLAP store',
      body: 'The database was already there for the application and for vectors. Adding hypertables and continuous aggregates bought time-series analysis without a second system to keep in sync — and no cross-store consistency problem to design around.',
    },
    {
      head: 'The model writes SQL; Node runs it',
      body: 'A single query tool against the data layer, rather than a tool per question. Snapshot juggling disappeared, and a question nobody anticipated could still be answered.',
    },
    {
      head: 'A sandboxed execution tool, to stop the model doing arithmetic',
      body: 'Aggregations, joins and percentiles over large datasets run as code in a VM. A language model computing a median across 5,000 rows is a wrong answer waiting to happen — this made that structurally impossible.',
    },
    {
      head: 'Every number carries its age',
      body: 'Freshness badges in the UI and in tool results. An analytics answer without a timestamp invites a decision based on last month\'s data, and nobody notices until it is expensive.',
    },
    {
      head: 'Snapshot-first, then the API',
      body: 'Cached snapshots answer first; the live API is the fallback. Cheaper, faster, and it keeps working when a provider rate-limits you mid-audit.',
    },
  ],

  /** Aggregates from the production database at handover. */
  measured: {
    users: 15,
    conversations: 446,
    messages: 3558,
    toolCalls: 1352,
    toolSuccessPct: 93.9,
    agentRuns: 549,
    tokensIn: 49_400_000,
    reports: 1480,
    articles: 1121,
    memories: 514,
    period: 'Feb–Jun 2026',
  },

  /** The agent redesign, which is the lesson worth telling. */
  agents: {
    written: 61,
    live: 12,
    specialists: 6,
    lesson: `I first built one agent per task and it reached 61 definitions. Nobody
      could tell which to reach for — the names were accurate and useless. Collapsing
      them into six specialists, each absorbing the narrow agents it replaced as
      loadable context, fixed it. A capability taxonomy is a UX decision, not an
      architecture decision.`,
  },

  stack: ['Express 5', 'TypeScript', 'PostgreSQL', 'TimescaleDB', 'pgvector', 'Next.js 16', 'React 19', 'Claude API', 'PM2', 'Nginx'],
};

export const factoriumSystem = {
  name: 'Factorium',
  tagline: 'A local-first environment where a person and two models share one memory',
  status: 'running daily · pre-release · open source from release',
  period: 'in daily use',
  host: 'one Apple M4 Mac mini, 24 GB, no cloud inference',

  what: [
    'One human, one cloud model and one local model working against the same stores — the same memory, the same knowledge graph, the same plan.',
    'The local model performs long agentic runs: it writes code, drives a browser, and queries what I query. It is not a chat window with tools bolted on.',
    'Everything a session learns is written back, so the next session starts informed rather than starting over.',
  ],

  /** What makes it different from a RAG demo. */
  pillars: [
    {
      head: 'One database holding three shapes of data',
      body: 'pgvector and Apache AGE coexist in one Postgres instance, with TimescaleDB alongside for observability. Vectors, graph and relational in one connection, one backup, and no consistency problem between stores.',
    },
    {
      head: 'Memory with a metabolism',
      body: 'Records carry importance and decay; frequently reached records strengthen, unused ones fade, and anchors never decay. The store compounds meaning rather than only growing.',
    },
    {
      head: 'The plan is a graph, not a document',
      body: 'Every task, decision and finding is a node in the same database as everything else — which is why a mistake made in May is retrievable in August by describing the situation rather than remembering its name.',
    },
    {
      head: 'A hard constraint that decided the architecture',
      body: '24 GB total. A 12B model at 7.7 GB resident instead of the stronger 26B at 16–17, because capability that costs you the browser, the database and the editor is not capability.',
    },
  ],


  /**
   * The architecture, named. A page about a system that does not say what the
   * system is made of is a brochure — and this one had no harness, no event bus
   * and no watcher in it, while all three are modules in the repository.
   */
  architecture: {
    lead: 'What it is actually made of',
    layers: [
      {
        name: 'Store',
        detail: 'One Postgres instance holding three shapes of data: pgvector for embeddings, Apache AGE for two graphs (knowledge, code), TimescaleDB for the activity hypertable. Qdrant alongside for seven vector collections. One connection, one backup, no cross-store consistency problem.',
      },
      {
        name: 'Memory with a metabolism',
        detail: 'Records carry importance, decay and Hebbian strengthening — reaching a record strengthens it, unused ones fade, anchors never decay. `biological-score.ts`. The store compounds meaning rather than only growing.',
      },
      {
        name: 'Agent runtime',
        detail: '23 tool modules behind one registry — memory, knowledge graph, code search, docs, git, browser, files, LIP, lexicon, vault. The local model gets a deliberately smaller surface than the HTTP registry: two hive verbs instead of a tool per source, because every extra schema is prompt tax on a 12B model.',
      },
      {
        name: 'Retrieval',
        detail: 'Six layers fanned out in parallel and fused by rank (RRF, Cormack 2009, k=60) rather than concatenated. Asymmetric embedding prefixes, diacritics folded at the single choke point both queries and documents pass through.',
      },
      {
        name: 'Watchers and the bus',
        detail: '`code-watcher.ts` ingests file changes into the code graph and re-computes spatial tiers 30s after a batch settles; a memory watcher indexes any markdown written to the store; `event-bus.ts` carries them to the UI. Nothing needs a manual re-index step.',
      },
      {
        name: 'Plan as a graph',
        detail: 'The Living Implementation Plan — every task, decision and finding is a node in the same database as everything else, vector-indexed, so a decision from May is retrievable in August by describing the situation rather than remembering its name.',
      },
      {
        name: 'Model layer',
        detail: 'llama.cpp on Metal behind a mutex that makes concurrent loads impossible — 24 GB does not fit two chat models. A liveness probe distinguishes a wedged model from a loading one, because /health returns 200 in both cases.',
      },
    ],
    counts: [
      ['186', 'TypeScript source files'],
      ['563', 'commits'],
      ['23', 'tool modules'],
      ['9', 'apps in the v01 surface'],
      ['2,911', 'modules in a passing build'],
      ['23/23', 'smoke tests'],
    ],
  },

  /** The model choice, which is the clearest example of how decisions get made here. */
  models: {
    lead: 'Three tiers, one hard constraint',
    constraint: 'No two chat models run concurrently on 24 GB. The switcher is strictly stop-then-start — reproduced live, not assumed.',
    tiers: [
      { id: 'E2B',  build: 'UD-Q4_K_XL',  resident: '~3.9 GB',   role: 'compact, and the vision tier — it ships its own projector' },
      { id: '12B',  build: 'Q5_K_M',      resident: '~7.7 GB',   role: 'the default, and what everything else is measured against' },
      { id: '26B',  build: 'QAT UD-Q4_K_XL', resident: '~16–17 GB', role: 'heavy reasoning only; it costs the rest of the machine' },
    ],
    /** Why the quantisation policy is deliberately not uniform. */
    policy: [
      {
        head: '26B is mixture-of-experts, so QAT only',
        body: `Expert routing is a discrete choice. Quantisation noise in the router
          logits sends a token to the wrong expert — a semantic error that compounds
          through the layers rather than a smooth loss of precision. Training-aware
          quantisation co-adapts those routing margins; post-training methods
          minimise per-layer reconstruction error and cannot touch them at all.`,
      },
      {
        head: '12B is dense, and stayed at 5-bit — because the evidence contradicted itself',
        body: `The routing argument does not transfer, so the bitrate tradeoff was
          genuinely open. Two independent grounding channels disagreed: one said the
          4-bit QAT build wins on long context and tool calling; the other, asked
          sceptically, pointed out that claim rests on static few-shot benchmarks,
          while on long-context and function-calling suites the 5-bit degrades less
          and the 4-bit spikes on schema errors. Tool calling is zero-tolerance here,
          so the disputed axis was the deciding one. <b>Not switching on contradictory
          evidence</b> — revisit only with a local A/B on our own traces.`,
      },
      {
        head: 'One build was deleted without ever being loaded',
        body: `A 26B download sat on disk behind a valid GGUF magic header with
          <b>28.9% of the file missing</b>. llama.cpp would have started loading and
          then hit a truncated tensor region, on a machine that had already kernel-
          panicked twice that day. A valid header proves nothing about the tail —
          check the size against the remote before loading anything resumed.`,
      },
    ],
    /** The bug this work exposed, which is more instructive than the decision. */
    bug: `Adding the compact tier surfaced a single module-level constant: the vision
      projector path was hardcoded to the 26B's. A third model would have been served
      the wrong projector against its own weights — a silent mismatch, not a crash.
      Now resolved per catalogue entry.`,
  },

  stack: ['TypeScript', 'Hono', 'llama.cpp / Metal', 'Gemma-4 12B', 'Qdrant', 'Apache AGE', 'pgvector', 'bge-m3', 'TimescaleDB', 'React 19', 'three.js'],
};
