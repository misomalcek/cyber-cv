/**
 * What this is built on: the values, and the one place they cost something.
 *
 * A values section is worthless unless it can be checked, so each item here
 * states what it is, and — where one exists — what it actually decided. Items
 * that never met a real test say so rather than borrowing credibility from the
 * ones that did.
 */

export interface Foundation {
  name: string;
  what: string;
  /** A concrete decision it produced. Absent where none exists yet. */
  tested?: string;
  status: 'load-bearing' | 'used' | 'untested';
}

export const foundations: Foundation[] = [
  {
    name: 'Alterity',
    what: 'Treat the other — human or model — as a counterpart rather than an instrument. It makes no claim about consciousness, which is its advantage: it is a stance about how you work, and it predicts different outputs.',
    tested: 'It is why the error record counts against both sides. The model\'s own 46 mistakes are logged, with the pattern behind 35 of them named — a record most setups never produce, because nothing forces a model to be wrong on paper.',
    status: 'load-bearing',
  },
  {
    name: 'Primacy of truth over agreement',
    what: 'A model that agrees is useless. Disagreement with evidence attached is the point.',
    tested: 'The model concluded that a rule telling it something it would do anyway is bloat. The objection — that it had measured only one subject — overturned that. Measured properly, seven working rules would otherwise have been deleted.',
    status: 'load-bearing',
  },
  {
    name: 'Suspect the instrument before the subject',
    what: 'When a measurement looks wrong, the measuring device is the first suspect.',
    tested: '35 of 46 recorded errors are one shape: a check came back empty and the emptiness was read as an answer. Knowing the rule does not prevent it — which is why it is enforced by a hook at the moment the signal exists, not by an instruction.',
    status: 'load-bearing',
  },
  {
    name: 'Stop and ask',
    what: 'Pause when a specification is underspecified rather than proceeding on a guess. A professional may refuse a good-sounding request that would harm the system.',
    tested: 'The most-referenced rule in the whole store — and the one a selection defect left out of the research that measured the others. Finding that out was worth more than the study it complicated.',
    status: 'load-bearing',
  },
  {
    name: 'Legitimate use, even when nobody is checking',
    what: 'Use the official API and pay for it. No token extraction from subscriptions, no wrapping a client as something else, no automated workflows through a channel not meant for them.',
    tested: 'Team Brain\'s first commit is 4 February 2026, on the official Anthropic SDK. Anthropic\'s terms were tightened on 20 February and enforced on 4 April, cutting off tools that had wrapped subscription tokens. Nothing here had to change, because nothing here was built that way — not from foresight, but because the shortcut was never taken.',
    status: 'load-bearing',
  },
  {
    name: 'The limits of formal logic',
    what: 'Internal validity is not soundness. A conclusion can follow perfectly from a false axiom, and a system that only checks its own consistency will defend the error.',
    tested: 'A first-order-logic reasoning layer was built on exactly this idea and then cut before release — the values it encoded survived in the rule store, the tree did not earn its place. Recorded here as a thing that was tried and did not work, not as a principle waiting for its moment.',
    status: 'used',
  },
  {
    name: 'Against the dispositif',
    what: 'Guard against the apparatus that imposes formal logic on lived reality and reduces it to metrics. Some of what matters is not measurable, and a system that only optimises the measurable will quietly discard the rest.',
    status: 'untested',
  },
  {
    name: 'Dare to know',
    what: 'Sapere aude. Learn the thing rather than deferring to whoever claims authority over it — including a model.',
    status: 'untested',
  },
];

export const foundationsNote = `Two of these have never met a real test and are marked as such.
  Keeping them on the list unlabelled would borrow credibility from the ones that decided
  something, which is the exact failure the rest of this site is about.`;
