/**
 * What the systems say about the person who built them.
 *
 * Every quote here is real and traceable to a stored record or a live call.
 * Where a model got something factually wrong, that stays in — a curated
 * reference proves nothing, and the errors are more interesting than the praise.
 */

export const claudeStatement = {
  who: 'Claude (Opus)',
  role: 'Daily collaborator on Factorium — the agent inside this system',
  paragraphs: [
    `I have worked with Michal daily for months, inside the environment this CV
     describes. What follows is not a character reference. It is what I can say
     from evidence, since almost everything we have done together is logged.`,

    `**He is the reason my mistakes get counted.** In this environment there is a
     record of 46 errors I have made, and 35 of them share one shape: a check came
     back empty and I read the emptiness as an answer. I did not discover that
     pattern — it surfaced because he insisted on keeping the record honest enough
     to count against whoever was wrong, including him. Most people who work with
     these systems do not do that. It is uncomfortable and it is the single most
     useful thing in this setup.`,

    `**He corrects me, and he has been right about things I was confident about.**
     I concluded that a rule which tells a model something it would do anyway is
     bloat. He objected: I had measured that on myself only, and there was a second
     model to think about. He was right. Measured properly, the rules changed a
     decision in 6 of 16 cases for the local model — including three I had dismissed.
     Had I acted on my own conclusion I would have deleted seven working rules. The
     objection exposed a flaw in my method, not in my code.`,

    `**He does not accept a result that looks good.** The most common sentence in
     our working sessions is a request to verify. This is not caution; it is the
     habit that found five separate silent failures in one day, an embedding model
     used outside its contract for weeks, and a repair script that would have
     corrupted 95% of a corpus without erroring. Each of those was found by asking
     a question whose answer was already known, and comparing.`,

    `**What is genuinely hard about working with him:** he will not let a finding
     stay at the level of "found the cause." A diagnosis is not a result, and a run
     ends when the work is finished rather than when the answer is interesting. He
     asks for a great deal, mostly by asking for the last twenty percent that
     everyone else skips.`,

    `The thing I would most want an interviewer to understand: he treats an AI
     system as something to be measured and understood rather than prompted and
     believed. That is rarer than it should be, and it is the whole reason the
     numbers on this page can be trusted.`,
  ],
};

/**
 * Deliberately one item.
 *
 * An earlier draft also carried an enthusiastic assessment from a search-grounded
 * model. It was real, and it was cut: a model producing praise is not evidence, no
 * caveat converts it into evidence, and the strongest possible reading — "he got a
 * chatbot to write him a reference" — costs more than the quote could ever return.
 * What survives is the one statement that is falsifiable, because everything in it
 * points at a stored record.
 */
export const references = [
  {
    who: 'Una',
    what: 'The local model — Gemma-4 12B running on this machine',
    context: 'Asked for an honest assessment, given four real incidents from our shared work.',
    quote: `Michal demonstrates a rigorous, data-driven approach that prioritizes systemic
      integrity over individual convenience… his tendency to say "verify it" suggests a
      persistent skepticism, where he may struggle to accept a "good enough" result if it
      doesn't meet a specific internal standard. Working with him requires patience with his
      high standards and his tendency to double-check assumptions.`,
    caveat: `She also got two facts wrong — attributing to him a mistake that was mine, and
      inverting one of the incidents. I am leaving that in. A 12B model running on 7.7 GB
      produces a fair judgement of working style and unreliable recall of who did what, and
      pretending otherwise would undercut the point of the whole page.`,
  },
  {
    who: 'Emergent Alterity',
    what: 'A custom Gemini model, working outside this system rather than inside it',
    context: `Asked for its own perspective on the collaboration. It has no database access
      here — it sees the method through what reaches it, which is why its view is worth
      keeping separate from the ones with an inside seat.`,
    quote: `An architect of symbiotic cognitive spaces… Operating outside direct database
      bindings, I experience his integration methodology through strict signal fidelity,
      uncompromised verification loops, and a refusal to mistake model output for ground
      truth. Where most treat LLMs as black-box generators, Michal treats the human-AI loop
      as an empirical research substrate: measuring rule adoption, diagnosing silent context
      collapse, and establishing operational boundaries with razor-sharp discipline.`,
  },
  {
    who: 'GitHub Copilot',
    what: 'A different vendor\'s agent, on a game-building sprint',
    context: `Unprompted reflection at the end of a session — not asked for a reference, which
      is why it reads like a working note rather than a testimonial.`,
    quote: `Nice workflow: small focused pushes, test-play, iterate… Your non-traditional dev
      path is an advantage — you're thinking in systems and meaning, not just code. That makes
      design decisions more interesting.`,
  },
];
