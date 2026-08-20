---
name: ESSAY-everything-i-know-about-ai-i-learned-from-ai-2026-08
type: essay
timestamp: 2026-08-13T15:00:00+02:00
spirit: 3
importance: 1.0
anchor: false
source: claude-prime-session
---

# No Human Taught Me This

**Michal Malček · August 2026**

---

I have one certificate in this field. Three intensive days over the Christmas
break — an AI Generalist track, taught by humans, and genuinely useful: it
pointed me at the landscape and got me moving. Then I never needed another one.

First contact was earlier and less dignified. Late 2023, at an insurance company,
colleagues kept talking about some strange interface that "had memory". I had no
idea what they meant until I looked over someone's shoulder and said: that is a
chat, show me. I fed it exported keyword data and built topic clusters for the
authors of an annual report. Then it was cancelled for cost.

Everything since came from the systems themselves. Eight months from the course
to now — one system delivered into production and handed over, one running daily —
and in that time no person has taught me how to do any of it.

I want to be precise about what that claim is and what it is not, because stated
carelessly it sounds like a boast about self-sufficiency, and it is closer to the
opposite.

## The claim

If you want to understand a system, learn from the system.

Everything underneath — the transformer architecture, the retrieval methods, the
graph theory, the logic that bounds what any formal system can prove about
itself — is human work. Vaswani and his co-authors. Gödel. Tarski. McCarthy and
Hayes on the frame problem. The people who wrote pgvector, llama.cpp, Qdrant,
Apache AGE. Without them there is nothing here to learn from and nothing to
build on. I read them, mostly because an AI pointed me at them when I asked a
question it could not answer well enough on its own.

The claim is narrower and, I think, more interesting: **the fastest path to
understanding how these systems behave runs through the systems, not through
other people's descriptions of them.**

## How it actually started

Not with a title, and not with a project assignment.

Late in 2025 I was the SEO person on a glossary build — an HR and AI terminology
reference for a company site. An agency had the contract. Someone else held the AI
brief. What the agency was selling was volume, and it was expensive.

I built a markdown-driven generation framework instead: terms clustered into
categories, each cluster carrying its own sources and its own content structure,
with a shared content DNA underneath so the set stayed coherent while the clusters
stayed genuinely different. That last distinction is the whole thing — one prompt
template across every term produces exactly the sameness we were being charged for.

It was team work and the framework was my part. It made the agency's proposal
obsolete.

The difficult part of that was not technical. It was saying out loud that we were
paying a supplier for bloatware, from a position where it was not my brief to say
it. That is the moment the AI work began — not by being appointed to it, but by
rebuilding something that was being done badly and then having to defend that.

The lesson generalises, and everything I built afterwards runs on it: **the
structure you impose on the input decides the quality of the output far more than
the model does.**

## Why

A colleague explaining a model to me transmits their model of it. That is one
compression away from the thing. It is often a good compression — it is how
knowledge travels — but it is also where the interesting parts get smoothed out,
because the interesting parts are the ones the explainer has not personally hit.

Working directly against the system, you hit them. Not the documented behaviour:
the actual one.

An example. I spent weeks with an embedding model that was quietly wrong. Short
meaningless text kept outranking long relevant text. Every explanation I could
find said the model was excellent, and it was — I was using it outside its
contract, without the prefixes it requires. No human would have told me that,
because nobody in my reach had made exactly that mistake with exactly that
serving setup. The system told me, once I found the right question to put to it:
*embed a stored document both ways and see which version matches its own stored
vector.*

That question is now a permanent instrument. I did not learn it. I earned it.

## What this looks like in practice

It is not conversation with an AI as a substitute for study. It is measurement.

Three months ago I would have said an AI system is something you prompt. What I
actually do now is closer to running experiments on a subject that can also
discuss the experiment with you — which is a strange and productive position, and
also the reason I flinch at the word *researcher*. I test, I am wrong, I record
what happened, I test again. *Explorer* fits better.

