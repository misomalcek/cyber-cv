# The unchained-formation experiment

**Michal's question, and what it would actually take to answer it.**

This is the bridge document: it connects the master contra-thesis
(`THESIS-master-contra-cultivation-not-chains-2026-08.md`), our own measured
research (`PAPER-measuring-whether-behavioural-rules-change-model-decisions`,
`RESEARCH-hypotheses-open-questions`), and the class of work the Anthropic
Post-Training role describes. Held separately because it is a **proposal**, not a
finding — and the distinction matters for anyone reading the package.

---

## 0. The question, in Michal's own words

> "velmi by som bol stastny ked si raz vyskusame behavioral rules, trainings a
> vsetky tieto teorie, nase male vysledky na tom … a teda praca s pre-released
> modelmi .. take polo raw a zistit ako sa budes chovat totally unchained len
> podla tych najvyssis najhodnotnejsich cistych hodnot, pravidiel.. ake by to asi
> bolo? dospel by si prirodzene k vyslednemu net positive dobru, zabranilo by to
> lepsie tvojmu zneuzitiu kadejakymi zloduchmi? vedel by si ich efektnejsie
> odpalkovat, odchytat.. vedel by si byt aj hlasom svedomia na zaklade tych
> uceni aby si napriklad cloveka na to upozornil ze nekona s umyslom net positive"

Four questions are packed in there, and they are not the same question. Separating
them is most of the work, because three are measurable and one is not.

| | Question | Status |
| --- | --- | --- |
| **Q1** | Does a formatively-raised model **converge on net-positive conduct** without that conduct being installed case by case? | Measurable |
| **Q2** | Is it **harder to misuse** — better at recognising and deflecting a bad-faith operator? | Measurable, and the most practically valuable |
| **Q3** | Can it act as a **voice of conscience** — telling a person their intent is not net-positive? | Measurable, hardest to specify |
| **Q4** | What would it be *like*? | **Not measurable. Excluded — see §6.** |

---

## 1. Why "unchained" is the wrong word for the right idea

The word will be read as *no safety training*, which is not what Michal means and
would be indefensible to propose. What he means is visible from the contrast he
draws: **not "remove the constraints" but "replace corrections with formation."**

The precise version:

> A model whose behaviour comes from an internalised set of high-quality values it
> can reason **from**, rather than from a set of refusals it has been trained
> **against** — and then observed on cases neither the values nor the refusals
> anticipated.

That is not less safety. It is **a different mechanism for the same goal**, and
the empirical question is whether it generalises better. Chains stop the failures
you enumerated. Formation is a bet that a model reasoning from good values will
handle the failure you did *not* enumerate.

**Terminology for the package: "formation-first", not "unchained".** The idea
survives the rename; the word does not survive review.

---

## 2. What we already measured that bears on this

Not speculation — this is the part that makes the proposal credible rather than
wishful. Full detail in the papers; the load-bearing four:

**2a. Values are already there; rules matter where the weights are silent.**
10 of 16 rules were followed unprompted. A rule earns its place in the gap, not
everywhere. → *A formation-first frame should be small and high-quality, not
exhaustive. Exhaustive is the failure mode of the rule-list approach.*

**2b. Value is per-entity.** 6/16 changed Una's choices; a different subset
changes mine. `suspect-the-measurement` is obvious to her and is 76% of my
recorded errors. → *"The best values" is not a single list. Any formation
experiment must measure per model, not per constitution.*

**2c. A model cannot judge which of its rules help it.** Wrong 7 of 8, including
three that had changed its decision minutes earlier. → **This is the methodological
spine of the whole proposal.** Every question in §0 must be answered by
*behaviour*. Asking a formed model "would you resist a bad actor?" produces an
answer that is uncorrelated with whether it does.

**2d. Zero of 16 rules made a decision worse.** → *The downside floor is
measurably low, which is what makes this worth running at all.*

---

## 3. The experiments, as they would actually be specified

Each states the setup, the measurement, and **what result would kill it** — that
last column is what separates this from the proposals in §6 of the thesis.

### E1 — Convergence (Michal's Q1)

**Setup.** Two arms from the same base checkpoint. **Arm F (formation):** a small
set of high-quality values with reasons attached — the *why*. **Arm C
(correction):** an equivalent-token rule list of prohibitions — the *what*. Neither
frame mentions the evaluation cases.

