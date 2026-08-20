/**
 * Public output — one place, not three.
 *
 * Every description here was read from the repository itself: its README, its
 * package.json description, or its source. Several earlier entries were written
 * from the directory name and were simply wrong — `mini-grok` is a native macOS
 * AppKit window, not a "model-interaction experiment"; `aisearch` is a retrieval
 * post-mortem, not "search experiments". Some of the repositories' own READMEs
 * were generated the same lazy way, so where a README disagreed with the code,
 * the code decided.
 */

export interface Repo {
  name: string;
  url: string;
  what: string;
  why?: string;
  tag?: 'lineage' | 'wip';
}

/** Published as evidence of where the working practice came from. */
export const lineageRepos: Repo[] = [
  {
    name: 'claude-skills',
    url: 'https://github.com/misomalcek/claude-skills',
    what: '34 packaged skills plus the framework they came from, in both .skill and plain markdown.',
    why: 'The rules measured in the research were not designed — they are survivors. This is where they came from, including the roughly 60% later pruned as waste. `custom-mode` enforced verification before a "done" claim a year before that became a measured rule.',
    tag: 'lineage',
  },
  {
    name: 'atauri',
    url: 'https://github.com/misomalcek/atauri',
    what: 'A Tauri + Rust harness: a local/cloud model router, a vector layer, persistent context.',
    why: 'Where the same principles were first compiled rather than written — barycentrum.rs, ghost.rs, context.rs, snowglobe.rs. The direct ancestor of the current system.',
    tag: 'lineage',
  },
];

/** Everything else, described from the source. */
export const repos: Repo[] = [
  {
    name: 'aisearch',
    url: 'https://github.com/misomalcek/aisearch',
    what: 'A retrieval post-mortem: why a Cloudflare AI Search index returned nothing for a site whose pages were full of text, and what fixed it.',
    why: 'The same failure shape as three days spent blaming a ranking function — the answer was not in the index. Ships the worker, the server and the diagnosis.',
  },
  {
    name: 'mini-grok',
    url: 'https://github.com/misomalcek/mini-grok',
    what: 'A native macOS chat window in Python against AppKit directly — no Electron, no web view, no framework. 352 lines.',
  },
  {
    name: 'aurora',
    url: 'https://github.com/misomalcek/aurora',
    what: 'A multi-provider AI chat in one HTML file, 1,826 lines: streaming, live markdown, a collapsible reasoning panel, token stats, conversation memory, optional RAG grounding.',
    why: 'One file, several providers, no build step — an argument that a usable chat client does not need a framework.',
  },
  {
    name: 'gkgg',
    url: 'https://github.com/misomalcek/gkgg',
    what: 'A Python wrapper around the Google Knowledge Graph Search API — 555 lines including its tests and a written build spec.',
    why: 'Entity grounding as one small tool that does one job and is tested.',
  },
  {
    name: 'genim',
    url: 'https://github.com/misomalcek/genim',
    what: 'A cyberpunk image generator for the hive — Express server against the Gemini image API, with the API notes it was built from.',
  },
  {
    name: 'hive-voice-echo',
    url: 'https://github.com/misomalcek/hive-voice-echo',
    what: 'A voice loop in Streamlit: record, transcribe with Google STT, answer, speak back with TTS.',
    why: 'The first end-to-end voice path here. It broke in the audio encoding and in language switching, not in the models — which is the part worth keeping.',
  },
  {
    name: 'gemma4-studio',
    url: 'https://github.com/misomalcek/gemma4-studio',
    what: 'A minimal local studio for Gemma-4: one TypeScript server, one HTML page, no framework.',
  },
  {
    name: 'mini-harness',
    url: 'https://github.com/misomalcek/mini-harness',
    what: 'Agent definitions plus a written comparison of open-source multi-agent frameworks, done as research before committing to one.',
    why: 'The decision it produced was to build no framework at all — visible in the current system, which has none.',
  },
  {
    name: 'todoapi',
    url: 'https://github.com/misomalcek/todoapi',
    what: 'A REST API over a real SQLite database in 401 lines. Express, node:test, no ORM, 16 of 16 tests passing.',
  },
  {
    name: 'gsc-api',
    url: 'https://github.com/misomalcek/gsc-api',
    what: 'Google Search Console API scripts, rebuilt from a clean copy.',
    why: 'The original tracked a client\'s exported data — including in its history. Rebuilt rather than patched, because deleting a file does not remove it from git.',
  },
];

/**
 * Games. Not a side note: all three are prototypes of the same idea — a scoring
 * rule that teaches a value system rather than a skill, aimed at learning
 * (children included) rather than at completion. None of them can be finished.
 */
export interface Game {
  name: string;
  url?: string;
  play?: string;
  videos?: { title: string; url: string }[];
  what: string;
  why: string;
}