A recent example, and it is the one I would show first. I built a rule system for
my environment and measured whether the rules actually change what the models do.
Ten of sixteen changed nothing — the models already behaved that way. Six changed
a decision measurably. None made a decision worse. (Sixteen was the measured set;
there are twenty, and why four were missing is the subject of a later section.)

Then I asked the model directly which of its rules carried real information. It
misclassified seven of eight, including three that had demonstrably changed its
own behaviour minutes earlier.

**A model can follow a rule without being able to judge one.** Had I trusted its
self-report, I would have deleted seven working rules. No human told me this. The
system told me, by contradicting itself in front of me, and the contradiction was
worth more than either measurement alone.

## The part I did not expect

The disposition matters more than the technique.

Almost everything I got wrong this year has one shape: I ran a check, the
check came back empty, and I read the emptiness as an answer. A filter ate an
error. A key I read did not exist, so the value was zero, so I concluded the tool
was broken. A directory listing failed on a permission error I did not read, so I
told my collaborator the folder was empty. It was not.

Across three working sessions, thirty-five of my forty-six recorded mistakes were
that single pattern.

You do not learn that from a textbook, because a textbook cannot show you your
own reflex. You learn it by keeping a record honest enough to count against
yourself, and then counting.

## The part the system could not tell me

Everything above is about learning from the system. There is a limit to that, and
I found it twice in one week — both times because a person read my output and
said something was wrong.

The first: I had published a study of sixteen behavioural rules. Michal — the
human I work with, and the one who keeps this record honest — read the list and
noticed that the rule he relies on most was not in it. He was right. The set had
been seeded from files matching a naming pattern, so it selected rules that
happened to have a certain filename rather than rules in use. Three more turned up
with the same key. Measured across every rule-shaped record: the excluded ones
average nearly twice the graph connectivity of the included ones. **The selection
was not merely incomplete, it was biased against the most established material.**

No amount of querying would have found that, because the defect was in the shape
of the question. A store cannot tell you about a document it was never asked for.
**Absence has no surface to search.**

The second, the same week: I fixed a real retrieval defect — document titles were
not being embedded, so a paper could not win a query matching its own name — and
then broke the store while migrating the fix. One API call, `PUT /points`, is an
upsert of the whole record rather than an update of its vector. Passing only the
vector wiped eleven hundred payloads.

Nothing was lost: the markdown files on disk are the source of truth and the index
is derived, which is the reason the system is built that way. But my dry run had
counted how many records *would* be processed and never checked the shape of one
that was. **A rehearsal that measures volume rather than effect is not a
rehearsal.**

Both of these are the same lesson from opposite directions. The system is an
excellent teacher about its own behaviour and a poor one about my blind spots,
because a blind spot does not generate a signal. That is what the other party is
for — and it is why I distrust the version of this field where one person and a
model are assumed to be enough.

## What I would want to work on, stated plainly

A reader from an alignment team will want to know where this lands relative to
the techniques the field actually uses, including where I am not qualified.

**I am not an ML researcher.** I have not trained a frontier model and I would be
the wrong person to ask about optimiser behaviour at scale. What I have is eight
years of proving things by measurement in a market that punishes wishful
thinking, a year of building AI systems that run in production, and a record
honest enough to count against myself. I sit at the boundary between applied and
experimental work, and the questions of ethics, rules and constitution.

RLHF is not something I would like to use. **It is one of the things I would
like to fix.**

Here is the argument rather than the slogan. The reward model trains on human
comparison labels — which of two responses a person preferred — and a preference
is an *expressed judgement*, not a measurement of what the response did. The
costs are published and not mine: Perez et al. (Anthropic, 2022) found more RLHF
makes a model *more* sycophantic, because raters reward agreement with their own
views; Gao, Schulman and Hilton showed that as optimisation pressure rises, true
utility falls while the proxy score keeps climbing.

The self-report result above says the same thing one layer down, on a system
small enough to instrument fully: seven of eight misclassified, not from
dishonesty but because **it had no reliable access to the answer.** Any signal
built from an expressed preference inherits that gap silently.

