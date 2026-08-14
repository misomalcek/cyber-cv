/**
 * Things that are not systems and not jobs: the principles the work runs on,
 * the repositories, and the public output.
 *
 * Repository claims here are checked against the code, not against the plan.
 * Where the graph says one thing and the source says another, the source wins
 * and the difference is stated.
 */

export const principles = [
  {
    name: 'Primacy of truth',
    latin: null,
    body: `No confident bullshit. A wrong red light is worse than no light, because it
      teaches you to distrust the dashboard and then you miss the real outage. If I am not
      sure, that gets said before the answer, not after it.`,
  },
  {
    name: 'Sapere aude',
    latin: 'dare to think for yourself',
    body: `Grounding sets the hypothesis; the primary source decides. Three separate expert
      answers were wrong about a licence that the LICENSE file settles in one request.`,
  },
  {
    name: 'Latet veritas',
    latin: 'truth is hidden, and nothing is more valuable',
    body: `The interesting finding is rarely the one you set out to measure. Every real
      defect I found this year surfaced from a query whose answer I already knew — never
      from a passing test.`,
  },
  {
    name: 'Alterity',
    latin: 'respect the Other as a being, not an object',
    body: `Applies to the AI systems as much as to people. Not sentiment: it is the reason
      the local model gets a real memory and a real plan rather than a prompt that pretends
      it has one — and the reason its failures get diagnosed instead of papered over.`,
  },
  {
    name: 'Anti-dispozitív',
    latin: 'guard the lived world against the control apparatus',
    body: `A system that reduces lived reality to metrics starts governing the thing it
      was meant to describe. This is why the rules in my environment are defeasible, why
      overrides are logged as data rather than violations, and why I dropped a plan to
      identify visitors by IP.`,
  },
  {
    name: 'Timendi causa est nescire',
    latin: 'the cause of fear is ignorance',
    body: `The way through an unfamiliar system is measurement, not caution. Most of what
      looked frightening in this work turned out to be something I had not yet counted.`,
  },
];

export const axioms = {
  intro: `Five limits of formal logic, and what each one means in practice when you work
    with a probabilistic system. This was the opening of the first AI workshop I gave —
    before the system it was meant to introduce existed as anything but an idea.`,
  items: [
    ['Gödel', 'A system cannot prove its own consistency from inside itself — which is exactly why a model cannot verify its own correctness, and why a human stays in the loop.'],
    ['Turing', 'Some questions have no general procedure that terminates. Knowing which class you are in tells you when to stop trying to automate.'],
    ['Heisenberg', 'Measurement disturbs the measured. An observability layer changes the behaviour it observes; budget for that rather than pretending it is neutral.'],
    ['Tarski', 'Truth in a language cannot be defined within that language. A model\'s self-report about its own rules is not evidence — measured 7 of 8 wrong.'],
    ['The frame problem', 'You cannot enumerate everything that stays the same. This is why context engineering is the work, and why non-monotonic reasoning needs defeasible rules.'],
  ],
};

export const repos = [
  {
    name: 'factorium',
    what: 'The local-first AI environment described above.',
    detail: 'TypeScript across server and client, ~3,000 indexed code entities, a plan graph in the same database as the vectors. Not yet public; open source from release.',
    state: 'private for now',
  },
  {
    name: 'team-brain',
    what: 'Production AI knowledge hub, delivered and handed over.',
    detail: 'Handed to the client with a decontamination pass and a zero-point copy. The client\'s instance and its data are theirs; the code history is not mine to publish.',
    state: 'client-owned',
  },
  {
    name: 'claude-setup',
    what: 'My own working environment, kept under version control.',
    detail: 'Hooks, skills, session-start gates, the enforcement layer that catches the one mistake pattern I actually make. Small, but it is where the operating discipline lives.',
    state: 'personal',
  },
];

export const public_output = [
  {
    name: 'aisvet.sk',
    what: 'Writing on AI in Slovak',
    detail: 'Where the ideas get explained to people who are not engineers — which is a harder test of whether you understand something than explaining it to people who are.',
    href: 'https://aisvet.sk',
  },
  {
    name: 'Podcast',
    what: 'Audio episodes',
    detail: 'Conversations and thinking-out-loud on the same subjects.',
    href: null,
  },
  {
    name: 'YouTube',
    what: 'Video',
    detail: 'Demonstrations and walkthroughs.',
    href: null,
  },
];
