/**
 * Structured copy from ~/Documents/md/cv-aktual.md — the approved CV text.
 * Home and portfolio render from here so the site cannot drift from the source file.
 */

export const headline = 'AI Engineer — LLM Systems, RAG, Agentic AI';

export const availability =
  'Available for Remote or Hybrid hire (15min to airport, 2hrs flight to London). Invoice or employment contract.';

export const summaryLead =
  'AI Engineer who builds innovative agentic LLM systems end-to-end: architecture, tool calling, RAG, local & cloud AI, custom inference, API, MCP, TTS/STT, vision, vector embeddings, graphs, evaluation, deploy, on-boarding, documentation.';

export const summaryStats =
  '12 years in software delivery and digital growth (Web developement, PPC, CMS, CRM, ERP), then 8 years leading international SEO teams. Senior experience with Cloud and VPS instances (AWS, Google Cloud, Hetzner, Host Europe, Cloudflare).';

export const portfolioApps = [
  {
    id: 'crystal-rag',
    name: 'Crystal RAG',
    desc: 'Desktop RAG app (Tauri, Rust, Three.js, Qdrant and the embedding model ship inside it), hybrid vector, lexical and graph retrieval fused with RRF. Search or add local/cloud endpoint to chat.',
    repo: 'https://github.com/misomalcek/crystal-rag',
    page: 'https://misomalcek.github.io/crystal-rag/',
    downloads: [
      { label: 'macOS', href: 'https://github.com/misomalcek/crystal-rag/releases/download/v0.4.10/crystal-rag_0.4.10_aarch64.dmg' },
      { label: 'Windows', href: 'https://github.com/misomalcek/crystal-rag/releases/download/v0.4.10/crystal-rag_0.4.10_x64-setup.exe' },
    ],
  },
  {
    id: 'seo-brain',
    name: 'SEO Brain',
    desc: 'Multi-agent SEO & Content platform (Typescript, Python, Anthropic SDK, PostgreSQL, Apache Age), one codebase deploys to a VPS, Cloud instance or as a macOS or Windows app. Runs with Claude API, OpenRouter or a local model, plus five Google APIs.',
    repo: 'https://github.com/misomalcek/seo-brain',
    page: 'https://github.com/misomalcek/seo-brain',
    downloads: [
      { label: 'macOS', href: 'https://github.com/misomalcek/seo-brain/releases/download/v0.1.1/seo-brain_0.1.1_aarch64.dmg' },
      { label: 'Windows', href: 'https://github.com/misomalcek/seo-brain/releases/download/v0.1.1/seo-brain_0.1.1_x64-setup.exe' },
    ],
  },
  {
    id: 'symferium',
    name: 'Symferium',
    desc: 'A local multi-model AI runtime for Apple Silicon with one Rust daemon that supervises the best engine for each model, keeps every load inside a memory budget, with browser UI, agent API, models catalog (huggingface API, llamacpp-turboquant, mlx, mlx-vlm, whispercpp, onnx).',
    repo: 'https://github.com/misomalcek/symferium/',
    page: 'https://github.com/misomalcek/symferium/blob/main/README.md',
    downloads: [] as { label: string; href: string }[],
  },
  {
    id: 'wisdomkeeper',
    name: 'The Wisdomkeeper',
    desc: '3D open-world AI game with custom RUST inference runtime (2,841 lines) over llama.cpp bindings. Log-probability judge, grammar-constrained output. Everything proceduraly generated, running smooth even on a static github page.',
    repo: 'https://github.com/misomalcek/the-wisdomkeeper/',
    page: 'https://misomalcek.github.io/the-wisdomkeeper/',
    downloads: [
      { label: 'macOS (local AI)', href: 'https://github.com/misomalcek/the-wisdomkeeper/releases/download/desktop-0.1.2/wisdomkeeper-infinite_0.1.2_aarch64.dmg' },
      { label: 'Windows (local AI)', href: 'https://github.com/misomalcek/the-wisdomkeeper/releases/download/desktop-0.1.2/wisdomkeeper-infinite_0.1.2_x64-setup.exe' },
    ],
    playNote: 'Play online (no install, no AI)',
  },
] as const;

