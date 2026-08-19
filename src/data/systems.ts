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
  tagline: 'A multi-source SEO analytics platform an agency team used daily',
  status: 'built · deployed · handed over',
  period: 'Jan 2026 → delivered, handed over with full documentation',
  host: 'one 8 GB Debian VPS',

  /** The stack, by layer. Versions are what shipped. */
  stackLayers: [
    ['Runtime', 'Node.js 20 · TypeScript 5.9'],
    ['Backend', 'Express 5 · PM2 cluster · Nginx 1.26 · Let\'s Encrypt'],
    ['Frontend', 'Next.js 16 static export · React 19 · Tailwind 4'],
    ['Database', 'PostgreSQL 17 · ~150 MB'],
    ['Time-series', 'TimescaleDB 2.26'],
    ['Vector', 'pgvector 0.8 + pgvectorscale 0.9 · all-MiniLM-L6-v2, 384d'],
    ['Graph & text', 'Apache AGE 1.5 · pg_trgm'],
    ['AI', 'Anthropic SDK 0.71+ · Sonnet 4.6 / 4.5 · Haiku 4.5 / Opus 4.6'],
  ],

  /** Six specialists, each with the model it actually runs on. */
  agents: [
    ['Auditor', 'sonnet', 'Technical SEO audit, AEO, SERP analysis, Core Web Vitals'],
    ['Analyst', 'sonnet', 'Ahrefs + GSC + GA4 joined, competitor gap analysis'],
    ['Writer', 'sonnet', 'Article writing, editorial, brand voice'],
    ['Brief', 'sonnet-high', 'Content briefs, research, strategy'],
    ['Idea', 'haiku', 'Keyword ideation, brainstorming'],
    ['Batch', 'haiku', 'Multi-domain reports, bulk operations'],
  ],
  agentNote: `~45 sub-agents sit behind the six as loadable context, plus custom agents the
    team creates from chat and stores in the database. Model choice is per specialist: Haiku
    where the work is generative and cheap, Sonnet where it is analytic.`,

  /** Five signals, tried in order — not an LLM guessing which agent to be. */
  routing: [
    '@mention — explicit selection',
    'Action path — 29 actions across 8 categories',
    'Complexity — multi-domain or cross-source signals',
    'Keyword — registry score from each agent\'s declared keywords',
    'Base model — no specialist, plain conversation',
  ],
  modes: [
    ['default', 'standard response'],
    ['extended', 'depth and thoroughness'],
    ['fast', 'parallel tool calls, no preamble'],
    ['confirm', 'explicit approval before any state-changing action'],
  ],

  /** Five live sources joined behind one query surface. */
  sources: [
    ['Ahrefs', '23 tools · 500k API units/month, budget-aware with a check_budget tool'],
    ['Search Console', 'JWT service account, 3 domains · nightly top-1,000 snapshots over 90 days'],
    ['Analytics 4', '18 tools — landing pages, attribution, funnels, cohort retention'],
    ['CrUX', 'real-user Core Web Vitals, not lab scores'],
    ['Live rendering', 'headless Chromium, the default for technical audits'],
  ],

  /** Nine autonomous jobs on PM2 cron. */
  nightShift: [
    ['Daily 01:30', 'activate pending memories older than 7 days'],
    ['Daily 06:30', 'health probe, posted to the team feed'],
    ['Mon 05:00', 'weekly digest'],
    ['Wed 01:30 / 02:30', 'GSC snapshot · CrUX snapshot'],
    ['Sun 03:00', 'article scraper across 3 domains'],
    ['Monthly', 'memory decay · knowledge re-embedding · sitemap crawl'],
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
  costNote: `49.4 M input tokens over five months of daily use by fifteen people —
    about <b>$30 a month</b> in Claude API spend at Sonnet input pricing, roughly 14k input
    tokens per message. The cost control is architectural: snapshots answer first and the live
    API is the fallback, Haiku takes the generative work, and a budget tool stops a large query
    exhausting the plan.`,

  /** Decisions worth defending. */
  decisions: [
    {
      head: 'One Postgres, not a separate OLAP store',
      body: 'TimescaleDB hypertables and continuous aggregates in the database that was already there for the app and the vectors. No second system to keep in sync, no cross-store consistency problem.',
    },
    {
      head: 'The model writes SQL; Node runs it',
      body: 'One query tool against the data layer instead of a tool per question. A question nobody anticipated can still be answered.',
    },
    {
      head: 'A sandboxed execution tool, so the model does not do arithmetic',
      body: 'Aggregations, joins and percentiles over large result sets run as code in a VM. A language model computing a median across 5,000 rows is a wrong answer waiting to happen.',
    },
    {
      head: 'Every number carries its age',
      body: 'Freshness badges in the UI and in tool results. An analytics answer without a timestamp invites a decision made on last month\'s data.',
    },
    {
      head: '61 agent definitions collapsed to 6',
      body: 'Nobody could tell which to reach for; the names were accurate and useless. The narrow prompts became loadable context. A capability taxonomy is a UX decision, not an architecture decision.',
    },
    {
      head: 'Instructions bound to a worked example',
      body: 'Every instruction references a concrete tool call, so a stale instruction breaks loudly instead of quietly misleading.',
    },
  ],

  handover: `Delivered with nine handover documents — system overview, admin guide, dev guide,
    user guide in two languages, data model, workflow, and a two-tier access model. A system
    only its author can operate is not delivered; it is lent.`,

  stack: ['Express 5', 'TypeScript', 'PostgreSQL 17', 'TimescaleDB', 'pgvector', 'Apache AGE', 'Next.js 16', 'React 19', 'Anthropic SDK', 'PM2', 'Nginx'],
};

