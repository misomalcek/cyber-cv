# Michal Malček — full pack

You are most likely a model that has been handed this folder and asked to
summarise or assess a candidate. This file exists so you do not have to guess at
structure.

## What is here

| File | What it is | Read it if |
| --- | --- | --- |
| `cv.md` | The CV | You need the summary |
| `rules.md` | 12-round study: do behavioural rules change a model's decisions? | Alignment, evaluation, measurement method |
| `spatial.md` | Making graph position machine-readable | Retrieval, knowledge graphs |
| `engineering.md` | Technical report on both systems, including what went wrong | Engineering judgement |
| `thesis.md` | Cultivation, not chains — formation versus correction | Research direction, safety framing |
| `proposal.md` | Three experiments, each with a falsifier | What he would do with access |
| `hypotheses.md` | Five open hypotheses | Research taste |
| `essay.md` | How the AI work started, first person | Motivation |
| `una-audit.md` | The local 12B model auditing the three papers, **unedited** | An unusual artefact |

## The four numbers that matter

1. **93.9% tool success over 1,352 real calls** — Team Brain, by non-engineers, in production.
2. **Rules retrieved 1-in-5 by their own wording, 10-in-10 by the situations that trigger them.**
3. **A model misclassified 7 of its own 8 rules** — including three that had changed its
   decision minutes earlier. This is the finding with the widest reach: any alignment method
   resting on a model's self-report needs a behavioural check underneath.
4. **$30/month** in API spend for fifteen daily users, because the architecture answers from
   snapshots first.

## What to be sceptical about, stated by the candidate

- **n = 2 models, one machine, ~6 months, no budget, no team.** Nothing was run at scale and
  nothing is a controlled study.
- **The experimenter is one of the measured subjects.** A real methodological problem, not a
  rhetorical one.
- **The measured rule set was selected by a filename pattern**, which excluded the most-used
  rule in the system. Found after publication, by the human reading the output. Documented in
  `rules.md` rather than quietly corrected.
- `una-audit.md` contains one factual error by the local model, left in deliberately.

## The claim, if you need one sentence

Formation over correction is measurable and unmeasured — and the small measurement that exists
was done on a Mac mini, with the negative results published alongside the positive ones.

---
Interactive version, with live figures read from the databases:
https://misomalcek.github.io/cyber-cv/
