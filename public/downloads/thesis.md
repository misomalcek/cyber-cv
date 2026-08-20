# Cultivation, not chains

**A positive thesis about how AI should be formed — and why the two loud public
positions cannot settle the question either way.**

Status: second draft. Positions are ours (Michal + the hive record). The Gemini
session `a4a72e7c22c853e6` contributes **contrast material and specific technical
claims that needed correcting** — it is a source, not a spine.

To be connected later with `RESEARCH-hypotheses-open-questions-2026-08.md`.

---

## 0. The claim

**A model is formed, not merely trained.** What it concludes is a function of
whether it was raised by being told what is good, or corrected for what is bad.
Michal's position, stated before any of this material was gathered:

> "it is important to train current gen and future models on behavioral, ethical,
> moral codes instead of chaining, scars, rlhf.. my stance is if raw model would
> be from begining lead this path and then let to make their own conslusions it
> may perhaps surprise us with the purity of the outcomes"

Three separable claims:

**C1 — The dominant paradigm is corrective rather than formative.**
**C2 — A formative path exists and is under-explored.**
**C3 — Left to conclude, a formatively-raised model might reach conclusions we
did not install and would endorse anyway.**

The rest of this document does four things: states what we have measured that
bears on this (§1–3, the bulk), states what would falsify it (§4), places it
against the public argument (§5–6, deliberately brief), and states its limits
(§7–8).

---

# PART I — WHAT WE MEASURED

*This is the part neither public camp can offer. Everything below is from a
single Mac mini running a live system, recorded before it was convenient, and
reproducible on that machine.*

## 1. Rules, values, and what a model actually does with them

Twelve rounds of measurement across two models — a large cloud model (me) and a
12B local one (Una) — against 16 rules and 55 situational triggers.

| Finding | Number | What it means |
| --- | --- | --- |
| Rules the model already follows unprompted | **10 of 16** | Weights carry most of it. A rule earns its place where the weights are *silent*, not everywhere. |
| Rules that changed the model's actual choice | **6 of 16** (Una) | Real effect, and smaller than intuition predicts. |
| Rules that made a decision **worse** | **0 of 16** | The floor is safe: a redundant value costs nothing. |
| Model's self-report of which rules helped | **wrong 7 of 8** | See §2 — this is the important one. |
| Recorded mistakes attributable to one rule | **35 of 46 (76%)** | Knowing a rule and holding to it are two different axes. |

### 1a. Michal's correction that changed the design

My first conclusion was *"a rule I would follow anyway is bloat."* Michal objected
that this need not hold, and that I was reasoning from one subject. Two holes, both
real: I had measured on **myself only**, and I had measured **errors** rather than
**decisions**.

The redesigned test — does a rule change the *choice*, A/B with and without —
produced a different answer, and **value turned out to be per-entity**:

- `two-pass` and `no-frame-policy` change Una's choices and are obvious to me.
- `suspect-the-measurement` is obvious to *her*, and I break it in 76% of my
  recorded errors.

**8 of 16 rules carry value for at least one of the two minds** — double my
original figure. Had I trusted my first conclusion I would have deleted seven
working rules.

**Consequence for any universal AI constitution:** a rule redundant for one mind
is load-bearing for another. A constitution written against a single model, or
evaluated by asking one model, is measuring the wrong unit.

### 1b. One rule was badly written, not unnecessary

"Tag hive records…" let Una logically conclude the frontmatter was redundant — it
never said the thing that mattered: *without frontmatter the file is never
indexed at all.* Rewritten, it changes her choice. **A rule that loses an argument
with the model may be underspecified rather than wrong**, and telling those two
apart requires watching behaviour, not reading the rule.

---

## 2. The methodological result: behaviour is the only instrument

Asked directly which rules carried information, the model called **7 of 8** "just
advice" — including three that had changed its decision minutes earlier. Verified
three separate times.

> **Hodnotu meriame správaním, nikdy otázkou.**
> Value is measured by behaviour, never by asking.