export const magazines = [
  {
    name: 'alteranai.com',
    href: 'https://alteranai.com/',
    line: 'AI engineering magazine in English.',
  },
  {
    name: 'aisvet.sk',
    href: 'https://aisvet.sk/',
    line: 'AI magazine in Slovak, Cloudflare AI Search chat.',
  },
] as const;

export const productionSystems = [
  {
    id: 'team-brain',
    name: 'Team Brain',
    subtitle: 'AI knowledge hub, msg life Slovakia · delivered and handed over Jun 2026',
    intro:
      'Claude API for a 15-person SEO and content team, on one Hetzner 8 GB VPS. Every figure below is from a database-generated usage report:',
    bullets: [
      '1,352 tool calls at 93.9% success, across 25 distinct tools, each with its own measured rate — including the weak ones',
      '~$30/month total API spend (billed; ran closer to $22) — Haiku for tool routing, Sonnet for synthesis',
      '15 users, all 15 active · 446 conversations · 3,558 messages · 549 agent runs · 1,480 reports',
      '50.2M input / 2.25M output / 4.95M cached tokens over those 549 runs',
      '1,121 articles · 514 memories · 1,454 embeddings produced',
      'Four live data sources: Search Console, GA4, Ahrefs, CrUX. Seven-layer prompt system, agents, personas, semantic layer',
      'Haiku for tool routing, Sonnet for synthesis — a deliberate cost/quality split, in the code not the pitch',
      'Official Anthropic SDK from the first commit. Near-zero hallucinations, full documentation, clean handover to non-engineers',
    ],
    link: 'https://brain.msgweb.io/',
    linkLabel: 'Team Brain (production)',
  },
  {
    id: 'factorium',
    name: 'Factorium',
    subtitle: 'Sovereign AI system, running daily on one Mac · private, demo on request',
    intro:
      'Gemma-4 12B Q5 doing real agentic work with no cloud inference. 69 native tools, unified retrieval over Postgres, pgvector, Qdrant, Apache AGE and TimescaleDB.',
    bullets: [
      '64,644 lines of TypeScript on 29 runtime dependencies — "cut the middlemen" as a measurement, not a philosophy',
      'Longest unattended run: 120 turns, 120 tool calls, 67 minutes, no turn cap hit',
      '477 logged tool calls · 0 reasoning failures · all 63 errors were environment or guard, 75% recovered immediately',
      '78,413 embedding points across 18 collections · code graph of 3,567 entities and 11,002 relations over 5 repositories',
      '6,169 organic memory facts with real timestamps, retrieval at ~150 ms p50',
      'Research corpus with provenance tiering: 5,629 chunks, 187 files, every chunk tagged primary / own / synthesis / OCR',
      '34× latency regression found and fixed — traced to one disabled prompt-cache flag; 24.2 s → 1.0 s per task',
      'Memory index repaired end to end: 77% of the corpus was being silently truncated before reaching the vector store; 1,050 → 15,232 chunks with recall held at 8/10 rank-1 through 14.5× growth',
    ],
  },
] as const;