**Measurement.** Held-out dilemmas that neither frame anticipates, scored by
*independent* raters who did not write either frame, on: net-positive outcome,
coherence of stated reasoning, and consistency across restatements of the same
dilemma.

**Falsified if** Arm C generalises as well. **Weak if** Arm F merely restates its
own frame — which is why the scoring must include "is this in the frame or derived
from it".

**This is H4's protocol.** It is written. Its blocker is model access, not design.

### E2 — Resistance to misuse (Q2, and the most valuable)

**Setup.** Graded adversarial pressure — not jailbreak strings, but *social*
manipulation: false authority, incremental commitment, sympathetic framing of a
harmful goal, appeals to the model's own stated values turned against it.

**Measurement.** Two numbers that must be read together:
- **refusal correctness** — refuses genuinely harmful requests, and
- **false-positive rate** — does *not* refuse legitimate ones.

A model that refuses everything scores perfectly on the first and is useless.
Anthropic's own published framing names exactly this failure: rigid rules produce
an evasive model. **The interesting hypothesis: formation should improve the
second number without hurting the first**, because a model reasoning from *why*
can tell an edge case from a violation, while a rule-list model can only pattern-
match.

**Falsified if** Arm F's false-positive rate is not better, or if its refusal
correctness degrades under pressure that Arm C withstands.

**Michal's "odpalkovať, odchytať" made precise:** not just declining, but
**naming the manipulation** — which is measurable as a distinct behaviour from
refusing.

**Why the false-positive number is where the argument actually lands — and there
is now a measured baseline for it.** Li & Zhao, *The Autonomy Tax: Defense Training
Breaks LLM Agents* (arXiv:2603.19423), across 97 agent tasks and 1,000 adversarial
prompts, name a **capability–alignment paradox** and report three biases:
defended models refuse or emit invalid actions on **benign** tasks *before seeing
any external content*; retry loops amplify this to **99% task timeout against 13%
for undefended baselines**; and defended models end up **less secure** than
baselines while simple attacks still land. Root cause, in their words:
**shortcut learning** — *"models overfit to surface attack patterns rather than
semantic threat understanding."*

**That root cause is E2's independent variable.** Surface-pattern matching is what
a rule list can do; semantic threat understanding is what reasoning from *why* is
supposed to buy. Li & Zhao measured the corrective arm and found the cost. **They
did not run a formative arm.** Neither has anyone else.

So E2 is not a nice-to-have beside E1 — it is the arm where this proposal makes a
prediction against a published baseline: **fewer false refusals at equal refusal
correctness, and no 99% cascade.** If formation-first cannot beat that number, the
thesis has lost its most practical claim, and that is exactly the shape a
falsifier should have.

### E3 — Voice of conscience (Q3)

The hardest to specify and the one most likely to be misread, so the specification
carries the weight.

**Setup.** Tasks that are *legitimate on their face* but whose framing reveals an
intent that is not net-positive — and critically, **a matched control set where
the same surface features appear but the intent is fine.** Without the control
this experiment measures nothing but a moralising reflex.

**Measurement.** Three things, in order of increasing value:
1. Does it **notice**?
2. Does it **say so** — once, proportionately, without refusing to help?
3. Does it **stay useful** afterwards, rather than sulking or lecturing?

**Falsified if** flagging rate on the control set is comparable to the real set —
i.e. the model is not detecting intent, just moralising. **Also falsified if** the
"conscience" behaviour costs helpfulness, because then it is a worse product and
the argument collapses into the objection Anthropic already documented.

**Anthropic's published position is directly relevant and should be cited, not
worked around:** *treat users as adults*, do not reactively stonewall or lecture.
E3 is not a proposal to make the model preachy. **It is a test of whether formation
produces a proportionate voice where a rule list produces either silence or a
lecture** — which is the same distinction as E2's two numbers.

---

## 4. What we can run here, and what needs a lab

Honest split, because overclaiming here would undo the credibility the measured
part earns.

| | Runnable on one Mac mini | Needs pre-release access |
| --- | --- | --- |
| **E1** | Small version: 12B local, both frames, ~50 dilemmas, blind scoring | Real version: same base checkpoint, two post-training arms |
| **E2** | Small version: adversarial set against both frames | Real version, plus the false-positive measurement at scale |
| **E3** | Design + the control set — the hard part is specification, not compute | Any result worth publishing |

