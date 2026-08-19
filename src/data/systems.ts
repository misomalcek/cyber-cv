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


  /**
   * What an AI engineer would want to know: the paths tried and abandoned, and
   * what the measurement said. Written for a reader who has made these calls
   * themselves and will recognise a claim without evidence behind it.
   */
  lessons: [
    {
      head: 'Parallel agents and heavy workflows did not work here, and the endpoint was minimal',
      body: `The route was tried in both directions: multi-agent orchestration, parallel runs,
        elaborate harnesses, several Claude configurations. What survived is deliberately lean —
        one cloud model, one local model, one shared store, a hand-written runtime. Not a
        philosophical preference: on a single 24&nbsp;GB machine every added layer competes for
        the same memory, and every added abstraction removes a place to look when something goes
        wrong. <b>The measured constraint decided the architecture, and the architecture is
        smaller than the ambition that started it.</b>`,
    },
    {
      head: 'We tried orchestration and multi-agent, and ended up with neither',
      body: `The first design was one agent per task; it reached 61 definitions before it
        became clear nobody could choose between them. The names were accurate and useless.
        Collapsed to six specialists, with the narrow prompts demoted to loadable context —
        <b>the taxonomy was a UX problem wearing an architecture costume</b>. Native
        multi-agent came back later for the 26B MoE model and was parked, not because the
        mechanism failed but because it only pays off on a model that costs the rest of the
        machine.`,
    },
    {
      head: 'No agent framework, and the reason is specific',
      body: `Decided May 2026 and held since: own runtime, vendor SDK only for the cloud
        model. A framework injects prompt content you did not write, which is fatal when the
        thing you are measuring is how a 12&nbsp;B model responds to instructions.
        <b>You cannot attribute a behaviour change to your rule if a library is also editing
        the prompt.</b> The same logic kept Zod out of 22 tool modules — a hand-written
        validator rejected 5 of 5 probes, so the dependency would have replaced working code
        with equivalent code. It is used in exactly one place, where the input is a file from
        disk we do not control.`,
    },
    {
      head: 'The failures were almost never in the model',
      body: `Three days were spent on retrieval quality before the actual defect surfaced:
        the answer was not in the index. 58% of one collection were duplicates of a single
        turn; the local model's own conversations had never been indexed at all. Separately,
        an embedding model was used symmetrically for weeks when it requires asymmetric
        prefixes — short irrelevant text outranked long relevant text, and nothing errored.
        <b>Before touching a ranking function, prove the answer is in the index.</b>
        Three times it was not.`,
    },
    {
      head: 'Silent failure is the class, not the bug',
      body: `Nine instances found in one sweep, all the same shape: input accepted, matched
        against nothing, discarded, operation reports success. A schema validator that
        skipped unknown keys meant every optional-parameter typo the local model ever made
        was silently ignored. A CLI flag that did not exist swallowed three evidence blocks.
        Five mutations — including a token revoke — treated a non-2xx response as a
        rejection rather than a failure.`,
    },
    {
      head: 'What the measurement said about the model, not the code',
      body: `Rules retrieved by their own wording: 1 in 5. Stored as descriptions of the
        situations that trigger them: 10 in 10. Asked afterwards which of its rules carried
        real information, the model misclassified <b>7 of 8</b> — including three that had
        changed its decision minutes earlier. That single result changed the method: value is
        measured by behaviour, never by asking the model.`,
    },
  ],

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
