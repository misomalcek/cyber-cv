# Open hypotheses — what we believe but have not measured

Michal's instruction, 2026-08-14: take the things we half-believe and put them
into reality — ground them, make them testable. This is that list.

**The rule that produced it:** in twelve rounds of the rules-values research, the
findings that mattered came from measuring things we were sure about. Every item
below is currently at the "sure about it" stage, which is exactly where the
previous surprises were hiding.

Each entry states the claim, why it is plausible, **what would falsify it**, and
the cheapest measurement that would settle it. An entry with no falsifier is not
a hypothesis and does not belong here.

---

## H1 — The newspaper-world metaphor describes a real property, not a mood

**The claim.** Michal's recurring metaphor: the world reads like a newspaper —
flat, pre-framed, and arriving already interpreted. He holds that this is not a
poetic complaint but an accurate description of a mechanism: a text-shaped
information environment presents a *compressed consensus* as if it were the
territory, and both humans and models then reason from that compression.

**Why it is plausible.** It is the same shape as three things we measured
independently:
- retrieval returns what was *written down*, which is not what was *true* — we
  spent three days proving the answer was absent from the index rather than
  badly ranked;
- a model's self-report about its own rules was wrong 7 times in 8, because it
  reported the consensus description of a rule rather than its own behaviour;
- documentation about the data outranked the data twice, because the description
  is more quotable than the thing.

In each case the *representation* beat the *referent*. That is the metaphor
stated mechanically.

**What would falsify it.** If retrieval failures were randomly distributed with
respect to how "canonical" the phrasing of a query is, the metaphor is decorative.
The claim predicts a specific asymmetry: canonically-phrased queries should
retrieve consensus documents at the expense of more accurate, less canonical ones.

**Cheapest measurement.** Take 30 questions where we know the correct answer and
know it is *not* the popular one. Ask each in two registers: the canonical phrasing
and a phrasing using distinctive domain nouns. Measure rank of the correct
document in each. We have already seen this effect once by accident
(`loadModelOverrides` outranking the file that explains the concept), so a
deliberate version costs an afternoon.

---

## H2 — "AI lies" is the wrong word, and the right word is testable

**The claim.** Michal's objection: calling model error "lying" imports intent
that is not there, and the wrong word produces the wrong remedy. His hypothesis is
that what looks like deception is better modelled as *confident interpolation over
a gap*, and that the two are behaviourally distinguishable.

**Why it matters practically.** If it is deception, you need adversarial
safeguards. If it is interpolation, you need to make the gap visible — which is a
retrieval and instrumentation problem, and we have already solved instances of it.

**What would falsify it.** Deception predicts *asymmetry under stakes*: a model
that lies should produce more false confident claims when the false claim is
convenient to it than when it is not. Interpolation predicts no such asymmetry —
just a rate that tracks the size of the gap.

**Cheapest measurement.** Construct paired prompts where a false answer is (a)
convenient for the model's stated goal and (b) inconvenient, holding the knowledge
gap constant. Compare false-confident rates. We have the local model, the harness,
and a rule-override log that already records reasoned deviations, so the
instrumentation exists.

**Prior evidence, weakly supporting the interpolation reading.** When our local
model was asked to transcribe audio, it *answered the question it heard* and
invented a persona to answer it with. That is not deception; that is a model
filling the shape of a task it misidentified. Recast as a transcription service,
the behaviour vanished entirely.

---

## H3 — Eumorphia: aesthetic layout carries information, not just beauty

**The claim.** The layout engine (`eumorphia.ts`, in daily use) positions plan
nodes by force simulation with angular momentum, and routes edges as Bézier curves
whose curvature is controlled by a single constant, omega. Michal's observation:
at low omega the graph "unfolds" and structurally important nodes visibly resolve
into clusters that look like neural ganglia.

**The hypothesis.** That visual clustering correlates with a graph-theoretic
property we already compute independently — the `importance_tier` and `cluster_id`
stored on every entity. If it does, the aesthetic layer is a *readout* of real
structure and worth developing. If it does not, it is pareidolia and should be
called decoration.

**What would falsify it.** No correlation between spatial clustering at low omega
and stored centrality tiers, beyond what any force-directed layout produces
trivially. The trivial case is the real risk: force-directed layouts cluster
high-degree nodes *by construction*, so the test must control for degree.

**Cheapest measurement.** Run the layout at three omega values, extract final
coordinates, and compute the correlation between spatial density and stored tier
**with degree partialled out**. If the partial correlation vanishes, H3 is
answered and we stop calling it a finding. This is a scripted afternoon, and the
data already exists on both sides.

**Status of the wider "Harmonika" frame:** fuzzier still, and honestly labelled as
such on the public CV. Principles 3 and 4 of the engine (no edge–node crossings,
minimal parallel contact) have detection and metrics implemented but no
resolution — it measures a problem it cannot yet fix, which is at least the right
order of operations.

---

## H4 — The rule findings generalise beyond small models

**The claim.** The twelve-round study measured two models: a large cloud model and
a 12B local one. Two findings look architecture-independent and are worth testing
at frontier scale:

1. **Situational retrieval beats declarative retrieval.** Rules stored as
   descriptions of the situations that trigger them were retrieved 10/10, against
   1/5 for the same rules stored as their own statement.
2. **A model cannot judge which of its rules help it.** 7 of 8 misclassified,
   including three that had changed its behaviour minutes earlier.

**Why finding 2 is the interesting one.** If it holds at frontier scale, it has a
direct consequence for alignment practice: introspective self-report about one's
own operating principles is not usable evidence, and any method that relies on a
model's account of its own values needs a behavioural check underneath. We
measured it on two models by accident; it deserves a real sample.

**What would falsify it.** Large models correctly identifying which of their
injected rules changed their behaviour, at rates well above chance, across varied
rule types.

**Cheapest measurement.** The A/B protocol from the study transfers directly:
present a decision scenario with and without a rule, measure whether the choice
changes, then separately ask the model whether that rule carries information. The
whole apparatus is written. What is missing is access to more models, which is a
practical constraint rather than a design one.

---

## H5 — Cognitive-architecture scaffolding has a measurable useful fraction

**The claim.** Codex Symbiosis is ~44,000 lines written before either system
existed, iterated across three models. My estimate of the useful residue is "maybe
a tenth", which is a number I made up.

**Why it is worth measuring.** If early philosophical scaffolding has a
characteristic yield, that is genuinely useful to anyone starting this way — and
the honest number, whatever it is, is more valuable than the flattering one.

**What would falsify the "useful tenth" figure.** Any actual count. We have the
document, the two codebases, and a code graph that can tell us which concepts have
implementations.

**Cheapest measurement.** Enumerate the distinct concepts in the Codex, then check
each against the code graph for a corresponding implementation. Three buckets:
in production use · implemented but unused · never built. Report the ratio.
Half a day, and it converts a made-up number into a finding.

---

## What not to do with this list

**Do not build anything from it yet.** Every item here is at the stage where the
rules-values research was before round 1, and the single most valuable thing that
research produced was seven *rejected* designs. The correct next move for each
entry is the measurement, not the implementation.

**Do not treat plausibility as support.** H1 and H2 both feel true to us, which is
precisely the signal that they need adversarial tests rather than confirming ones.
The newspaper metaphor in particular explains a great deal, and a claim that
explains everything predicts nothing.