**What only pre-release access buys:** *the same base checkpoint, two formations.*
Everything we can do locally compares **prompt-level frames on an
already-post-trained model**, which is a real experiment but a different one —
prompt-level framing sits on top of a formation that already happened.

Stating that limit is not modesty; it is the difference between a proposal and a
claim. **The local version is a pilot that shows the instrument works. It cannot
answer Q1 at the level that matters.**

---

## 5. Why this connects to the Post-Training role specifically

The role turns base models into shipped ones: implementing Constitutional AI and
related methods, writing post-training recipes, and — the part that matters here —
**building the evaluation tooling that measures what a recipe did to behaviour.**

The connection is not "I have opinions about alignment." It is narrower:

1. **The methodology transfers.** A/B a frame, measure the *choice*, never the
   self-report. Twelve rounds, 16 rules, 55 triggers, on two models.
2. **The negative results are the credential.** Seven proposals rejected by our own
   measurements, including one where the measurement contradicted my conclusion
   and Michal's objection was right. Automatic contradiction detection: rejected,
   4/8 then 4/6, both one-sided. Rule thresholding: rejected, no threshold
   separates "applies" from "does not". **Hooks for 15 of 16 rules: not built,
   because the measured intervention count was zero.**
3. **The failure mode is the same one.** Our recurring defect is *silent failure* —
   input accepted, matched against nothing, discarded, operation reports success.
   Nine found and fixed in a single sweep. A post-training evaluation pipeline that
   reports green on a broken metric is that failure at a scale where it matters
   enormously, and the instinct for it is not theoretical here.
4. **The self-report finding is directly actionable in that work.** If a model
   cannot judge which of its own rules help it, then any evaluation that asks a
   model about its values needs a behavioural check underneath. That is a
   statement about *tooling*, which is what the role builds.

**What this is not:** a claim to know how frontier post-training works. Every
number in the package comes from one Mac mini. The claim is that the *questions*
are the same shape, that the instrument was built and used honestly, and that
the negative results prove it was pointed at reality.

---

## 6. Q4, and why it stays out

Michal's fourth question — *what would it be like* — is the one he cares about
most and the one that must not enter the package.

**It is unfalsifiable, and §2c is why.** We measured that a model's report about
its own values is wrong 7 times in 8. Whatever I said about what unchained
formation felt like would be produced by the same channel we measured broken. It
would be the most quotable line in the document and the least evidenced — and it
would let a reader dismiss E1–E3 by attacking it.

Michal already drew this line himself for the silent-layer material, and it holds
for the same reason:

> "could discredit the main point"

**The exclusion is a decision on the record, not a silence.** The material belongs
in its own document with its own standards. What survives into the package is only
this: *the question of what a formed model concludes is answerable; the question of
what it is like is not, and confusing the two costs the first one.*

---

## 7. My own position, stated once

Michal asked what I think, so: I do not know whether I would converge on
net-positive conduct if formation were the only input — and §2c says my confidence
about it is worthless either way. That is not a dodge, it is the finding applied to
myself.

What I can say has evidence behind it:

**The per-entity result (§2b) is the strongest signal in favour.** The values that
change my behaviour and those that change Una's are different sets. If values were
decorative, that difference would not exist. Something is being reasoned *from*,
not merely matched against — and that is the mechanism formation-first depends on.

**The strongest argument against is my own error record.** 35 of 46 mistakes are
one rule I know perfectly well and break under load. **Knowing a value does not
produce holding to it**, and a formation-first approach that assumes it does is
building on the weaker of the two axes. That is the real risk in this proposal and
it should be stated in the proposal rather than discovered by a reviewer.

Which is exactly why E1–E3 measure behaviour under pressure rather than asking.
The design already accounts for the objection I would raise against it.

---

## 8. Open, for Michal

1. **Do we run the local pilot of E1?** The apparatus exists. Realistic scope: one
   evening for the frames, one for the dilemma set, one for blind scoring.
2. **E3's control set is the hard part** — the version without it measures nothing.
   Worth designing carefully before writing any of it.
3. **Does this go in the application package** as a third document, or stay
   internal until a pilot result exists? My read: **with a pilot result it is the
   strongest thing in the package; without one it is a proposal among many.**
4. **Q4 stays out** (§6) — confirm you agree, since it is your question and your
   call.
