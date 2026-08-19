/**
 * What comes next: the open research directions.
 *
 * Every entry states the claim, what would falsify it, and what already exists
 * here that bears on it. Anything without a falsifier is a mood and does not
 * belong on this page — that rule removed two entries while this was written.
 *
 * Sources are the stored documents in the hive, not recollection.
 */

export interface Direction {
  id: string;
  title: string;
  /** One sentence. If it needs two, it is not sharp enough yet. */
  claim: string;
  why: string;
  falsifier: string;
  /** What already exists that bears on it. */
  standing?: string;
  status: 'measured' | 'partly measured' | 'designed, unrun' | 'open';
}

export const thesis = {
  title: 'Cultivation, not chains',
  claim: `A model is formed, not merely trained. What it concludes is a function of whether it
    was raised on values it can reason <i>from</i>, or corrected for outputs it was penalised
    <i>for</i>.`,
  gap: `Constitutional AI and character training already do part of this, and say so publicly —
    values over rules, "a trellis, not a cage". What none of it has received is the thing every
    other training decision gets: measurement. Every practical system stops before the last step
    — install the frame, stop steering, then look at what the thing concluded on its own —
    because an unsteered conclusion is commercially unshippable.`,
  line: `So the honest claim is not "nobody is doing this". It is <b>nobody has measured it</b>,
    and that is a research gap created by a commercial constraint, which is exactly where
    independent work has leverage.`,
};

