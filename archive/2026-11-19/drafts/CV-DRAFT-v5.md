# Michal Malček
**AI Engineer — LLM Systems · RAG · Agentic AI**
Poprad, Slovakia · Remote · miso.malcek@gmail.com · +421 950 200 395
LinkedIn: https://www.linkedin.com/in/misomalcek/ · GitHub: https://github.com/misomalcek · Portfolio & credentials: https://misomalcek.github.io/cyber-cv/

## Summary

- AI engineer who builds agentic LLM systems end to end: architecture, retrieval, tool calling, evaluation, deployment, handover.
- Ships on both sides: Claude API in production for a non-engineering team, and local open-weight models (llama.cpp, GGUF) where data must stay on the machine.
- Measures before claiming: every figure below has a reproducible path behind it.
- 20 years in software delivery and digital growth (ERP/CRM, web, SEO), 8 of them leading international SEO teams.

## Key AI results

- **Production LLM hub for 15 non-engineers** (Claude API): 1,352 tool calls at 93.9% success during a five-week logging window, inside a four-month deployment; ~$30/month API spend on one 8 GB VPS; handed over clean.
- **Rule retrieval from 1 in 5 to 10 of 10** by storing rules as the situations that trigger them; the same technique reaches only 7 of 10 for tool selection, and I report both.
- **Local agentic system on one Mac:** Gemma-4 12B ran 120 turns and 120 tool calls unattended in 67 minutes; 0 reasoning failures across 477 logged tool calls.
- **34× latency fix:** traced a 24.2 s per-task delay to one disabled prompt-cache flag; now 1.0 s.
- **Memory index repair:** 77% of the corpus was being silently truncated before embedding; grew the index from 1,050 to 15,232 chunks with rank-1 recall held at 8 of 10.
- **Retrieval evaluation:** labelled 52-query set with recall@k and nDCG, and a cross-encoder reranker; recall@5 of 0.79.
- **Dependency discipline:** 65,782 lines of TypeScript on 29 runtime dependencies; 12 modules written by hand in 2,004 lines instead of imported.

## Portfolio

- **Crystal RAG**: desktop RAG app (Tauri, Rust). Qdrant and the embedding model ship inside it, and data never leaves the machine. Hybrid vector, lexical and graph retrieval fused with RRF. https://github.com/misomalcek/crystal-rag
- **The Wisdomkeeper**: AI game with a custom Rust inference runtime (2,841 lines) over llama.cpp bindings. Log-probability judge, grammar-constrained output, two x86 builds. Runs on an 8 GB Windows laptop. https://github.com/misomalcek/the-wisdomkeeper
- **SEO Brain**: multi-agent SEO platform (Express, Next.js, Anthropic SDK, PostgreSQL). One codebase deploys to a VPS or as a macOS or Windows app. Claude, OpenRouter or a local model, plus five Google APIs. https://github.com/misomalcek/seo-brain
- **Factorium**: a sovereign local-AI system with 69 native tools and hybrid retrieval over PostgreSQL, pgvector, Qdrant and Apache AGE. Private; demo on request.
- **alteranai.com**: AI engineering magazine, 57 articles with inline citations to primary sources. https://alteranai.com · **aisvet.sk**: AI magazine with a Cloudflare AI Search chat. https://aisvet.sk

## Experience

**Owner · AI Engineer · SEO** — My Marketing, s.r.o. · Jan 2012 – present · Remote
- Design, build and ship the systems above end to end, with full autonomy and accountability.
- Cloudflare edge for two production domains: Workers deployed via the API, Workers KV, Workers AI, AI Search, DNS, SPF and DMARC.
- CDP browser automation for AI tools that have no API; hook systems and a custom operating mode for Claude Code and Cursor.
- 3D sales configurator with an order CRM, live since 2024.