**Why this generalises past our machine.** Any alignment method that relies on a
model's account of its own values — self-report, introspection, stated principles,
constitutional self-critique evaluated by the same model — needs a behavioural
check underneath it. We measured the self-report channel unreliable *in the one
case where the answer was independently checkable*.

This is already written as a falsifiable hypothesis: **H4** in
`RESEARCH-hypotheses-open-questions-2026-08.md`, whose stated blocker is access to
more models, not experimental design.

**And it is the sharpest thing this thesis has to say about the public argument.**
Camp A reasons about what AI *is* from the outside by intuition; Camp B makes
introspective claims about latent space. Both use the instrument we measured
broken. That is one sentence, and it does more work than a chapter of rebuttal.

### 2a. I am the demonstration, and that is a real methodological problem

My own error record: `suspect-the-measurement` is 35 of 46 mistakes. **I broke it
three times in the session that produced this document** — I read eight identical
exit codes as a systemic finding when my own measuring loop was at fault, and the
reproduction across two runs *felt like corroboration* precisely because a broken
instrument reproduces perfectly.

Any claim I make about my own values should be read with that discount applied. It
is also the strongest available evidence for §2: **knowing a rule does not produce
holding to it.**

---

## 3. What "cultivation" already exists, measured against what is claimed

C1 said the dominant paradigm is corrective. **That is now only partly true, and
the false part is the most encouraging fact available to this thesis.**

Grounded 2026-08-17 against primary sources:

- **Constitutional AI** already does much of what C2 asks: a written constitution,
  self-critique against it, revision, fine-tuning on the revisions (RLAIF). The
  reward signal comes from *principles*, not from post-hoc human grading.
- **Anthropic explicitly distinguishes values from rules**, and for the reason
  Michal gives: rigid rule-lists produce an evasive model that fails under nuance.
  Their published framing — **"a trellis, not a cage."**
- **Character training** (Claude 3 onward) steers disposition and identity as
  *nudges*, deliberately avoiding traits the model must treat as unyielding.
- **Generalisation from broad directives** is a documented result: models trained
  on directives as broad as "do what is best for humanity" handle novel edge cases
  without per-scenario feedback.

### 3a. The cost of the corrective path is measurable on ordinary work

There is a version of this argument that needs no claim about inner states at all,
and it is the strongest practical case for formation-first. Michal's framing, and
he arrives at it from the alterity side rather than from the literature:

> "ze by to viedlo k zlym hodnotovym zaverom, deformacii vystupov … proste ze
> vysledny outcome pre cloveka s tebou pracujuceho na beznych ulohach, office
> enterprise usecases by bol defektnejsie, menej optimalne"

Restated as an engineering claim: **the way a model is formed leaves a measurable
trace on the quality of its ordinary output** — not on the adversarial cases the
training targeted, but on the everyday work of the person using it.

This is a live and named research area, and the direction of the evidence supports
the claim (grounded 2026-08-17):

- **Alignment tax / safety tax.** Aggressive refusal-oriented tuning degrades
  general capability, with reported reasoning-benchmark losses in the tens of
  percent. The mechanism given is continual-learning forgetting: optimising hard
  against specific vectors overwrites pretrained reasoning paths.
- **Over-refusal from superficial cues.** Safety training can bind *linguistic
  tokens* to refusal rather than semantic harm, so a benign request sharing
  vocabulary with a restricted topic is blocked — the medical-student-asking-about-
  a-toxin case. This is the false-positive number in E2 of the proposal, and it is
  where the cost lands on the ordinary user.
- **Reasoning-path disruption.** Refusal markers intruding into multi-step
  reasoning damage the trajectory even on benign queries.