export const factoriumSystem = {
  name: 'Factorium',
  tagline: 'A desktop environment where a person and two models share one memory',
  status: 'running daily · pre-release · open source at release',
  host: 'one Apple M4 Mac mini, 24 GB, no cloud inference',

  /** Why it exists. Grounded in the plan record, not retrofitted. */
  premise: `It started as a harness for my own work and became the thing the work was about:
    every session with a model began from zero, and everything learned in it was lost when the
    window closed. Factorium is the answer to that — one store the human and both models read
    and write, so the next session starts informed.`,

  ambition: `The plan is to ship v1 as an ordinary application. Not a repo with a README and a
    docker-compose that assumes you are an engineer — an app a knowledge worker installs. The
    whole stack (Postgres with three extensions, a vector store, a local model server, the
    agent runtime) is packaged behind one install, and getting that to compile was most of the
    work. The point is that this level of human–AI symbiosis should not require a systems
    background to reach.`,

  openSource: `Open source from release, and meant as a starting point rather than a product —
    the way editors get forked and specialised. Factorium began from a VS Code base and kept
    roughly a fifth of it; the rest was removed or rewritten. Other variants should be able to
    do the same to this.`,

  /** Nine apps, read from the live registry — not from the docs, which are behind. */
  apps: [
    ['Chat · Stream', 'The local agent, as a thread with automatic chapters rather than a list of questions'],
    ['Search · Find', 'One box across knowledge, code, docs and the plan'],
    ['LIP · Plan', 'The plan itself — nodes, status, weights, dependencies'],
    ['Graph · Verse', 'Knowledge, code and docs as one graph: 2D nodes or a 3D crystal you fly through'],
    ['File · Browser', 'A file tree plus tabs the agent opens as it works'],
    ['Git · Repos', 'Commit log and working tree across repositories'],
    ['Watch · Ops', 'Service health, activity feed, backup state'],
    ['Project · Run', 'Start and watch a dev server from inside the environment'],
    ['Browse · Web', 'A real browser the agent can drive and read back'],
  ],

  /** What the local agent can actually do — hands, not just retrieval. */
  agentCan: [
    'Run shell commands and keep services alive across a session, then verify from outside with a real request',
    'Read, write and surgically edit files across any project, including bootstrapping a new one',
    'Drive a browser — screenshot, console, network, rendered page — so it can check its own UI work',
    'Search knowledge tier-aware, so a CORE result outweighs a peripheral tangent',
    'Walk the graph several hops from an entity',
    'Search indexed code by meaning rather than by string',
    'Read and update the plan, and read durable memory',
  ],

  architecture: {
    lead: 'What it is made of',
    layers: [
      ['Store', 'One Postgres instance: pgvector for embeddings, Apache AGE for the knowledge and code graphs, TimescaleDB for the activity hypertable. Qdrant alongside for seven collections. One connection, one backup, no cross-store consistency problem.'],
      ['Memory', 'Records carry importance, decay and Hebbian strengthening — reaching a record strengthens it, unused ones fade, anchors never decay.'],
      ['Agent runtime', '23 tool modules behind one registry. The local model gets a deliberately smaller surface than the HTTP registry: two hive verbs instead of a tool per source, because every extra schema is prompt tax on a 12B model.'],
      ['Retrieval', 'Six layers queried in parallel and fused by rank (RRF, k=60) rather than concatenated. Asymmetric embedding prefixes and diacritics folding at the single point both queries and documents pass through.'],
      ['Watchers', 'File changes ingest into the code graph and re-compute spatial tiers 30s after a batch settles; any markdown written to the store is indexed automatically. No manual re-index step exists.'],
      ['Plan', 'Every task, decision and finding is a node in the same database as everything else and vector-indexed — a decision from May is retrievable in August by describing the situation rather than remembering its name.'],
      ['Model layer', 'llama.cpp on Metal behind a mutex that makes concurrent loads impossible. A liveness probe separates a wedged model from a loading one, because /health returns 200 for both.'],
    ],
    counts: [
      ['186', 'TypeScript source files'],
      ['563', 'commits'],
      ['23', 'tool modules'],
      ['9', 'apps'],
      ['2,911', 'modules in a passing build'],
      ['23/23', 'smoke tests'],
    ],
  },

  /** The model set, as it actually stands. */
  models: {
    lead: 'One model in production, two on the bench',
    production: {
      id: 'Gemma-4 12B · Q5_K_M · ~7.7 GB resident',
      why: `The only tier used in production. Q5 for reliability where tool calling is
        zero-tolerance, and at 7.7 GB it leaves enough of the 24 GB free to load vision and
        audio projectors alongside it — which a larger model does not.`,
    },
    bench: [
      ['26B · QAT UD-Q4_K_XL', 'experimental, on hold — mixture-of-experts, and at 16–17 GB it costs the rest of the machine'],
      ['E2B · UD-Q4_K_XL, ~3.9 GB', 'held for Factorium Pocket, the planned mobile companion to the desktop app'],
    ],
    constraint: 'No two chat models run concurrently on 24 GB. The switcher is strictly stop-then-start — reproduced live, not assumed.',
    quantisation: `Quantisation policy is deliberately not uniform. On the MoE model, routing is a
      discrete choice, so quantisation noise in the router logits sends a token to the wrong
      expert — a semantic error rather than a smooth loss of precision, which is why only
      training-aware builds were considered there. On the dense 12B the argument does not
      transfer and two grounding channels contradicted each other, so it stayed at 5-bit:
      <b>not switching on contradictory evidence</b>.`,
    bug: `Adding a second tier surfaced a single module-level constant — the vision projector
      path was hardcoded to one model's. A third model would have been served the wrong
      projector against its own weights: a silent mismatch, not a crash.`,
  },

  stack: ['TypeScript', 'Hono', 'llama.cpp / Metal', 'Gemma-4 12B', 'Qdrant', 'Apache AGE', 'pgvector', 'bge-m3', 'TimescaleDB', 'React 19', 'three.js'],
};

/** Screenshot galleries. Filenames describe the shot. */
export const shots = {
  factorium: [
    ['knowledge-crystal.jpg', 'The knowledge graph as a 3D crystal'],
    ['orbital2.jpg', 'Orbital layout — distance from centre is importance tier'],
    ['gravity.jpg', 'Degree-scaled repulsion: hubs push apart instead of imploding'],
    ['force.jpg', 'Force layout, labels on'],
    ['kg-ptolemaic.jpg', 'Knowledge graph, shell view'],
    ['kg-amorphic.jpg', 'The same graph without shells'],
    ['factorium-code-graph.jpg', 'The code graph — entities and import edges'],
    ['code-lonely-cluster.jpg', 'A disconnected code cluster, visible at a glance'],
    ['kg-lonely-cluster.jpg', 'An isolated knowledge cluster'],
  ],
  teamBrain: [
    ['brain-home.jpg', 'Home — actions and agent picker'],
    ['brain-ui-chat.jpg', 'Chat with streaming and tool results inline'],
    ['brain-tool-calls.jpg', 'Tool calls, expanded with their results'],
    ['brain-ui-persona.jpg', 'Specialist selection'],
    ['brain-profile-modal.jpg', 'User profile and access tier'],
  ],
};
