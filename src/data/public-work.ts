/**
 * Everything public: repositories, videos, live sites.
 *
 * Each entry says what the thing is and why it is worth a click. Nothing here is
 * a placeholder — every link was checked, and anything that is a work in
 * progress says so rather than pretending otherwise.
 */

export interface Repo {
  name: string;
  url: string;
  what: string;
  why?: string;
  /** 'lineage' entries are published as evidence of how the practice formed. */
  tag?: 'lineage' | 'wip' | 'game';
}

export const repos: Repo[] = [
  {
    name: 'claude-skills',
    url: 'https://github.com/misomalcek/claude-skills',
    what: 'The working apparatus: 34 packaged skills plus the framework they came from, in both .skill and plain markdown.',
    why: 'The rules the research measures were not designed — they are survivors. This is where they came from, including the 60% that was later pruned as waste.',
    tag: 'lineage',
  },
  {
    name: 'atauri',
    url: 'https://github.com/misomalcek/atauri',
    what: 'A Tauri + Rust harness with a local/cloud model router, a vector layer, and persistent context.',
    why: 'Where the Codex Symbiosis principles were first compiled rather than written — barycentrum.rs, ghost.rs, context.rs. The direct ancestor of the current system.',
    tag: 'lineage',
  },
  {
    name: 'mini-harness',
    url: 'https://github.com/misomalcek/mini-harness',
    what: 'A minimal agent harness — the loop, the tools, and nothing else.',
    why: 'Built to find out how little a working agent loop actually needs.',
  },
  {
    name: 'aisearch',
    url: 'https://github.com/misomalcek/aisearch',
    what: 'Search experiments against the hive layers.',
  },
  {
    name: 'gkgg',
    url: 'https://github.com/misomalcek/gkgg',
    what: 'A small Python wrapper around the Google Knowledge Graph Search API, with tests.',
    why: 'Entity grounding as a standalone tool — one job, done properly, test-covered.',
  },
  {
    name: 'gemma4-studio',
    url: 'https://github.com/misomalcek/gemma4-studio',
    what: 'A minimal local studio for Gemma-4: one TypeScript server, one HTML page, no framework.',
  },
  {
    name: 'hive-voice-echo',
    url: 'https://github.com/misomalcek/hive-voice-echo',
    what: 'A proof-of-concept voice loop: record, transcribe, answer, speak.',
    why: 'The first end-to-end voice path here. It broke in the encoding and in language switching, not in the models — which is the useful part.',
  },
  {
    name: 'genim',
    url: 'https://github.com/misomalcek/genim',
    what: 'An image-generation front end.',
  },
  {
    name: 'todoapi',
    url: 'https://github.com/misomalcek/todoapi',
    what: 'A small API with a full test suite, 16 of 16 passing.',
  },
  {
    name: 'aurora',
    url: 'https://github.com/misomalcek/aurora',
    what: 'An interface experiment.',
  },
  {
    name: 'mini-grok',
    url: 'https://github.com/misomalcek/mini-grok',
    what: 'A compact model-interaction experiment.',
  },
  {
    name: 'gsc-api',
    url: 'https://github.com/misomalcek/gsc-api',
    what: 'Google Search Console API scripts, rebuilt from a clean copy.',
    why: 'The original tracked a client\'s exported data — including in its history. Rebuilt rather than patched, because removing a file does not remove it from git.',
  },
  {
    name: 'cybernetic-genesis',
    url: 'https://github.com/misomalcek/cybernetic-genesis',
    what: 'A single-page cybernetics piece. Plain HTML.',
  },
];

export const games: Repo[] = [
  {
    name: 'neon-shift',
    url: 'https://github.com/misomalcek/neon-shift',
    what: 'A playable prototype generated from a single sentence, using an entire free tier in one sitting.',
    why: 'A test of how far one prompt goes with an agent that writes and deploys. It went further than expected: the game works.',
    tag: 'game',
  },
  {
    name: 'story-game',
    url: 'https://github.com/misomalcek/story-game',
    what: 'A narrative game experiment.',
    tag: 'game',
  },
];

export interface Video { title: string; url: string; what: string; }

export const videos: Video[] = [
  {
    title: 'The knowledge graph, unlabelled',
    url: 'https://www.youtube.com/watch?v=60TJzSMovmc',
    what: 'The graph rendered transparent with the labels off — structure alone, which is what the spatial research is actually about.',
  },
  {
    title: 'A local model on a long agentic run',
    url: 'https://www.youtube.com/watch?v=AwkPExWakho',
    what: 'The 12B local model working: tool calls, retrieval, code, over a full run. No cloud inference.',
  },
  {
    title: 'Team Brain in use',
    url: 'https://www.youtube.com/watch?v=wiLrKYCEGp8',
    what: 'The delivered system — the one an SEO team used daily and that was handed over.',
  },
  {
    title: 'MPCMCP — emergent agents, part 1',
    url: 'https://www.youtube.com/watch?v=1Rzro-dXMqk',
    what: 'Emergent multi-agent behaviour inside the current system. Not open source yet, so this is the record of it.',
  },
  {
    title: 'MPCMCP — emergent agents, part 2',
    url: 'https://www.youtube.com/watch?v=gi6WXwvcjPo',
    what: 'The same experiment, continued.',
  },
];

export interface Site { name: string; url: string; what: string; note?: string; }

export const sites: Site[] = [
  {
    name: 'aisvet.sk',
    url: 'https://aisvet.sk',
    what: 'The live site, currently being rebuilt.',
    note: 'Source: gitlab.com/owlstar/aisvet',
  },
  {
    name: 'aisvet 2',
    url: 'https://aisvet2-f57d07.gitlab.io/',
    what: 'The rebuild in progress — Astro, generated article imagery, new structure.',
    note: 'Work in progress',
  },
  {
    name: 'aiworld',
    url: 'https://aiworld.aisvet.sk/',
    what: 'An AI world-building experiment.',
    note: 'Work in progress',
  },
  {
    name: 'cybermagazine',
    url: 'https://gitlab.com/owlstar/cybermagazine/',
    what: 'A magazine-format publishing experiment.',
  },
];