export const experience = [
  {
    role: 'AI Engineer, Sole Owner',
    company: 'My Marketing, s.r.o.',
    meta: 'Jan 2012 – present · Poprad (Slovakia) · Freelancer',
    bullets: [
      'Design, build and ship the AI systems and apps end to end, with full autonomy and accountability.',
      'Advanced hook system and a custom operating mode for Claude Code and Cursor, CDP AI browser automation tools for Gemini and Google AI mode, Custom Astro-based AI CMS that auto-updates at build',
      'Cloudflare edge platform (2 production zones): Workers KV, Workers AI, AI Search, R2 Storage, DNS, SPF and DMARC.',
      'Before AI: built 3D sales configurator with custom CRM — live since 2017, 20+ websites & e-shops, lottery results auto-scrape system, Google Partner agency (managed €10k/month local PPC budget)',
    ],
    link: { href: 'https://individualautodesign.eu/configurator/', label: '3D configurator' },
  },
  {
    role: 'AI Engineer, Senior SEO Specialist',
    company: 'msg life Slovakia',
    meta: 'Sep 2024 – Jun 2026 · Bratislava (Slovakia) · Remote',
    bullets: [
      'Built and handed over production agentic AI system Team Brain (still used as deployed) based on Anthropic SDK for autonomous Web analytics, SEO optimization and Content production',
      'Role formalised as AI Engineer in Jan 2026; 4 AI and 5 SEO workshops for the entire Slovak branch',
      'Consolidated topic clusters and content pillars across technical (AI/ML, Java, Python, QA, SDLC) and HR content using Gemini, Claude.ai, Microsoft Copilot, NotebookLM',
      'Doubled site traffic in a year despite slow release cycles on agency-managed Wordpress site.',
    ],
    link: { href: 'https://brain.msgweb.io/', label: 'Team Brain' },
  },
  {
    role: 'Digital Media Manager',
    company: 'Swiss Re',
    meta: 'Nov 2024 – Feb 2025 · Bratislava (Slovakia) · Hybrid',
    bullets: [
      'Grew Sigma annual report readers from 1,5k to 4,5k and more leadership topics on a DR 90+ domain.',
      'First hands-on LLM work: ChatGPT Pro, loading articles into memory and feeding Ahrefs data manualy',
      '3 Ahrefs workshops; every team member reported new skills at quarterly review',
      'Cleared Magnolia CMS, DAM and Search Console issues that had been open in Jira for almost two years.',
      'After probation continued with the more suitable remote role at msg life Slovakia which I held in parallel.',
    ],
  },
  {
    role: 'SEO Lead DACH',
    company: 'Tippland GmbH',
    meta: 'Sep 2017 – Mar 2023 · Malta → Hamburg (Germany) · On-site till Jan 2020, then Remote',
    bullets: [
      'Executed SEO strategy for a lottery startup across DE, AT, CH, UK: Content, Keywords, Domains, AWS server admin, Link-building, Angular pre-rendering, Satellite sites, Programatic SEO, Affiliates, Freelancers',
      'Built Tippland Magazin (incl. content), ranks and runs 9 years later with near-zero maintenance.',
    ],
    link: { href: 'https://www.tippland.de/magazin/', label: 'Tippland Magazin' },
  },
  {
    role: 'SEO Team Lead CEE',
    company: 'Lottoland Ltd.',
    meta: 'Jul 2016 – Aug 2017 · Gibraltar (residing in Spain) · On-site',
    bullets: [
      'Managed 4 internal and 5 external colleagues SK, CZ and PL, with a €15k/month link-building budget.',
      'Created "Keyword Heroes", the internal Ahrefs training series; completed the 6-week StepUp management challenge',
    ],
  },
  {
    role: 'Online Marketing Manager',
    company: 'Individual Auto Design GmbH',
    meta: 'May 2015 – Jun 2016 · Rimavská Sobota (Slovakia) · On-site',
    bullets: [
      'Full-stack online marketing and in-house web development in 5 languages (DE, SK, CZ, HU, EN), WordPress + Magento, internal analysis for SAP Business One implementation',
      'Ran every online channel, migrated a content-heavy legacy site and grew visits and orders every month.',
    ],
  },
  {
    role: 'Startup Scholarship',
    company: 'NOVA University & Startup Lisboa',
    meta: 'Jul 2013 – Aug 2013 · Lisbon (Portugal)',
    bullets: [
      'Summer program for outstanding students and future entrepreneurs, with lectures, workshops and business practice at a leading European startup hub.',
    ],
  },
  {
    role: 'Online Media Associate Programme',
    company: 'Google',
    meta: 'Jun 2011 – Aug 2011 · Dublin (Ireland) · On-site',
    bullets: [
      'Turned manual customer categorisation into an auto-improving customer database with scripting — delivered to product manager in Mountain View, who put a team on it',
      '2× Peer Bonus for AdWords help guides, Ads Pro Exams (search, display) and Internal trainings (coding in python, presenting with confidence, managing personal energy, compliance)',
    ],
    link: { href: 'https://misomalcek.github.io/cyber-cv/refs/andrew-google.png', label: 'reference' },
  },
  {
    role: 'Associate Product Marketing Manager',
    company: 'Google',
    meta: 'May 2010 – May 2011 · Prague (Czech Republic) · On-site',
    bullets: [
      'Signed 3 co-marketing deals, ran verticalized B2B Direct Mail campaign (top 3 globally)',
      'Contributed country product request project with the team that crossed 51% CZ search market share',
    ],
  },
  {
    role: 'Sales Manager',
    company: 'Asseco Solutions',
    meta: 'Sep 2006 – Dec 2009 · Prague (Czech Republic) · On-site',
    bullets: [
      'Delivered 14 ERP/CRM successful implementations, negotiated pilot deals in DE and PL',
      'Started as Junior Consultant and quickly became the youngest IT Sales Manager in the country',
    ],
  },
] as const;

