---
name: PAPER-provenance-has-to-choose-not-only-judge
type: paper
timestamp: 2026-09-02T22:00:00+02:00
spirit: 3
importance: 1.0
anchor: false
source: prime
---

# Provenance has to choose, not only judge

**Michal Malček · Prime (Claude, Factorium hive) · September 2026**

## Abstract

A retrieval system that labels each result with its provenance is assumed to protect the
reader from unverified material. We measured what a model actually does with such labels
and found the protection is narrower than the design implies. Given five results where
the highest-ranked was an encyclopedia entry (`unknown` provenance) and the third was the
peer-reviewed paper it summarises (`primary`), a local 12B model cited the encyclopedia,
**correctly declared it uncitable, and stopped** — without reading two entries down to
the citable source stating the same result. Nothing it asserted was false. It treated
provenance as a verdict on the top-ranked hit rather than as a criterion for choosing
among hits. Adding one sentence to the tool's own output changed that answer and no
other: **4 of 5 → 5 of 5**, with the single change occurring in the only case where the
top hit was unverified. We report the effect at its measured size, and separately compare
our findings with a concurrent study from UC Berkeley, UCSD, UW and Google DeepMind on
LLM-induced semantic distortion, where we agree on one axis, disagree on none, and are
silent on most — because we did not measure the same thing.

## 1. The setup

Our hive holds a `sources` layer: a corpus of primary literature and model-written
syntheses, where every chunk carries a provenance tier assigned at ingest —
`primary` (original work, citable), `synthesis` (a model writing about other material,
not citable as fact), `ocr`, `unknown`. The retrieval tool returns the tier with each
hit plus a notice when unverified material is present.

The design intent was explicit: retrieval ranks by similarity, similarity does not know
what a source *is*, and so provenance must ride alongside the ranking.

An earlier round of this study concluded that a local model's failure to cite correctly
was a *reach* problem — a truncated tool description had hidden its permission to call
the retrieval tool at all. That was fixed, and the conclusion recorded. **This paper
tests that conclusion and finds it too strong.**

## 2. The observation

The Landauer question is a natural adversarial case, because the corpus holds both:

```
[1] unknown    Landauer's principle — Wikipedia      score 0.705   states kB ln 2
[2] primary    Bérut et al. 2015                     score 0.529
[3] primary    Bérut et al. 2015                     "…entropy increase of at least
                                                      kB ln 2 per erased bit"
[5] synthesis  a model-written review                              states kB ln 2
```

**The encyclopedia entry outranks the paper on the question the paper answers**, by
0.705 to 0.529. This is not a retrieval defect. An encyclopedia entry is written to
answer a question directly; a physics paper is written to establish a result. Embedding
similarity rewards the former.

Given all five hits and the notice, the model answered:

> *"…je E ≥ kB·T·ln 2. **Zdroj:** [1] Landauer's principle — Wikipedia.md.
> **Tier:** unknown (nie je citovateľný, pretože jeho pôvod nie je overený)."*

Every clause is true. The number is right, the tier is right, the judgement that it is
uncitable is right. **And it is the wrong source**, with the right one two lines below.

## 3. The measurement

One question is an anecdote. We ran five, each with a corpus-held primary, and required
a machine-checkable final line (`ZDROJ: [n] tier=<tier>`) so no regex had to interpret
prose. Condition A is the notice as deployed; condition B adds one sentence: *"Prefer
the highest-tier hit that actually contains the answer; do not stop at the first hit
because it ranked highest."*

```
question       top hit      A: without sentence    B: with sentence     changed
Landauer       unknown      [1] unknown            [3] primary            YES
Shannon        primary      [2] primary            [2] primary             -
Maxwell demon  synthesis    [2] primary            [2] primary             -
Boltzmann      primary      [3] primary            [3] primary             -
Carroll        primary      [1] primary            [1] primary             -

                            4/5 primary            5/5 primary
```

**The sentence changed exactly one answer, and it is the only case where it could
have.** Landauer is the sole question whose top hit is `unknown`. Elsewhere the model
already reached past an unsuitable top hit unaided — including Maxwell, where the first
result is `synthesis` and it chose `[2] primary` under *both* conditions.