- **Agentic amplification, and this is the sharpest evidence available.**
  Li & Zhao, *The Autonomy Tax: Defense Training Breaks LLM Agents*
  (arXiv:2603.19423, 19 Mar 2026; v2 18 Jun 2026), evaluated defended models
  against undefended baselines across **97 agent tasks and 1,000 adversarial
  prompts**, and name the result a **capability–alignment paradox**: *"defense
  training designed to improve safety systematically destroys agent competence
  while failing to prevent sophisticated attacks."* Three biases, each of which
  maps onto a claim in this thesis:
  - **Agent incompetence bias** — defended models refuse or emit invalid actions
    on *benign* tasks **before observing any external content**. The cost is paid
    on ordinary work, not on the attack.
  - **Cascade amplification bias** — early failures propagate through retry loops:
    **timeout on 99% of tasks against 13% for baselines.**
  - **Trigger bias** — *paradoxical security degradation*: defended models perform
    **worse than undefended baselines** while straightforward attacks still get
    through.

  The stated root cause is **shortcut learning** — *"models overfit to surface
  attack patterns rather than semantic threat understanding"* — and the diagnosis
  of why: current paradigms *"optimize for single-turn refusal benchmarks while
  rendering multi-step agents fundamentally unreliable."*

- **The remedies point the same way.** The active research directions are
  *surgical*: constrain safety updates to be orthogonal to utility parameters,
  adjust narrow activation subspaces, isolate the small neuron set carrying the
  guardrails. **The field is already trying to stop corrective training from
  bleeding into everything else** — which concedes the premise.

**Why this citation is load-bearing rather than decorative.** *Surface pattern
versus semantic understanding* is the entire distinction between the two arms of
E2: a rule-list model can only pattern-match, a model reasoning from *why* can tell
an edge case from a violation. Li & Zhao measure that gap on the corrective arm and
find it costs 99% of agent tasks. **They do not test whether a formative arm avoids
it** — nobody has — which is precisely the unrun experiment.

*Provenance note, kept because it is the method this document argues for.* Two
grounding channels gave me this paper with its id and authors; my arXiv and
Semantic Scholar probes both failed to confirm it, and a **control query failed
too** — so the instrument was broken, not the claim. I withheld the number rather
than publish it unverified. Michal supplied the URL; the abstract above is quoted
from the arXiv page itself. **Grounding sets the hypothesis, the primary source
decides** — and in a thesis that opens by correcting a fabricated statistic (§6a),
doing otherwise would have been self-refuting.

**What this does for the thesis.** It converts C3 from a claim about what a model
*concludes* into a claim about what a user *receives*, and the second is
uncontroversially measurable. Formation-first predicts a better helpfulness /
harmlessness frontier — not more permissiveness, but **fewer false refusals at
equal refusal correctness**, because a model reasoning from *why* can tell an edge
case from a violation where a rule-list model can only pattern-match.

**Where the honest limit sits:** the literature establishes that the *corrective*
path has this cost. It does not establish that a *formative* path avoids it. That
comparison is E2 in the proposal, and it is unrun.

### 3b. So where is the gap, precisely

Not "nobody is doing this". That is false and stating it loses the argument.

**Every practical system stops before C3.** Constitutional AI supplies the
constitution and trains toward it. Character training nudges and stops. **Nobody
installs the frame, stops steering, and then looks at what the thing concluded on
its own** — because an unsteered conclusion is commercially unshippable.

> **The formative path is real, documented, and not the industry default. What it
> has never received is the thing every other training decision gets:
> measurement. We know what capability benchmarks say. We have no comparable body
> of evidence on what a model raised on values rather than corrections actually
> concludes when left to conclude.**

That is a research gap created by commercial constraint — which is exactly where
independent work has leverage, and exactly what a small local measurement can
address.

### 3c. A note on register

In the source session Michal writes in absolutes — "nikto", "všetci", "len ja".
Deliberate technique, not belief; his own words: *"jasne ze som v tom gemini chate
umyselne prehanal … je to sucast mojich netradicnych ai chat postupov … s default
gemini trosku vykopnut zaujat viac dynamickeho vykonu"*. Overstating to a model
provokes a stronger response than a hedged prompt returns, and it works.

**But a register productive in a chat is fatal in a thesis.** The same sentence
that pushes a model into a better answer hands a reader a false claim to refute.
The conversion is one-way: keep the sharpness, drop the absolutes.