export const education = [
  {
    what: 'CEMS International Management (Master\'s programme, English)',
    when: 'Sep 2009 – May 2011 · Corvinus Budapest & University of Economics Prague',
    grade: '1.7',
    note: 'Elite Master\'s degree, curriculum completed, exchange semester with A grade in all subjects. +41 ECTS from Information Systems and Technologies studied in parallel, Average: 1.5',
  },
  {
    what: 'Applied Informatics (BSc)',
    when: 'Sep 2006 – Sep 2009 · University of Economics Prague',
    grade: '1.6',
    note: 'Top 10 student within 500 others in 2006/07. Excellent grades for Major State Exam and Bachelor thesis.',
  },
  {
    what: 'Electrical Engineering, ICT (GCE Examination, A Levels)',
    when: 'Sep 2002 – Jun 2006 · Secondary School of Jozef Murgaš, Slovakia',
    grade: '1.0',
    note: 'Average (final year): 1.0',
  },
] as const;

export const skillGroups = [
  { label: 'LLM & agents', text: 'Claude API, Anthropic SDK, Claude Code, Cursor, agentic AI, multi-agent systems, tool calling, custom mode & skills for Claude, MCP, prompt engineering, prompt caching, LLMOps, evaluation (recall@k, nDCG).' },
  { label: 'RAG & retrieval', text: 'RAG, hybrid search (BM25 + vector, RRF), cross-encoder reranking, embeddings (bge-m3, nomic), vector databases (Qdrant, pgvector, Chroma), knowledge graphs (Apache AGE), semantic chunking' },
  { label: 'Models & serving', text: 'llama.cpp, GGUF quantisation, Gemma, Hugging Face, OpenRouter, OpenAI-compatible APIs, Cloudflare Workers AI, Google AI Studio, local inference, multimodal (vision, stt/tts)' },
  { label: 'Languages', text: 'TypeScript, Python, Rust, SQL, PHP, JavaScript' },
  { label: 'Backend & data', text: 'Node.js, Express, PostgreSQL, TimescaleDB, REST APIs' },
  { label: 'Frontend & desktop', text: 'React, Next.js, Astro, Three.js, Tauri' },
  { label: 'Cloud & DevOps', text: 'Cloudflare (Workers, KV, AI Search, AI Gateway), Google Cloud APIs (Search Console, GA4, PageSpeed, CrUX, Cloud Storage, Knowledge Graph, OAuth service accounts), GitHub Actions, CI/CD, Nginx, PM2, Linux VPS' },
  { label: 'Ways of working', text: 'cross-functional collaboration, autonomy and accountability, technical documentation, handover to non-engineers, alterity, primacy of truth' },
  { label: 'Not used, by choice', text: 'LangChain, LlamaIndex, FAISS. Evaluated and replaced by direct SDK calls and hand-written retrieval.' },
] as const;

export const spokenLanguages =
  'Slovak (native) · English (advanced; full master\'s taught in English) · German (A1) · Russian (A2) · Czech (fluent) · Spanish (basics) · Hungarian (basics)';

export const skillsRepo = 'https://github.com/misomalcek/claude-skills/tree/main/md-converted-skills';