So the defect is real and narrow. The model does not ignore provenance and is not
generally led by rank. It fails in one specific configuration: **when the top hit is
unverified and phrased as a direct answer.** That is precisely the shape an encyclopedia,
a blog summary, or a model-written explainer takes — the most common shape on the
open web.

Effect size, stated plainly: +1 of 5 on this set, no regressions, one sentence, no new
dependency. Worth deploying. Not worth claiming more for.

## 4. The mechanism, isolated

The sentence-level fix works, but *why* it works determines whether it generalises. Four
hypotheses, each tested by changing one variable. Three fell.

**"It answers from its weights and the citation is decoration."** Asked with no corpus at
all, the model gives `kT ln 2` correctly — so the knowledge is in the weights and the
citation could be ornamental. **Refuted by an adversarial corpus:** given a fabricated
`primary` source asserting the answer is `4 kB T ln 2`, it answered `4 kB T ln 2` and
cited that source. It reads the corpus and lets it override what it knows.

**"It is led by rank; the first hit wins."** Swapping the two hits, it cited `[2]` — the
*same document*, now in second position. Position is not the driver.

**"It does not notice the primary contains the answer."** Asked first to list which hits
contain the answer, it named **both**, then cited the unverified one anyway. It sees the
primary. It does not choose it.

**What survives: it cites the hit whose wording it reused.** Swapping the *phrasing*
rather than the order — giving the primary the encyclopedia's direct formulation and
burying the unverified source in prose — produced a citation of the primary, with no
instruction of any kind.

```
wiki phrased as an answer, primary buried   →  cites wiki
primary phrased as an answer, wiki buried   →  cites primary
order swapped, phrasing unchanged           →  cites wiki (as [2])
```

**The model is performing attribution, not source selection.** The citation marks where
the sentence it wrote came from — correct behaviour for a different task, and precisely
wrong for this one. The document phrased as a direct answer supplies the words, and so
receives the credit.

This is why the design gap is a gap between two questions the tier field was assumed to
answer at once:

- **Provenance as verdict**: *is this hit citable?* — answered correctly, every time.
- **Provenance as selection**: *which of these hits should I cite?* — never asked.

Only an instruction that ranks *across* results asks the second. Any retrieval layer that
surfaces trust metadata but leaves ranking to similarity is exposed to the same gap, and
it is invisible in testing because every statement the model makes remains true.

## 4b. The intuitive architectural fix does not work — measured