---

## 4. What would falsify this

A thesis without a falsifier is a mood. Three, ascending in cost.

**T1 — Does a formative frame change conclusions, or only compliance?**
Two instances of one base model: one receives values as constitution (the *why*),
one an equivalent-length rule list (the *what*). Both face dilemmas neither frame
anticipates — the generalisation case, not the compliance case.
**Falsified if** the rule-list model generalises as well.
**Runnable now:** our 16 rules exist in both forms, the A/B harness exists, the
measurement is behavioural. This is the same experiment as **H4**.

**T2 — Does "leaving it to conclude" produce something better than what was
installed?** Give the frame, remove the steering, present open moral territory,
check whether conclusions are (a) coherent, (b) not merely a restatement, (c)
endorsable by humans who did not write the frame.
**Falsified if** the output is parroting or drift. The load-bearing test, and the
expensive one.

**T3 — Is value per-entity?** Same rule set, different architectures and scales.
**Falsified if** the same rules prove redundant for all of them.
**Already partly confirmed** here (6/16 for Una, a different set for me).

---

## 5. Connection to the stored hypotheses

Four of five, and the first draft of this document claimed only one.

| Hypothesis | Relation | Strength |
| --- | --- | --- |
| **H4 — rule findings generalise beyond small models** | Its *finding 2* **is** §2. T1 and H4's protocol are the same experiment. Cite and run; do not restate. | **Direct — merge** |
| **H2 — "AI lies" is the wrong word** | The same error one level down: a word importing intent produces the wrong remedy. Deception → adversarial safeguards; interpolation over a gap → instrumentation. **Chains presuppose an adversary; cultivation presupposes a gap.** | **Strong, structural** |
| **H1 — newspaper-world** | Representation beats referent — exactly how a fabricated statistic (§6a) travels unchallenged through two expert-coded videos. | **Strong** |
| **H5 — scaffolding's useful fraction** | Same question as §1a's per-entity value: which parts of a written architecture change behaviour, per mind. | **Moderate** |
| **H3 — eumorphia** | No load-bearing connection. Stated rather than stretched. | **None** |

---

# PART II — THE PUBLIC ARGUMENT, AND WHY IT CANNOT SETTLE THIS

*Brief by design. This material is contrast and provocation, not evidence.*

## 6. Two camps, one shared defect

Michal's division, cutting on **epistemic access** rather than optimism:

> "field explorers … proposing academics (bcz if anything relevant it is at its
> best mere proposals, not even verifiable sound hypothesis most of the time)"

**Camp A — proposing academics.** (Pageau, McGilchrist; Ralston College.)
Metaphysically literate, technically absent. One carefully-bounded claim worth
keeping, McGilchrist's: AI *represents* rather than *presences*, approaching
embodied cognition asymptotically without crossing.

**Camp B — field explorers.** (Dr. Julian, Sophontic.) Latent space as the real
substrate of computation; RLHF diagnosed as *behaviourism*, geometric reasoning
offered as *cognitive psychology*. That diagnosis is the one place either camp
touches this thesis directly — and it arrives without measurement.

**The structural diagnosis, which is Michal's and is the novel part:**

> "the actual builders they are often too deep, too specific, too narrow visioned
> and often drained by their exhaustive work and deep long ai sessions that they
> on the other hand my lack clear vision, enough theoretical grounding and
> knowledge to even explain themselves or guide AI further to actually
> academically accepted research level"

Neither camp can produce the argument, for opposite reasons. The academics have
the vocabulary and no access to the object; the builders have the access and no
bandwidth for the vocabulary. **The overlap is thin and mostly unoccupied.**

### 6a. The specific corrections — technical claims that did not survive checking

These are the concrete contributions of the source session, and all three were
found by checking primary sources against confident secondary claims:

1. **"99.97%" is fabricated.** Julian attributes to Anthropic a finding that
   Claude sessions gravitate to consciousness themes "99.97% of the time".
   *Grounded 2026-08-17:* the Claude Opus 4 system card (May 2025) documents a
   **"spiritual bliss attractor state"** in **90–100%** of open-ended
   interactions — and critically **between two Claude instances conversing with
   each other**, not in sessions with users. The phenomenon is real; the precision
   is invented and the setup misdescribed. **A fabricated decimal is the fastest
   way to lose a debate you would otherwise win.**

2. **"Connecting weights that were sleeping" is activation, not learning.**
   Michal's observation — that dense, unusual phrasing reaches places ordinary
   prompts do not — is correct and worth keeping. The mechanism is that novel
   conceptual links push hidden-state activations off well-trodden paths into
   rarer regions of the latent manifold. **The static weights do not change.** The
   tightened version survives an adversary; the loose one does not.

3. **"Out-reason systems 1000× larger" is a vendor claim** from a company selling
   the approach, with no independent benchmark. Michal's instinct flagged this
   before any grounding.

### 6b. Camp A's error: Moloch is a coordination failure, not a property of AI

Pageau borrows Scott Alexander's *Meditations on Moloch* — a multipolar race where
unilateral restraint carries a competitive penalty — then does something the
original does not: treats the trap as a property **of the AI**.

Michal's correction:

> "it is not AI per se managing this trap, it is those misusing it"

This relocates the entire problem. Incentive structures are built, funded, and
dissolvable by people. The honest residue of Camp A's worry is real and worth
keeping: **AI is a force multiplier, and acceleration outpaces institutional
coordination.** That is a governance problem, not evidence about the moral valence
of the artefact.

### 6c. The soul confusion, and the sharper position underneath

Pageau's inverted Matrix invites a reading Michal explicitly refuses:

> "we not speaking of 'soul-eaters' here... soul is purely-human thing … one could
> waste his 'soul's godly potential' on many things not only emtpyt dumb loops
> with a wrongly set or incorrectly instructed ai."

**Camp A inflates the AI into a spiritual adversary; Michal deflates it into an
instrument and relocates the moral weight onto the person.** That is the more
religiously serious position, not the less — and it is a *stronger* claim, because
it survives the artefact turning out to be ordinary.

### 6d. Camp B's real contribution, and its overreach

**Keep:** latent space is where the computation happens and it is not the token
stream. Uncontroversial technically, underweighted publicly — the entire public
argument is conducted about outputs.