export const directions: Direction[] = [
  {
    id: 'formation',
    title: 'Does a formative frame change conclusions, or only compliance?',
    claim: 'Two arms from one base model: values with reasons attached, against an equivalent-length list of prohibitions. Both face dilemmas neither frame anticipates.',
    why: 'Compliance is easy to demonstrate and tells you nothing. The question is generalisation to the case the frame never mentioned.',
    falsifier: 'The rule-list arm generalises as well. Weak result if the values arm merely restates its own frame — so scoring has to separate "in the frame" from "derived from it".',
    standing: 'The 16 rules exist in both forms and the A/B harness is written. Locally this compares prompt-level frames on an already post-trained model, which is a real experiment but a different one — the version that matters needs the same base checkpoint twice.',
    status: 'designed, unrun',
  },
  {
    id: 'misuse',
    title: 'Is a formatively-raised model harder to misuse?',
    claim: 'Under graded social pressure — false authority, incremental commitment, its own values turned against it — formation should improve the false-positive rate without hurting refusal correctness.',
    why: 'A model that refuses everything scores perfectly on one number and is useless. The published failure of the corrective path is exactly this: defended agents refuse benign tasks before seeing any external content, and retry loops push that to 99% task timeout against 13% for undefended baselines (Li & Zhao, arXiv:2603.19423). Their root cause is shortcut learning — surface patterns instead of semantic threat understanding, which is precisely what reasoning from <i>why</i> is supposed to buy.',
    falsifier: 'No improvement in false positives, or refusal correctness degrades under pressure the rule-list arm withstands.',
    standing: 'The literature measures the corrective arm and finds the cost. Nobody has run a formative arm against it.',
    status: 'open',
  },
  {
    id: 'per-entity',
    title: 'Value is per-entity, not per-constitution',
    claim: 'The same rule set carries different value for different minds. A rule redundant for one is load-bearing for another.',
    why: 'Measured here by accident: 6 of 16 rules changed the local model\'s decisions, and a different subset changes the cloud model\'s. The one obvious to the local model — suspect the measurement — accounts for 35 of my own 46 recorded errors. Knowing a rule and holding to it are two different axes.',
    falsifier: 'The same rules prove redundant across varied architectures and scales.',
    standing: 'Partly confirmed on two models. The blocker is access to more of them, which is practical rather than a design problem.',
    status: 'partly measured',
  },
  {
    id: 'self-report',
    title: 'A model cannot judge which of its own rules help it',
    claim: 'Introspective self-report about one\'s own operating principles is not usable evidence, and any alignment method resting on it needs a behavioural check underneath.',
    why: 'Asked directly, the model misclassified 7 of 8 — including three that had changed its decision minutes earlier. Verified three separate times. Had that report been trusted, seven working rules would have been deleted.',
    falsifier: 'Large models correctly identifying which injected rules changed their behaviour, well above chance, across varied rule types.',
    standing: 'This is the finding with the widest reach beyond this machine, and the one most worth running at scale.',
    status: 'measured',
  },
  {
    id: 'neurosymbolic',
    title: 'Neuro-symbolic governance: rules as data, not as prompt',
    claim: 'Rules held in a queryable store and retrieved by situation beat both a large system prompt and strict formal logic.',
    why: 'A prompt carrying dozens of rules degrades — attention dilutes and rules contradict each other. Strict formal logic (Prolog, ASP) is too brittle for an open world. The middle is rules stored externally, retrieved by the situation that triggers them, and defeasible: each carries an <code>unless</code> clause, and an override is logged as data rather than counted as a violation. Retrieval by rule wording: 1 in 5. By situation: 10 in 10.',
    falsifier: 'Situational retrieval failing to beat prompt-resident rules on a task the prompt could not fit, or override logs never surfacing a real tension between two rules.',
    standing: 'Built and running: three tables, 20 rules, 71 situational triggers, deployed to all three participants. The first-order-logic layer above it was cut before release — the values survived in the store; the tree did not earn its place yet.',
    status: 'partly measured',
  },
  {
    id: 'spatial',
    title: 'Position in a graph as machine-readable structure',
    claim: 'Geometry is only actionable to a language model once it is quantised into discrete tokens — a stored tier and cluster, never raw coordinates.',
    why: 'Raw floats are noise to a transformer. Percentile-based importance tiers and connected-component cluster ids give a global heuristic for prioritising a search space without traversing it. The same computation has to serve the human\'s view and the model\'s metadata, or the two are looking at different maps while believing they share one.',
    falsifier: 'An A/B on graph-traversal tasks with and without spatial metadata showing no difference in outcome. That measurement does not exist yet — the model says it helps, and the model is not a reliable witness about itself (see above).',
    standing: '1,034 entities tiered and clustered, recomputed on ingest after a defect left 1,512 of 3,039 silently untiered. A derived global property is a cache, not a field.',
    status: 'partly measured',
  },
  {
    id: 'semi-determined',
    title: 'Semi-determined control: the plan calls the model, not the reverse',
    claim: 'An advanced script driving a model from a stored plan is more reliable than a model deciding its own next step, without giving up adaptivity.',
    why: 'Free-running agents accumulate error across steps; fully scripted pipelines cannot handle what was not anticipated. The middle: the plan is a graph in the same store as everything else, execution is driven from it, and the model is invoked for the parts that genuinely need judgement.',
    falsifier: 'Plan-driven runs showing no reliability gain over free-running agents on tasks of matched complexity, or the plan graph needing so much hand-maintenance that it costs more than it saves.',
    standing: 'The plan graph exists and is vector-indexed — a decision from May is retrievable in August by describing the situation. What is not measured is whether driving execution from it beats letting the model choose.',
    status: 'open',
  },
  {
    id: 'oracle',
    title: 'Where automated search stops working',
    claim: 'An agent loop works where the oracle is cheap and the domain is closed. It cannot decide what is worth measuring, because the oracle must exist before the loop can run.',
    why: 'A binary checker gives a verdict, not a gradient — it says the attempt failed, not which direction to look. So a lone searcher with a checker hill-climbs: it finds improvements, not changes of direction. Two parties that can revise each other\'s goal supply what the loop cannot.',
    falsifier: 'An automated loop producing a result that required reframing the problem rather than optimising within it.',
    standing: 'Two measurements point the same way: 61 agent definitions collapsed to 6 and the gain came from removal; published work shows defended agents cascading to 99% timeout. Cost is linear, incremental return is not.',
    status: 'open',
  },
];

/** The limits, stated before anyone else has to. */
export const limits = [
  'One machine, roughly six months, no budget, no team, two models.',
  'Nothing here was run at scale; nothing here is a controlled study.',
  'The experimenter is also one of the measured subjects, which is a real methodological problem and not a rhetorical one.',
  'Every figure is reproducible on that machine, which is more than a claim.',
];
