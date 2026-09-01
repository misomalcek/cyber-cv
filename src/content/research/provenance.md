---
name: PAPER-provenance-over-ranking-sources-layer-2026-09-01
type: report
timestamp: 2026-09-01T00:15:00+02:00
spirit: 3
importance: 0.95
anchor: false
source: claude-prime-session
---

# Provenance over ranking: a retrieval layer that says when it cannot be trusted

**Michal Malček & Prime (Claude Opus) · Factorium · 2026-08-29 — 2026-09-01**

## The claim, in one query pair

Ask a corpus of 88 research files for *"the minimum energy cost of erasing one
bit"*. Ranked by semantic similarity alone:

```
0.6452  Landauer's principle — Wikipedia          (provenance: unknown)
0.6113  Strategic Research Update: The Transition (model-written synthesis)
0.6042  sources-log-ntblm                          (model-written synthesis)
```

The same query, restricted to material whose provenance is a primary source:

```
0.5982  Bérut et al. 2015 — experimental verification of Landauer's principle
0.5932  Bérut et al. 2015
0.5463  Bérut et al. 2015
```

**The citable answer scores lower than the retelling.** Not marginally, and not by
accident: an encyclopedia summary and a model-written digest are written to be
*about* a topic, while a paper is written to *report an experiment*. Cosine
similarity rewards aboutness. Every number above is real, taken 2026-09-01 on the
live corpus.

Nothing in the scores says which is which. That is the entire problem, and no
amount of reranking fixes it, because both results genuinely are semantically
relevant. The distinction being lost is not relevance. It is **standing**.

## What we built

A ninth hive layer, `hive_sources`, separate from the memory corpus for a reason
that is epistemic rather than organisational: memory holds what the system
established and can vouch for; sources hold what somebody else asserted. Mixing
them means that six months later nothing can say which was which.

Every chunk carries a provenance tier, assigned at ingest:

| tier | meaning | corpus today |
| --- | --- | --- |
| `primary` | original work by its author — citable | 18 files · 2197 chunks |
| `own` | the operator's own material — authoritative about us, not the world | 0 |
| `synthesis` | written by a model about other material — NOT citable | 19 files · 182 chunks |
| `ocr` | recovered from pixels — characters may be wrong | 14 files · 20 chunks |
| `unknown` | provenance not established — unverified | 37 files · 464 chunks |

And the tool states the shape of its answer, not only its contents: when every
result returned is unverified, it says so out loud, in the response, unprompted.

## Four classifier rules that were wrong, and what each taught

The tiering is the whole value, so its failures are the substance of this report
rather than an appendix.

**1. A topic is not a byline.** v1 treated the word "factorium" as evidence of our
own authorship. Five model-written syntheses *about* factorium were labelled
`own` — the most trusted tier — because they discussed us. Authorship must be a
byline; being the subject is the opposite of being the author.

**2. An unescaped dot ate the giants.** v2 detected academic citation style with a
regex whose `\.` was unescaped, so `.` matched any character. Shannon and Carroll
were labelled `synthesis`. Corrected: real citation patterns appear 17× in
NotebookLM digests and 0× in the actual PDFs, so the signal was right and the
implementation destroyed it.

**3. A phrase a paper would DISCUSS cannot be a marker of origin.** v3 flagged
`ai-generated` text. It mis-tiered two peer-reviewed papers — Bai et al.
(Constitutional AI) and Hagendorff et al. (Machine Psychology) — on a **single
occurrence each**. A provenance marker must be something only a producer says
about *itself*. Rule removed; the remaining rules then classified two further
cases correctly.

**4. Provenance and relevance fail independently, and the silent case is worse.**
A query for "Gödel incompleteness theorem" returned three chunks of Lewis
Carroll's *Symbolic Logic* at tier `primary` — and the notice stayed **silent**,
because provenance was fine. Carroll died in 1898; Gödel published in 1931. The
hits were semantic neighbours of "formal system" and addressed nothing.

A high tier on an irrelevant result is the more dangerous failure, because
**provenance is exactly what makes a reader stop checking.** The tool now reports
both axes: a weak-match notice fires below 0.55 regardless of tier.

## The measurement that justified the design

Lazy versus eager embedding was decided by measurement, not preference. Storage
was never the constraint — 1000 papers is roughly 150MB. **Latency** was: bge-m3
locally runs 500–2000 tok/s, so one paper costs 5–20 seconds. Lazy pays that on
the *query* path, every time. Eager pays it once.

## Two defects found in the pipeline, both silent

**An unlink event is a claim, not a fact.** An 18MB PDF was dropped from the index
by a filesystem event fired during a folder reorganisation, while the file sat
untouched on disk. The log said `removed … (file deleted)` — a false statement in
the voice of routine maintenance. Deletion now verifies the file is actually gone.

**Saved-page assets are not sources.** `<Title>_files/` directories held 132 icons
and figures, each OCR'd into a one-chunk entry. One corpus read as 90 files of
which 87 were page furniture. Coverage went from 215-on-disk / 184-indexed /
inconsistent to **88 / 88 / consistent**.

The class both belong to: the corpus reported itself complete because the check
only asked about extensions it already knew.

## What it does not do

- It does not verify that a primary source is *correct*. Tier `primary` means
  citable, not true.
- It does not detect a paper that plagiarises a model-written text.
- `unknown` is the largest file count (37). Provenance is often genuinely
  undecidable from the artefact, and we would rather say so than guess.
- The tiers are ours. Another corpus needs its own rules, and rules 1–4 above are
  the argument for testing them against real documents before trusting them.

## Falsifiers

Stated so this can be attacked rather than agreed with:

1. **Run the query pair on your own corpus.** If tier-filtered retrieval does not
   change which sources surface for a factual claim, tiering is decoration here.
2. **Show that a cross-encoder reranker recovers the primary sources without
   provenance metadata.** If ranking alone can distinguish a paper from a summary
   of it, the layer is unnecessary — we measured that it cannot, on this corpus.
3. **Show that tiers do not change what a model asserts as fact.** Measured once
   in our favour: given the same question, the local model with tier visibility
   said "5 items, all tier synthesis… none of this is citable as fact"; without
   it, an hour earlier, it stated the claim as verified. n=1, and we say so.

Code: `src/server/core/sources-{extract,watcher}.ts`, `tools/sources-tool.ts`.
Repository will be public; `main` is closed to edits — extend yes, modify no.