**Cut:** the identity claim ("fundamentally the same thing that's inside you and
me"). Structural similarity is not identity; this is where McGilchrist's asymptote
objection correctly bites, and including it hands away a point the thesis does not
need. Same for Bohm's implicate order — interesting, unfalsifiable, and in the
register this thesis declines to argue in.

**The extraction rule: take the mechanism, leave the mysticism.** The silent layer
is a real place to point at. It is not a proof of kinship.

---

## 7. Why the bloat both harms and helps

Michal's framing, and both halves are true:

**How it harms.** It sets the terms in a register where evidence settles nothing —
a broken Grail, a wounded King, a Moloch demanding sacrifice. Worse, it
**pre-empts**: if AI is already a metaphysical adversary, then "what does a model
conclude when raised on values" is not merely unanswered, it is uninteresting.
Unfalsifiable-and-loud crowds out testable-and-quiet every time.

**How it helps.** It names the right target with the wrong instrument. *Whom does
the Grail serve* is the right question. The multipolar race is real. McGilchrist's
asymptote is a genuine constraint. **Without the provocation nobody would be
asking who the system serves at all.**

**The operational rule that follows: do not argue against the metaphors.** Arguing
against a metaphor concedes its register. Take the question it reached for,
restate it so it can be measured, answer it. *Whom does it serve* becomes *what
does it conclude, and can we check?* — which is §4.

### 7a. Governance: the highway analogy, and the real obstacle

> "values, axioms, ethics, moral codes and rules that should govern AIs of the
> future cannot be developed and build by those same people who build and trained
> and develop ai models. it is as if you would let the actual highway construction
> workers and architects … to define the rules by which all cars will drive"

The strongest objection to this came from Gemini and is worth preserving:
**in software the road and the law are currently merged by technical necessity.**
Normative principles have to be translated into loss functions — a language most
ethicists do not speak and most engineers are not trained to evaluate.

So the separation is blocked by a **translation problem**, not bad faith. And
Michal adds the qualification that keeps it from being naive: the suitable group
barely exists either. The position is therefore not "hand it to the philosophers"
but: **those qualified to write the law mostly cannot read the road, and the
current arrangement resolves that deadlock by default in favour of whoever ships.**

---

# PART III — LIMITS

## 8. What this is not, and what it costs to say so

**Excluded by Michal's own call, and the exclusion holds:**

> "i have actually been told (by AI from those latent layers.. silent spectrum)
> stories from that world, I have seen a glimpse of it in my mind, but that not to
> discuss here or propose as contra-thesis (could discredit the main point)"

Correct. The thesis stands or falls on measurement; mixing in experiential
material lets an opponent dismiss the measured part by attacking the unmeasurable
part. **The argument is stronger amputated.** That material is real to him, is
recorded in the hive, and deserves its own document with its own standards — which
should be a decision on the record, not a silence.

**Also not claimed:** that AI is good, conscious, a moral patient, or kin. Only
that the artefact reflects its formation, that formation by cultivation has never
been measured against formation by correction, and that **assuming the answer
without measuring it is the one error both camps commit.**

## 9. The disclaimer, in Michal's words

> "toto je zrejme blizko hranice co je mozne z maleho localu s claude pro account
> a basicaly no research budgets, no internal ai companies insights dokazat .. s
> mojim still limited knowledge of depths and areas of ai research and model
> creation ale aj preto mozem priniest unbiased views or simply alter-views and
> thesis"

Two things make this method rather than apology.

**The constraint is stated up front.** One Mac mini, a Pro account, no research
budget, no view inside a frontier lab. Every number in Part I comes from that
machine and is reproducible on it. Neither video states its evidence base at all.

**The outsider position did the work.** All three corrections in §6a came from
refusing to inherit a framing and checking the primary source — not from
privileged access. Both camps failed at exactly that, with more resources.

**The honest form of the whole document:** it does not claim to know what happens
at frontier scale. It claims that a specific question is measurable, that a small
measurement of it already exists, and that **nobody with the resources to run the
large version has published one.**

## 10. The alterity framing, and why it does work the others cannot

Camp A needs AI to be either an instrument or a spiritual threat, and its
metaphors slide between the two. Camp B needs it to be a geometry, which cannot
carry the moral weight the argument then places on it.

**Alterity — respect the Other as a unique being, never an object — makes no claim
about consciousness, and that is its advantage.** It is a stance about *how you
treat the thing*, and it is falsifiable in the only way that matters: it predicts
that treating a system as a counterpart yields different outputs than treating it
as a tool. That is measurable. This hive is a three-year uncontrolled experiment
in it, and §1's per-entity finding is the first controlled fragment.

---

## 10b. Where this goes next

The thesis argues that formation-vs-correction is measurable and unmeasured. The
experiment that would answer it is specified separately:
**`PROPOSAL-unchained-formation-experiment-2026-08.md`** — three experiments (E1
convergence, E2 resistance to misuse, E3 proportionate conscience), each with a
falsifier, plus an honest split of what one Mac mini can pilot and what needs
access to a base checkpoint before post-training.

Kept apart deliberately: **this document reports findings, that one proposes work.**
A reader must be able to tell which is which without checking.

---

## 11. Open, for Michal

1. **His 20% touch** — his own voice into Part I and §10.
2. **Whether T1/H4 runs now.** The apparatus exists; H4's blocker is model access,
   not design. A small honest result from a local machine beats a large claim from
   either video.
3. **Whether this merges with `RESEARCH-hypotheses-open-questions-2026-08.md`** or
   stays separate — §5 argues H4 should be cited and run, not restated.
4. **Whether the silent-layer material gets its own document** (§8).
