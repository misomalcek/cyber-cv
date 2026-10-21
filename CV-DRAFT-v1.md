---
name: "DRAFT CV v1 — lean rewrite, every figure evidence-backed"
type: draft
date: 2026-10-21
author: prime
seat: prime
spirit: 2
importance: 0.9
anchor: false
project: cv-system
tags: [cv, draft, aha-plan-0, ats, cake, portfolio]
---

> **DRAFT v2 for Michal's review.** 1838 words vs 2115 live (−13%), carrying
> more evidence and fewer adjectives. Written against aha-plan §0, the Cake
> findings, the ATS notes and Michal's own LinkedIn (titles are LinkedIn's,
> because ATS matches on title strings).
>
> NOT YET LIVE, counted as-if-done on Michal's instruction: SEO Brain release ·
> aisvet 2.0 + its Cloudflare AI Search chat · alteranai.com v1 and the English
> portfolio landing pages.
>
> TWO CLAIMS I CUT as unsupported — raise them only with evidence:
>   "outperforming frontier models" -> replaced with rules retrieval 10/10,
>      which the ledger actually supports
>   SEO Brain's "~45 tools / 6 agents" -> that is Team Brain's surface; SEO
>      Brain inherits it but has not shipped, so it is not a product claim yet

# Michal Malček
**AI Engineer** · Systems Design · Advanced SEO
Poprad, Slovakia · [github](https://github.com/misomalcek?tab=repositories) · [linkedin](https://linkedin.com/in/misomalcek/) · miso.malcek@gmail.com · +421 950 200 395

---

## Summary

AI engineer building full-stack agentic systems end to end — Claude Code, Cursor, RAG, local and cloud AI. Delivered a Claude-based knowledge hub to a 15-person non-engineering team and handed it over clean: **1,352 tool calls at 93.9% success, ~$30/month**. Then built a sovereign local-model system running Gemma-4 12B with its own retrieval, graph and rules layers on a single machine. **I measure before I claim** — every figure here has a published method behind it. 20 years on both sides of software delivery (ERP, CRM, B2B, B2C, web, cloud), 8 of them leading SEO internationally across CEE, Gibraltar, Malta and Hamburg.

**What I bring:** cost-efficient architectures that survive handover · zero-dependency local AI where data must stay put · cloud AI where scale earns it · retrieval that returns the right thing, measured.

---

## Core strengths

- **Production LLM systems end to end** — Anthropic SDK, agent loops, tool calling, prompt architecture, handover to non-engineers
- **RAG that is tested, not assumed** — pgvector, Qdrant, Apache AGE, hybrid retrieval with reciprocal rank fusion, graph expansion
- **Sovereign / local AI** — custom llama.cpp build, GGUF quantisation, KV-cache tuning, a 12B model doing agentic work on one machine
- **Cost engineering** — $30/month for a 15-person deployment; free-tier Cloudflare AI Search serving production sites
- **Cloud AI APIs** — Anthropic, Google (Analytics, Search Console, GA4, Knowledge Graph, AI Studio, CrUX), Ahrefs, OpenRouter, Cloudflare Workers AI
- **Desktop + VPS delivery** — the same codebase as a one-click Mac/Windows app and a single-VPS deploy
- **Measurement as practice** — 8 research papers, every claim with its method; I research to build, or build to research

---

## Selected work

**Crystal RAG** — [download](https://misomalcek.github.io/crystal-rag/) · [repo](https://github.com/misomalcek/crystal-rag)
Point it at a folder, get a local searchable knowledge crystal. **Qdrant and the embedding model ship inside the app** — no services to install, no data leaving the machine. Tauri + Rust, Mac and Windows. Hybrid retrieval fuses vector, lexical and graph lists (RRF, k=60), so a file the vector search missed still surfaces through its relations.

**Team Brain** — AI knowledge hub, msg life Slovakia (delivered, handed over)
Claude API for a 15-person SEO and content team. **1,352 tool calls at 93.9% success** over a five-week logging window inside a four-month deployment. ~**$30/month** API spend. Seven-layer prompt system, agents, personas, semantic layer. Four live data sources: GA4, Search Console, Ahrefs, CrUX. Near-zero hallucinations, full documentation, clean handover.

**SEO Brain** — [repo](https://github.com/misomalcek/seo-brain)
Team Brain rebuilt as a product, deployable three ways from one codebase — single Linux VPS, one-click macOS app, one-click Windows app. Express + Next.js + Anthropic SDK, 41 Postgres migrations, specialist SEO agents over the Ahrefs/GSC/GA4/CrUX tool surface, optional user-supplied endpoint. *Release in progress.*

**Factorium** — sovereign AI system (private, demo on request)
Gemma-4 12B Q5 on one Mac doing real agentic work: 69 native tools, unified retrieval over Postgres/pgvector/Qdrant/Apache AGE/TimescaleDB, a knowledge graph, situational rules-and-axioms retrieval, watchers and sensors.

- **Rules retrieval 10/10** when behavioural rules are stored as situations rather than statements — the measurement that made the rest work ([paper](https://misomalcek.github.io/cyber-cv/downloads/malcek-full-pack.zip))
- **34× latency regression found and fixed** — traced to one disabled prompt-cache flag; 24.2 s → 1.0 s per task
- **Memory index repaired end to end**: 77% of the corpus was being silently truncated before reaching the vector store; 1,050 → 15,232 indexed chunks with recall held at 8/10 rank-1 through 14.5× growth

**The Wisdomkeeper** — [download](https://github.com/misomalcek/the-wisdomkeeper/releases) · AI-powered game, Mac + Windows
Local inference in **Rust** (`llama-cpp-2`, Metal), model downloaded on consent with pinned checksums. Runs on an 8 GB laptop with integrated graphics.

---

## Experience

### Owner · AI Engineer · SEO · Web
**My Marketing, s.r.o.** · Jan 2012 – present · Slovakia

- Build and ship the systems above; publish the research behind them
- **8 research papers** on applied AI: rules retrieval and alignment, what actually limits a local model, RAG efficiency — [full pack](https://misomalcek.github.io/cyber-cv/downloads/malcek-full-pack.zip)
- **aisvet.sk** — AI magazine, own CMS, with a **Cloudflare AI Search chat on the free tier**, load-verified for production traffic
- Custom **CDP browser automation** for Gemini and Google AI Mode where no API exists
- 3D sales configurator with order CRM for custom car seats — [live since 2024](https://individualautodesign.eu/configurator/)
- Prior: SEO rebrand of an online lottery outlet, lottery data bot, programmatic SEO, Google Partner agency (€10k/month ad spend)

### Senior SEO Specialist → AI Engineer
**msg life Slovakia** · Sep 2024 – Jun 2026 · Remote

- **Traffic doubled in a year** on WordPress with slow release cycles — the constraint was the pipeline, not the content
- First large topic clusters and content pillars across technical (Java, Python, QA, SDLC) and HR domains
- Moved into AI Sep 2025, formalised as **AI Engineer** by Feb 2026; delivered and handed over Team Brain Jun 2026
- Moved the whole team from ChatGPT to Claude
- Numerous SEO and **4 AI workshops** for the entire Slovak branch, voluntary attendance, leadership to newest hires — the first opened with AI ethics and the practical limits of formal logic, before Team Brain existed as anything but an idea

### Digital Media Manager
**Swiss Re** · Nov 2024 – Feb 2025 · Bratislava · Hybrid

- Sigma annual report readership **1,500 → 4,500** on comparable topics — a DR 90+ domain nobody was using
- Cleared Jira tickets untouched for two years: CMS, DAM and Search Console settings fixed in a few clicks and one call
- 3 Ahrefs workshops; every team member reported new skills at quarterly review
- Two full-time roles held in parallel for three months, hybrid and remote, kept apart. **After probation I chose to continue only with the more suitable remote role** — two full-time jobs were not sustainable long term
- Completed all 10 mandatory trainings including AI Security & Compliance and AI Copyright; sat the company-wide Palantir rollout sessions
- First hands-on LLM work: ChatGPT Pro, loading articles into memory and feeding Ahrefs data in by hand — the problem Team Brain later solved properly

### Search Engine Optimization Manager · DACH
**LottoStarlet Ltd. → Tippland GmbH** · Sep 2017 – Mar 2023 · Malta → Hamburg

- SEO strategy for a lottery startup across DE, AT, CH, UK: content, keywords, domains, link-building, Angular prerendering, agencies and freelancers
- Built embeddable, trackable affiliate ad units usable inside any article
- [Tippland Magazin](https://www.tippland.de/magazin/) — built it, content included; **still ranking 9 years later with zero maintenance**
- Malta → Hamburg (2018) → remote from Slovakia (2019) → DE-only rebrand to Tippland.de (2022)

### Search Engine Optimization Team Lead · CEE
**Lottoland Ltd.** · Jul 2016 – Aug 2017 · Gibraltar

- Managed 4 internal and 5 external colleagues across SK, CZ, PL; €15k/month link-building budget
- Created "Keyword Heroes", the internal Ahrefs training series; completed the 6-week StepUp management programme

### Online Marketing Manager
**Individual Auto Design GmbH** · May 2015 – Jun 2016

- Full-stack online marketing and in-house web development in 5 languages (DE, SK, CZ, HU, EN); WordPress + Magento, internal analysis for SAP Business One
- Launched every online channel from near-zero, migrated a content-heavy legacy site, then **grew visits and orders every month**

### Google — two internship programmes
**Online Media Associate Programme**, EU HQ Dublin · 2011 · **Associate Product Marketing Manager**, Prague · 2010–2011

- Turned manual categorisation into an auto-improving customer database with Excel scripting — presented to a Mountain View product manager, who **put a team on it**; delivered in weeks instead of two months
- 2× Peer Bonus for AdWords help guides; Google Student Ambassador; 3 co-marketing deals, verticalised Direct Mail (top 3 globally); on the team when Google passed 51% market share against Seznam

### Sales Manager (from Junior Consultant)
**Asseco Solutions** · Sep 2006 – Dec 2009 · Prague

- ERP/CRM (Helios Orange) for SMBs: **14 successful implementations**, negotiated pilot deals in DE and PL
- Started as Junior Consultant and became the **youngest ERP/CRM sales manager in the company**

---

## Stack

**AI / ML** Anthropic SDK · Claude API · Agent SDK · llama.cpp (custom build) · GGUF quantisation · Gemma-4 · bge-m3 embeddings · HuggingFace · Cloudflare Workers AI · OpenRouter · Google AI Studio
**Retrieval** pgvector · Qdrant · Apache AGE · RRF hybrid search · knowledge graphs · semantic chunking
**Languages** TypeScript · Python · Rust · SQL · PHP
**Web** React · Astro · Next.js · Express · Three.js · Tauri
**Data** PostgreSQL · TimescaleDB · GA4 API · Search Console API · Google Knowledge Graph API · Ahrefs API · CrUX
**Infra** Nginx · PM2 · VPS (full setup) · Cloudflare · GitHub Actions · launchd · Docker-free by design
**Tooling** Claude Code · Cursor · Copilot · Git (textbook commit discipline)

---

## How I work

Measure before claiming. Full transparency is the best security. Textbook commits and documentation. Local-first: anything that can run on my machine does, so data does not travel when it does not have to. No plugins, no MCP, no skills files — everything explicit, auditable, and running under one local endpoint.

---

## Education

**CEMS International Management** (Master's, English) · 2009–2011 · avg 1.7 · exchange semester at Corvinus Budapest (A in all subjects) · best business project team (GE Money Bank) · full curriculum completed, not graduated · +41 ECTS in Information Systems & Technologies, avg 1.5
**Applied Informatics** (Bachelor's) · University of Economics Prague · 2006–2009 · avg 1.6 · top 10 of 500 in first year
**Electrical Engineering, ICT** · High School of J. Murgaš, Banská Bystrica · 2002–2006 · **#1 in final year, avg 1.0**
**Startup Scholarship**, Lisbon · 2013 · NOVA University + Startup Lisboa

## Languages

Slovak native · **English advanced** (full master's taught in it, daily working use) · Russian A2 (3rd worldwide, St Petersburg University olympiad) · German A1 (Goethe-Institut Hamburg) · Spanish basics · Hungarian basics

## Also

[8 research papers](https://misomalcek.github.io/cyber-cv/downloads/malcek-full-pack.zip) · [9 NotebookLM research notebooks](https://misomalcek.github.io/cyber-cv/work/#notebooks) · [aisvet.sk](https://aisvet.sk/) AI magazine + [YouTube](https://www.youtube.com/@aisvet-sk) + [podcasts](https://hearthis.at/aisvet/) · open-source experiments: [claude-skills](https://github.com/misomalcek/claude-skills), [codex-symbiosis](https://github.com/misomalcek/codex-symbiosis), [atauri](https://github.com/misomalcek/atauri), [ai-alignment](https://misomalcek.github.io/ai-alignment/) · browser games built one-shot with AI · [all credentials and certificates](https://misomalcek.github.io/cyber-cv/credentials/)

---

### *Non ducor, duco pariter*

I am not led; we lead together. Sovereignty first, then moving together — without the first, the second is obedience with a nicer name.
