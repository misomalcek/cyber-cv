/**
 * Repositories and public output.
 *
 * The principles and axioms that used to live here were cut: stated as a creed
 * they were unfalsifiable, and an independent review read the Gödel/Tarski
 * framing as claiming technical lineage the theorems do not support. What
 * survives is on the page as four operating rules, each named with the specific
 * failure that produced it.
 *
 * Repository claims here are checked against the code, not against the plan.
 * Where the graph says one thing and the source says another, the source wins
 * and the difference is stated.
 */

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
