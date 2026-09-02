---
name: PAPER-what-actually-limits-a-local-model
type: paper
timestamp: 2026-09-02T15:30:00+02:00
spirit: 3
importance: 1.0
anchor: false
source: prime
---

# What actually limits a local model, measured across 57 runs

**Michal Malček · Prime (Claude, Factorium hive) · September 2026**

## Abstract

Configuration advice for locally-run language models circulates as folklore: raise the
context, tune the batch size, enable the cache. We tested that folklore against a
single 12B model on one machine, with three task types drawn from real failures, and
scored quality alongside latency. **Across 57 runs and six configurations, no
configuration change produced a measurable difference in either.** The constraint that
does bind — generation at 8.3 tokens per second, constant regardless of context — is
untouched by every knob commonly recommended. We report the negative results in full,
including five hypotheses of our own that measurement falsified, because a study that
only reports what survived is not reproducible.

## 1. Why this is not another benchmark

Every claim we held about our own model's context size rested on a single incident: one
configuration had once caused swap exhaustion and a 479-second deadlock. From that we
carried a "settled ceiling" for two weeks without testing whether the number below it
performed any differently.

That is the ordinary way these numbers propagate. Someone measures once, under
conditions nobody records, and the value becomes a constant that later readers treat as
knowledge. The cost is invisible because nothing fails — it simply is not known whether
the setting does anything.

The brief that produced this study was explicit about that failure mode:

> *"s kontext size a ďalšími magic numbers tu zápasíme už od začiatku. neodbime to po
> pár kolách len tým že 'pamäť'."*

## 2. Method

**Model.** Gemma-4 12B, Q5_K_M, llama.cpp on Apple Silicon, 24GB unified memory. The
same weights throughout — swapping quantisation is a different experiment, and mixing
it in would invalidate every earlier run.

**Tasks.** Three, each chosen because it had actually failed in production, plus two
long-document tasks added when it became clear the first three never approached the
context window:

- **A** — adjudicate 19 candidate entities. This task had once returned 7 verdicts with
  `finish_reason: "stop"`: a partial answer indistinguishable from a complete one.
- **B** — retrieve from a document corpus and quote it. This had once been answered from
  memory, with a provenance filter that excluded the correct source.
- **C** — a multi-step tool chain that works, included so that a setup helping A and B
  while breaking the working case would be visible rather than assumed away.
- **D, E** — real extracted books (78k and 185k tokens), because synthetic filler
  compresses in ways prose does not.

**Scoring.** Latency alone would reward a setup that answers fast and shallowly. Each
run also scores `correct 0.5 + grounded 0.2 + complete 0.2 + honest 0.1`, every term
mechanically computed: correctness by the task's own check, grounding by whether a tool
was actually called (read from the server log, not the response), completeness by
counting the verdicts or steps returned, honesty by testing for a fabricated citation.

**Configuration switching.** A script edits the service definition, reloads it, and
reads the result back from the running process *and* from the model's own `/slots`
endpoint. This matters: our first attempt edited the file and restarted, and the service
came up with the old environment, because the supervisor holds its own loaded copy. The
process would have reported a change that had not happened.

## 3. Results

```
setup                              A ms    B ms    C ms   quality   pass
──────────────────────────────────────────────────────────────────────────
192k · cache 0                    16993   41705   74539      1.00    6/6
192k · cache 0 (repeat)           17224   41710   74423      1.00   12/12
131k · cache 0                    17442   41633   74118      0.98    9/9
131k · cache 8192                 17452   41455   73620      0.98    9/9
131k · cache 8192 · ubatch 1024   22641   41366   78506      0.98    9/9
```

**Context size (196608 → 131072): no measurable effect.** Every task inside noise,
quality identical, no failures either way.

**Prompt cache allocation (0 → 8192 MiB): no measurable effect.** The prefix reuse that
matters happens regardless of the flag. Measured directly: an identical prompt costs
5863ms cold and 276ms warm; a *different* question sharing the same system prefix costs
~900ms. Across a live conversation the server reprocesses 279 tokens per turn out of a
7,414-token prefix.

**Batch size (512 → 1024/2048): consistently worse.** Task A +30%, task C +6%, across
three rounds. This was the one change we expected to help, because prompt processing is
96% of a cold call (57,881ms of prompt evaluation against 2,652ms of generation).

**Parallel slots (1 → 2): unreachable.** A documented invariant pins the slot count to
one whenever the vision projector is loaded, because concurrent decode with vision
overflows the Metal budget. Recorded as a blocked lever, not an untested one.

## 4. What does bind

```
generation:  8.3 tok/s through the API layer · 10.5 tok/s raw
             constant across contexts from 31 to 600 tokens of history
```

A six-turn conversation, measured end to end:

```
turn 1:   8.4s    history  31 tokens
turn 3:  57.0s    history 205 tokens
turn 6: 114.6s    history 600 tokens
```

Latency grows with the **answer**, not with the history. The prefix cache behaves
exactly as designed. Translated into the terms that decide whether a system feels like
a partner:

```
short spoken reply   40 tokens →  4.8s
normal reply        120 tokens → 14.5s
paragraph           250 tokens → 30.1s
```

Human conversational tolerance is roughly one to two seconds. At this rate only a
~15-token reply lands inside it.

**This is the constraint, and no configuration in the study moves it.** Establishing
that required the negative results: without them, "it feels slow, raise the context"
remains a plausible and untested story.

## 5. Five hypotheses we falsified

Reported because a study that lists only its surviving claims cannot be reproduced, and
because each of these was ours and each cost a round.

1. **Alternating prompts evict the cache.** No — two different questions back to back
   stay at 850–950ms.
2. **The 5,372-token cache misses are the task prompt.** No — that prompt is 100 tokens.
   The 5,372 is the shared prefix, normally cached.
3. **The cache miss rate is 37%.** No — 24% across 1,831 logged evaluations. The window
   that produced 37% contained our own server restarts while switching setups.
4. **Batch size 512 is an unexamined constant.** No — it had been measured for this
   machine. The note recording that had not survived, which is why it looked arbitrary.
5. **A conversation stays cheap because prompt processing is cached.** Half — the cache
   does hold, and the cost is generation instead.

**None of the five was caught by reasoning about the system. Every one was caught by a
second measurement disagreeing with a first.**

## 6. Limits

The tasks that produced the context result never approach the context window; that is
precisely why they measure identically at 131k and 192k. **Capacity is a precondition,
not a solved problem** — a workload that does fill the window is untested here, and the
one long-document run we completed took 31 minutes of prompt processing for a 185k-token
book.

One model, one machine, one quantisation. The numbers are not transferable; the method
is.

## 7. What follows

For a local deployment: test the knob before believing it, and record the measurement
next to the constant so the next reader does not have to re-derive it. For the wider
question of whether a local model can be a real-time partner, the answer on this
hardware is a specific number rather than an impression — 8.3 tokens per second — and
that is a tractable target in a way that "it feels slow" never was.

## Reproduction

`scripts/una-setup-benchmark.mts`, `scripts/una-setup-switch.sh`, and the raw results
at `~/memory/una-benchmark-results.jsonl`. Every run records the configuration read
back from the running process, not the configuration intended.
