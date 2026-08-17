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

  stack: ['TypeScript', 'Hono', 'llama.cpp / Metal', 'Gemma-4 12B', 'Qdrant', 'Apache AGE', 'pgvector', 'bge-m3', 'TimescaleDB', 'React 19', 'three.js'],
};