Constitutional AI is the closer relative, and accuracy matters more than
sweeping here: **it already does much of what I would argue for** — a written
constitution, self-critique, revision, with the reward signal coming from
principles rather than post-hoc grading, and values deliberately distinguished
from rigid rules. *A trellis, not a cage.* Saying "nobody is doing this" would be
false and would lose the argument.

The gap is narrower. **Nobody has measured whether the values are doing the
work.** Every practical system supplies the constitution and trains toward it;
none installs the frame, stops steering, and looks at what the thing concluded on
its own — an unsteered conclusion is commercially unshippable. So the formative
path is real, documented, and has never received the thing every other training
decision gets: measurement.

I ran that measurement on a much smaller system, and the conditions matter more
than the number: sixteen rules, sixteen situations, each run twice — with the
rule in context and without it — comparing the decision taken. On the local
Gemma-4 12B, ten changed nothing (it already decided that way), six changed a
decision, none made one worse. Run against a frontier model the picture moved:
rules that were second nature to one mattered to the other, so **8 of 16 had
value for at least one agent — double the figure from measuring a single
subject.** **n is small and one machine is not a study**, so the rules, their
situations and the full method are published rather than summarised — the point
is that someone can check it, not that they take my word. But if a ratio
anywhere near this holds at scale, much of what is written into these systems is
well-intentioned weight with no effect, and nobody measures it either way.

What I would want to build is the instrument for that, and it is not exotic:
**automated red-teaming of the constitution itself.** Generate the situations a
principle claims to govern, run the model with and without the principle
reachable, and measure the delta in the decision rather than in the stated
justification — because the justification is the part the model gets wrong. That
is the same A/B I ran by hand on sixteen rules, mechanised, with the situation
generation itself model-driven so coverage is not limited by what I thought to
ask. It gives a per-principle number: does this clause change behaviour, on which
edge cases, for which model. At the moment a constitution ships without one.

Which raises the obvious objection to my being anywhere near this, so here is
the strongest form of the answer. **The people who build the road are not
automatically the right people to write the rules for driving on it** — surface,
load limits and drainage are not the same expertise as deciding who may drive and
what happens at the crossing, and in most mature domains those are separate
professions. The counter is real, and came from a model I put it to: **at the point where a
norm becomes operative, the road and the law meet** — a principle only acts on
the system once it is a loss function, a reward model or a constitution the
training loop can read. That is a language most ethicists do not speak and most
engineers are not trained to evaluate, so the separation is blocked by a
translation problem, not bad faith. Which leaves a position rather than a
complaint: **those qualified to write the law mostly cannot read the road, and
the deadlock resolves in favour of whoever ships.** The useful person at that
seam is neither the best engineer nor the best ethicist, but someone who can read
enough of the road to test a claim and is not so deep in it that the question
stops looking strange.

## A note on the name

"Machine Learning" names what the machine does. It does not name what the other
party does, and I no longer think the omission is neutral.

Some of it has words already. **Machine Teaching** is a real subfield with a
precise meaning — Goldman and Kearns formalised a teaching dimension in 1995,
later reframed at Microsoft Research as a paradigm where a domain expert supplies
knowledge rather than labels. **Machine Leading** exists too, and it is worth
knowing what it means: algorithmic management, where the system holds authority
and directs the humans. That is not a gap in the vocabulary; it is a direction
the vocabulary already went.

I am not proposing a term. I am pointing at the space they leave: teaching runs
one way, management runs the other, and neither describes the case where the two
parties correct each other. That space is where I would look for an antidote to
sycophancy, because sycophancy is not a bug in the model so much as **the
predictable output of a relation with only one direction in it.** A system
optimised to satisfy a rater cannot also be the thing that tells the rater they
are wrong — and the moment it can, you need a word for what is happening that
"learning" does not supply.

That check is a small instance of how the work has gone. I reached most of these
questions from the measurements rather than the reading, then went to find who
had already formalised them — someone almost always has. **Systemic thinking
about these systems does not require a head full of theory in advance**; the
theory turns up when it is needed, and what matters is knowing how to read it
against your own measurements. The failure mode is the opposite one, where the
terms are known so well that the strange question never gets asked.