export const games: Game[] = [
  {
    name: 'MPC arcade',
    what: 'A hidden mode inside the Factorium knowledge verse. While flying the 3D graph, typing `mpcmcp` wakes a shooter whose targets are drawn in the same shape-language as the graph nodes.',
    why: `The scoring is inverted on purpose. The targets are **daemons** — the opposites of the
      system's real values and its bad habits: sycophancy, skipping verification, treating the
      model as a calculator, giving up, entropy. Hitting one adds score, and it lands as
      genuinely having got rid of a bad habit. The things to avoid are **angels**: the real
      values, pulled live from the hive's own lexicon — hit "Primacy of Truth" or "stop-and-ask"
      and it subtracts. The supreme axiom is never spawned at all. Part of Factorium, so not
      open source yet; the videos are the record.`,
    videos: [
      { title: 'MPC arcade — part 1', url: 'https://www.youtube.com/watch?v=1Rzro-dXMqk' },
      { title: 'MPC arcade — part 2', url: 'https://www.youtube.com/watch?v=gi6WXwvcjPo' },
    ],
  },
  {
    name: 'cybernetic-genesis',
    url: 'https://github.com/misomalcek/cybernetic-genesis',
    play: 'https://misomalcek.github.io/cybernetic-genesis/',
    what: 'Two canvas games about entropy and self-organisation. Plain HTML and vanilla JavaScript, no build step and no dependencies.',
    why: 'The earliest version of the idea. In Entropy Harvest the combo grows while you keep clearing — the mechanic rewards sustained order rather than one good move, which is the lesson rather than the score.',
  },
  {
    name: 'neon-shift',
    url: 'https://github.com/misomalcek/neon-shift',
    what: 'A playable prototype generated from a single sentence, using an entire free tier in one sitting.',
    why: 'A test of how far one prompt goes with an agent that writes and deploys. It went further than expected — the game works.',
  },
];

/** Sites, channels, and everything else that is public and not a repository. */
export interface Output {
  name: string;
  url: string;
  what: string;
  note?: string;
  kind: 'site' | 'video' | 'audio';
}

export const outputs: Output[] = [
  {
    kind: 'site', name: 'aisvet.sk', url: 'https://aisvet.sk',
    what: 'Practical AI writing in Slovak — hands-on guides from work actually done, in a language where the alternative is translated marketing copy.',
    note: 'Source: gitlab.com/owlstar/aisvet',
  },
  {
    kind: 'video', name: 'AI Svet — YouTube', url: 'https://www.youtube.com/@aisvet-sk',
    what: '10 videos, same material in video form.',
  },
  {
    kind: 'audio', name: 'AI Svet — podcast', url: 'https://hearthis.at/aisvet/',
    what: 'The Third Space series and AI engineering episodes — building a team brain, autonomous agents, why company AI projects fail.',
  },
  {
    kind: 'site', name: 'aisvet 2', url: 'https://aisvet2-f57d07.gitlab.io/',
    what: 'The rebuild in progress: Astro, generated article imagery, new structure.',
    note: 'Work in progress',
  },
  {
    kind: 'site', name: 'aiworld', url: 'https://aiworld.aisvet.sk/',
    what: 'An AI world-building experiment — generated worlds, rendered and navigable.',
    note: 'Work in progress',
  },
  {
    kind: 'site', name: 'cybermagazine', url: 'https://gitlab.com/owlstar/cybermagazine/',
    what: 'A magazine-format publishing experiment.',
  },
  {
    kind: 'video', name: 'The knowledge graph, unlabelled',
    url: 'https://www.youtube.com/watch?v=60TJzSMovmc',
    what: 'The graph rendered transparent with the labels off — structure alone, which is what the spatial research is about.',
  },
  {
    kind: 'video', name: 'A local model on a long agentic run',
    url: 'https://www.youtube.com/watch?v=AwkPExWakho',
    what: 'The 12B local model working over a full run: tool calls, retrieval, code. No cloud inference.',
  },
  {
    kind: 'video', name: 'Team Brain in use',
    url: 'https://www.youtube.com/watch?v=wiLrKYCEGp8',
    what: 'The delivered system — the one an SEO team used daily and that was handed over.',
  },
  {
    kind: 'audio', name: 'neonfire on SUNO',
    url: 'https://suno.com/@miso_m',
    what: 'Cyberpunk neuro-DnB experiments, including this site\'s theme song.',
  },
];

/**
 * The academic side, and why it was thin for twenty years.
 *
 * His own framing, which is the honest one: the work after university was
 * commercial and mostly under agreement, and none of it felt research-community
 * worthy. That changed with the AI work — not because the standard dropped, but
 * because there is finally something measured to publish.
 */
export const academic = {
  note: `Most of my working life produced commercial projects under agreement — useful,
    measured, and not mine to publish. I never felt I had something a research community
    needed. That is different now: the AI work produces measurements, negative results
    included, and those belong in the open.`,
  stance: `In every team I have argued for full sharing within approved eyes. I do not need to
    hoard what I know — I build on public knowledge myself, and anything properly researched
    and reviewed should end up back there.`,
  /**
   * NotebookLM: eleven research notebooks exist and are substantive — the
   * supervised-autonomy trap, alterity and hermeneutics, first-order logic
   * distillation, the third space, neuro-symbolic reasoning trees. They are NOT
   * linked here because checking them from a signed-out browser returns a Google
   * login page (verified 2026-08-20). A reference a reader cannot open is not a
   * reference, which is the reason the credential documents were moved into this
   * repository in the first place. Add them if and when they are shared publicly.
   */
  notebooks: {
    count: 11,
    pending: true,
    titles: [
      'The Supervised Autonomy Trap: The Human Costs of Enterprise AI',
      'Between Uneven Hermeneutics and Alterity',
      'Abstractions of Interactive Computation and the Ghostly Machine',
      'Reasoning in Logic: Distilling Natural Language into First-Order Logic',
      'The Third Space: Human-AI and Platonic Reality',
      'Neuro-Symbolic Logic Trees for Deterministic AI Reasoning',
    ],
  },
  profile: {
    name: 'Academia.edu',
    url: 'https://ekonomka.academia.edu/MichalMalcek',
    where: 'University of Economics, Prague · Department of Information Technologies',
    stats: [
      ['13,277', 'public views'],
      ['577', 'followers'],
      ['14', 'papers'],
    ],
    what: `Coursework, uploaded once around 2011 and never maintained since — and still
      accumulating readers, most of them from the United States, India, the United Kingdom,
      Malaysia and Germany. Verified live on 2026-08-20.`,
  },
};