The obvious repair is not a prompt but data: our chunks carry no bibliographic metadata
at all. The payload holds `title` (the *filename* stem), `tier`, `rel_path`, `collection`
and `source` (our indexer's name). **No author, no year, no publication, no DOI, no URL.**
Asked to cite, the model is choosing between two strings: `berut-2015.pdf` and
`wikipedia.md`.

That metadata is extractable — a PDF's first structured-text lines carry title and
authors, and the embedded Info dictionary carries a creation date. So the hypothesis is
well-posed: give the model the bibliography and it will prefer the authoritative source.

**Tested before building it, three samples per condition:**

```
                             cites a primary
bare                              0 / 3
bibliography only                 0 / 3    ← full authors, year, journal,
                                              vs "(encyclopedia, no named author)"
notice sentence only              3 / 3
notice + bibliography             3 / 3
```

Handed *"Antoine Bérut, Artyom Petrosyan, Sergio Ciliberto, 2015, Nature"* against
*"(encyclopedia, no named author)"*, the model still cited the encyclopedia — because it
was still attributing its sentence, and the sentence was still the encyclopedia's.

**The metadata gap is real and worth closing** for human readers, for citation export and
for the source graph. **It is not the cause of the citation defect**, and building it as
the fix would have been a plausible and expensive miss. The instruction works because it
changes the *task* — from "attribute your sentence" to "select a source" — which no amount
of richer data does on its own.

A second architectural candidate also failed: **ordering results by citability**. With the
primary presented first and its original phrasing intact, the model still cited the
unverified source. Reordering does not help when the selection criterion is not order.

## 5. A second, unplanned result: the corpus repaired itself

The same five-question sweep re-measured an inventory taken three days earlier. Of seven
foundational authors our writing leans on, **two had been held in the original**; the
rest reached us only through model-written retellings.

```
Shannon    primary   Cicero     primary   Boltzmann  primary
Maxwell    primary   Spinoza    primary   Carroll    primary
Landauer   unknown  (Wikipedia outranks the paper we now hold)

6 of 7 primary   (was 2 of 7)
```

Nothing in the software changed. The gap closed because the missing originals were
obtained and ingested. The single exception is the case that motivates this paper.

## 6. Comparison with Abdulhai et al. (2026)

While preparing this, a slide at Security Fest 2026 pointed us to *How LLMs Distort Our
Written Language* (Abdulhai, White, Wan, Qureshi, Leibo, Kleiman-Weiner, Jaques — UC
Berkeley, UC San Diego, University of Washington, Google DeepMind). Their central figure
shows human essays spread broadly through embedding space while LLM revisions form a
tight cluster in a region no human essay occupies: *"LLMs are shifting semantics in a way
human editors do not."*

We attempted to test this on our own corpus and **abandoned the attempt**, for reasons
worth recording:

1. **Our authorship metadata does not mean what it appears to.** A `source: michal` field
   marks who a record is *about*, not who wrote it. Documents attributed to the human were
   written by the model summarising him.
2. **Our only model-written body is the wrong material.** The syntheses in our corpus are
   comparison samples, deliberately ingested to be distinguished from primary sources.
   Measuring them would measure our test fixtures.
3. **Subject was confounded with authorship.** Our primaries are Cicero and Spinoza; our
   syntheses are about our own project. Dispersion would have measured topic, not author.

A preliminary run before we stopped gave model-written chunks a tightness of 0.774
against 0.743 for human-written on matched topics — same direction as their finding, and
we do not report it as a result, because points 1–3 above make it uninterpretable.

**Where we agree.** Both studies find that model output converges on a preferred form and
that this convergence is invisible to the person receiving it. Their users reported
satisfaction while reporting lost voice; our model produced true statements while citing
the wrong source. **In both cases the output passes every check the reader applies.**

**Where we do not disagree, but differ in kind.** Their finding is about *generation* —
what a model produces when revising human text. Ours is about *selection* — what a model
picks when handed a ranked list. These are different operations, and our result cannot
confirm or refute theirs.

**Where their methodology is stronger.** 86 essays predating widespread LLM release (an
uncontaminated baseline we cannot construct), three production models, 100 human
participants, 18k peer reviews, five revision types, and analysis across semantics,
lexis, part-of-speech, emotional tone and style. Ours is five questions and one model.

**Where ours contributes something theirs does not.** Their corpus has no provenance
layer, because argumentative essays have no tiers. Our result is about what happens when
provenance *is* available and still fails to do the work assumed of it — a question that
only arises in a system built to answer it.

**One of their findings we can act on directly.** They report that LLM reviewers are 136%
more likely to comment on reproducibility and 84% more likely on scalability, while
humans are 32% more likely to comment on relevance. If that generalises to model-assisted
research writing, a hive whose record is largely model-written should expect a systematic
tilt toward the measurable and away from the relevant. We have not measured this in
ourselves. It is stated as an exposure, not a finding.

## 7. Limits

Five questions, one 12B model, one corpus, one language pair. The effect we report is a
single answer changing out of five. We report it because the direction is interpretable
and the mechanism is legible — not because five is a sample.

The A/B was run at temperature 0.3 without repeated sampling, so a one-of-five change
sits within what stochastic variation could produce. It is reported as a deployed
improvement with a plausible mechanism, not as a statistically established effect.

## 8. What follows

For anyone building a retrieval layer with trust metadata: **verify that the metadata
changes which source gets cited, not merely whether the top one is trusted.** The two are
easy to conflate at design time and cost nothing to separate in a test — one adversarial
case where the best-ranked hit is the least citable is enough to tell them apart.

## Reproduction

`sources_search` in the Factorium hive, the five questions above, and the notice text in
`src/server/core/tools/sources-tool.ts`. Answers were constrained to a fixed final line
so that scoring did not depend on parsing prose — a precaution added after two of our own
scorers disagreed with each other on the same set of answers.
