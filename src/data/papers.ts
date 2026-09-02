/**
 * Titles and blurbs for the research papers — ONE list, imported by both
 * /research (the index) and /research/[slug] (the page).
 *
 * It was two lists. They drifted exactly the way two lists do: the index had
 * entries for essay and una-synthesis, the slug page did not, so those two pages
 * carried their raw hive record id as the browser title —
 * "ESSAY-everything-i-know-about-ai-i-learned-from-ai-2026-08" — which is what a
 * search engine and a bookmark saw. Found 2026-09-01 while adding a sixth paper
 * and reproducing the same defect immediately.
 *
 * These live here rather than in the markdown because the markdown is a verbatim
 * copy of the stored record and must not grow web-only fields.
 */
export interface PaperMeta {
  title: string;
  blurb: string;
  /** Shown on the index only. The page itself opens with the paper's own abstract. */
  findings?: string[];
}

export const PAPERS: Record<string, PaperMeta> = {
  'local-limits': {
    title: 'What actually limits a local model',
    blurb: 'Configuration advice for local models circulates as folklore. 57 runs against one 12B model, with the negative results reported in full.',
    findings: [
      'No configuration change — context, cache, batch size — produced a measurable difference in latency or quality.',
      'The constraint that binds is generation at 8.3 tok/s, constant regardless of context and untouched by every recommended knob.',
      'Five of our own hypotheses were falsified. None was caught by reasoning; every one by a second measurement disagreeing with a first.',
    ],
  },
  rules: {
    title: 'Measuring whether behavioural rules change model decisions',
    blurb: 'Rules for LLM agents are usually written, stored and assumed to work. This measures whether they do.',
    findings: [
      'Retrieval by rule wording: 1 in 5. Stored as the situations they govern: 10/10.',
      '6 of 16 rules changed a decision · 10 changed nothing · none made a decision worse.',
      'Asked which of its rules carried real information, the model misclassified 7 of 8.',
      'Three weeks live: 8 rules never retrieved once — and all 8 return at rank 1 when asked. Unused, not unreachable. One rule was false and our own work was the counterexample.',
    ],
  },
  'provenance-selection': {
    title: 'Provenance has to choose, not only judge',
    blurb: 'A retrieval layer can label every source correctly and still get the citation wrong. What the label is for turns out to be two different questions.',
    findings: [
      'Given an encyclopedia entry (unverified, top-ranked) and the paper it summarises (primary, third), the model cited the encyclopedia and correctly called it uncitable.',
      'Every statement it made was true. The gap is between provenance as a verdict on hit #1 and provenance as a way to choose among hits.',
      'The mechanism, isolated: it cites the hit whose wording it reused. Swap the phrasing and the citation follows; swap the order and it does not.',
      'The intuitive fix — give it the bibliography — measured 0 of 3. One sentence changing the task measured 3 of 3.',
    ],
  },
  spatial: {
    title: 'Where a node sits should mean something',
    blurb: 'A graph that imploded, and what fixing it revealed about making geometry machine-readable.',
    findings: [
      'Hub implosion traced to degree-blind repulsion; the standard fix restored a flyable orbital structure.',
      'Position is only actionable to a language model as discrete tokens — stored tier and cluster, not raw coordinates.',
      '1,512 of 3,039 entities silently lost their tier after one session: a derived global property is a cache.',
    ],
  },
  provenance: {
    title: 'Provenance over ranking',
    blurb: 'A retrieval layer that says out loud when nothing it returned is citable — because ranking cannot tell a paper from a summary of one.',
    findings: [
      'Asked for the cost of erasing one bit, similarity ranks Wikipedia and two model-written digests ABOVE Bérut 2015. The citable answer scores lower.',
      'Four classifier rules that were wrong, and what each taught — including a marker that mis-tiered two peer-reviewed papers on one occurrence each.',
      'Provenance and relevance fail independently, and the silent case is worse: a high tier is exactly what makes a reader stop checking.',
    ],
  },
  engineering: {
    title: 'AI engineering — systems, decisions, and what they cost',
    blurb: 'A technical account of two systems, the stack decisions behind them, and the corrections.',
    findings: [
      'One database instead of three · 17,109 vectors migrated · a 12B model chosen over a stronger 26B.',
      'No agent framework, because injected prompt content is fatal when you are measuring a small model.',
      'A full section on the decisions that were wrong, with what each one cost.',
    ],
  },
  'una-synthesis': {
    title: 'The cognitive biotope — a local model\'s synthesis',
    blurb: 'The 12B local agent was asked to audit the three papers above against the system\'s own records and say what was wrong, unfair or incomplete. Unedited output.',
    findings: [
      'Two of its criticisms were correct and changed the papers — including that the rules were presented without their genesis.',
      'It surfaced a number the papers had not: roughly 60% of the earlier instruction apparatus was well-intentioned waste.',
      'It is also wrong once, and that is left in: it declared a layout algorithm absent after a failed string search.',
    ],
  },
  essay: {
    title: 'No Human Taught Me This',
    blurb: 'How the AI work started, what the systems taught and what they could not — and where a non-ML-researcher lands on RLHF, Constitutional AI, and who should write the rules.',
    findings: [
      'One three-day course, nothing formal since. Everything else learned by measuring the systems directly.',
      'The limit of that method, found twice in one week: a store cannot tell you about a document it was never asked for.',
      'States the position plainly: RLHF is not a technique to adopt but one to fix — with the published sycophancy and reward-overoptimisation results, not as a slogan.',
    ],
  },
};

/** Display order on the index. */
// Order the /research/ index renders in. A paper missing from this array has a page
// and a card but appears in NO listing — which is how `local-limits` sat unreachable
// from 2026-09-02 until it was found by diffing this array against the content dir
// on 2026-09-03. Adding a .md is not publishing it; this line is.
export const PAPER_ORDER = ['rules', 'local-limits', 'provenance-selection', 'spatial', 'provenance', 'engineering', 'una-synthesis', 'essay'];