**Senior SEO Specialist → AI Engineer** — msg life Slovakia · Sep 2024 – Jun 2026 · Remote
- Built and handed over Team Brain, the Claude-based knowledge hub behind the first key result.
- Role formalised as AI Engineer in Feb 2026; moved the whole team from ChatGPT to Claude.
- Ran 4 AI workshops for the entire Slovak branch, from leadership to the newest hires. Voluntary attendance, run across departments.
- Doubled site traffic in a year despite slow release cycles.

**Digital Media Manager** — Swiss Re · Nov 2024 – Feb 2025 · Bratislava · Hybrid
- Grew Sigma report readership from 1,500 to 4,500 on a DR 90+ domain.
- Cleared CMS, DAM and Search Console issues that had been open for two years.
- Held this role in parallel with msg life for three months. After probation I continued with the remote role only.

**SEO Manager DACH** — LottoStarlet Ltd. → Tippland GmbH · Sep 2017 – Mar 2023 · Malta, Hamburg, Remote
- Led SEO strategy across DE, AT, CH and the UK.
- Built Tippland Magazin, which still ranks 9 years later with no maintenance.

**SEO Team Lead CEE** — Lottoland Ltd. · Jul 2016 – Aug 2017 · Gibraltar
- Led 9 people across SK, CZ and PL, with a €15k/month link-building budget.

**Online Marketing Manager** — Individual Auto Design GmbH · May 2015 – Jun 2016
- Launched every online channel in 5 languages and grew visits and orders every month.

**Google** — Associate Product Marketing Manager internship, Prague (2010–11) · Online Media Associate programme, Dublin (2011)
- Automated customer categorisation with scripting; a Mountain View product team adopted it. Received 2 Peer Bonuses.

**Sales Manager (from Junior Consultant)** — Asseco Solutions · Sep 2006 – Dec 2009 · Prague
- Delivered 14 ERP/CRM implementations and became the youngest sales manager in the company.

## Skills

**LLM & agents:** Claude API, Anthropic SDK, Claude Code, Cursor, agentic AI, multi-agent systems, tool calling, MCP, prompt engineering, prompt caching, LLMOps, evaluation (recall@k, nDCG)
**RAG & retrieval:** RAG, hybrid search (BM25 + vector, RRF), cross-encoder reranking, embeddings (bge-m3), vector databases (Qdrant, pgvector), knowledge graphs (Apache AGE), semantic chunking
**Models & serving:** llama.cpp, GGUF quantisation, Gemma, Hugging Face, OpenRouter, OpenAI-compatible APIs, Cloudflare Workers AI, Google AI Studio, local inference, multimodal (vision)
**Languages:** TypeScript, Python, Rust, SQL, PHP
**Backend & data:** Node.js, Express, PostgreSQL, TimescaleDB, REST APIs
**Frontend & desktop:** React, Next.js, Astro, Three.js, Tauri
**Cloud & DevOps:** Cloudflare (Workers, KV, AI Search, AI Gateway), Google Cloud APIs (Search Console, GA4, PageSpeed, CrUX, Cloud Storage, OAuth service accounts), GitHub Actions, CI/CD, Nginx, PM2, Linux VPS
**Ways of working:** cross-functional collaboration, autonomy and accountability, technical documentation, handover to non-engineers
**Not used, by choice:** LangChain, LlamaIndex, FAISS. These were evaluated and replaced by direct SDK calls and hand-written retrieval.

## Education

**CEMS International Management** (Master's programme, English) · 2009–2011 · curriculum completed, not graduated
**Applied Informatics** (BSc) · University of Economics, Prague · 2006–2009
**Electrical Engineering, ICT** · Secondary School of J. Murgaš, Banská Bystrica · 2002–2006 · top of the final year

## Languages

Slovak (native) · English (advanced; full master's taught in English) · Russian (A2) · German (A1)

## Links

Credentials, certificates, references: https://misomalcek.github.io/cyber-cv/credentials/
Portfolio details and downloads: https://misomalcek.github.io/cyber-cv/portfolio/