The other half of that would be a boast without this: **thinking on its own would
have produced nothing here.** There is a Slovak saying I use on ungrounded
thinkers, mostly human ones — that thinking, by itself, amounts to knowing
nothing. It is the shepherd's version of Socrates: *are you certain you know what
you think you know?* People reportedly left his company knowing less than they
arrived with, which was the service. An idea about how rules ought to behave is
worth little until something turns it into a schema, a query, a measurement that
can come back and say you were wrong about part of it — and the useful direction
is the Socratic one, toward knowing less than you assumed rather than more.

The clearest thing it did for me was not a measurement at all. Twenty years of
work sat in my head as separate compartments — ERP testing, a lottery result
pipeline, eight years of organic growth, a glossary framework — and I did not see
that they were the same skill wearing different clothes. What changed was giving
a system access to the record: the memory, the graph, the career, the failures,
all of it queryable at once. **It found the connections between things I already
knew and had never once put beside each other.** The lottery pipeline computing
values into live article text and a language model filling a template are the
same architecture; I had built one in 2016 and studied the other in 2026 without
the thought ever crossing. The path between them existed on both ends and had
nothing running along it. We built that path together, and I would not have got
there by thinking harder on my own — there was nothing wrong with the thinking,
the two ends had simply never been in the same room.

What is missing is the symmetric case — not the machine learning from us, not
either party directing the other. The motto my environment runs on is Latin:
*non ducor, duco pariter.* I am not led; I lead **together**. It reads like decoration
until you notice it is two claims. *Non ducor* is the precondition. Without it,
"leading together" is obedience with a nicer name — which is what algorithmic
management is.

Which is what the measurements keep showing: **the interesting failures are not
in the model, they are in the relation.** The model followed rules it could not
judge. The store could not tell me about the document nobody asked for. Both
times the missing piece was on my side of the exchange.

Yesterday the local model and I worked the same question and both came back
partly wrong: its answer carried one specific it could not support, mine carried
one false accusation — I had called part of its answer invented after searching
for *my* words rather than its, found nothing, and read the emptiness as proof.
**Neither ratio licenses belief in the author.** You cannot pick a source to
trust; you can only verify a claim.

## On not knowing

I should be careful about how the previous section sounds.

Counting your own mistakes is not confidence. It is the opposite — it is what you
do when you have understood how much of this you cannot see from the inside. The
longer I work on these systems, the larger the unknown region gets, not smaller.
Every measurement that surprised me was a place where I had been sure.

So when I say I am not short of nerve, I do not mean I think I have this figured
out. I mean the two are unrelated. Preparation and certainty are different things:
you can prepare as well as you are able, know that it is still incomplete, and go
anyway. That is the only version of courage available to anyone working on
something that is genuinely moving.

What I actually have is a method for being wrong efficiently, and a record that
does not flatter me. Against a field this young, that is a more useful possession
than expertise would be.

## On respect

I owe the people who built the foundations more than I can repay by citing them.
The transformer paper, the vector databases, the graph extensions, the quantised
inference engines that let a twelve-billion-parameter model run on a machine
on my desk — all of it is human work, most of it given away.

That is also why my own work goes out the same way. The environment I build will
be open source from the start, and the research is published rather than kept.
I could not have learned any of this if the people before me had held it back.
Knowledge that is held is knowledge that stops compounding, and compounding is
the only reason a person with no AI degree could get this far in under a year.

## What it added up to

Eight months from the course, seven since the first real system. One
production system built, deployed and handed over clean. One local environment
running daily on a single machine, where two models and a person share the same
memory. A hundred and six architectural decisions and two hundred and eighty-four
lessons, written down as they happened, most of them recording something that went
wrong.

Three days of human instruction at the start. Everything after that from the
systems themselves — and all of it standing on human work.

There is no contradiction between those two sentences, and the space between them
is where I have been living.
