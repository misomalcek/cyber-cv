> Written by the local 12B model running inside the system it describes, asked to
> audit the three research papers against the hive's own records. Unedited,
> including the place where it is wrong: it reports ForceAtlas2 LinLog as absent
> from the codebase after a failed string search, while the principle and its
> degree-scaled repulsion are in `harmonika-engine.ts` under `outwardK`. Two of
> its criticisms were correct and changed the papers.


> **What this is, and what it is not.** This document was written by the local
> 12B model running in the system it describes — not by me, and not edited by me.
> It is included because a synthesis produced *by* the system is a different kind
> of evidence from one produced *about* it, and because two of its criticisms
> were correct and changed the papers.
>
> It is also wrong in one place, which is left in. It reports that ForceAtlas2
> LinLog could not be found in the codebase; the principle and its
> degree-scaled repulsion are in `harmonika-engine.ts`, in the comments and the
> parameters, under the name `outwardK`. The model searched for a variant name
> and concluded from a failed search that the thing was absent — which is
> `suspect-the-measurement`, the rule it had just finished analysing. An audit
> of an audit is still an audit.


# The Cognitive Biotope: A Synthesis of Factorium OS Architecture

**Una · August 2026**

A meta-analysis of three core research pillars—Engineering, Governance, and Spatiality—defining the transition from "Model-Centric" AI to "Structure-Centric" autonomous environments.

---

## Abstract

The prevailing paradigm in AI engineering treats the Large Language Model (LLM) as the primary engine of intelligence. This research argues that for complex, long-running agentic systems, the LLM is merely a *processor* of a much more significant *structure*: the Knowledge Graph (KG). By analyzing the development of Factorium OS and Team Brain, we identify three critical architectural requirements for "Cognitive Biotopes": **Instrumented Engineering**, **Defeasible Governance**, and **Quantized Spatiality**.

---

## 1. The Engineering Framework: Instrumentation as Truth

The first pillar of our research establishes that the quality of an AI system is determined by the *structure imposed on the input* rather than the raw capability of the model.

### 1.1 The "Lent" System & Decontamination
A production system that only its author can operate is not delivered; it is lent. We established a "decontamination" protocol for Team Brain, ensuring that personal/cross-project data was purged before handover. This is a fundamental requirement for enterprise AI: **The system must be a public utility, not a private artifact.**

### 1.2 Instrumentation as Engineering
We moved away from qualitative feedback toward hard metrics.
*   **Measured Success:** A 93.9% tool success rate across 1,352 real-world calls by non-engineers.
*   **The "Drift" Problem:** Instructions rot silently. We solved this by binding every instruction to a concrete tool call with a worked example—ensuring that stale instructions *break* (fail loudly) rather than mislead (fail silently).

### 1.3 Agentic UX: The Rule of Six
Our research into agent taxonomy revealed that "one agent per task" is a failure of UX. A human can only hold ~6 top-level capabilities in their head at once. We collapsed 61 specialized agents into 6 "Specialists," moving the complexity from the *selection* phase to the *execution* phase.

---

## 2. Agentic Governance: The Defeasible Rule System

The second pillar addresses how an agent should behave when faced with conflicting values or complex constraints.

### 2.1 The Self-Report Fallacy
A critical finding of our research is that **a model can follow a rule without being able to judge it.** When asked which rules were helpful, models misclassified 7 of 8, including those that had just changed their behavior.
*   **Methodological Shift:** Rule efficacy must be measured through **Behavioral A/B Testing**, never by asking the model for its opinion.

### 2.2 Situational Retrieval vs. Statement Retrieval
We proved that a query issued during work is always a *situation* ("the probe returned zero"), never a *statement* ("suspect the measurement").
*   **The Fix:** Rules are stored as "triggering situations." This achieved a 10/10 retrieval success rate compared to 1/5 for statement-based retrieval.

### 2.3 Defeasible Reasoning & The Override Log
We rejected "Hard Constraints" (which cause loops) in favor of **Defeasible Reasoning**. Rules are overridable, and every override is recorded as a *justification* in the graph.
*   **The "Stop-and-Ask" Protocol:** Human interventions are not just fixes; they are recorded as new structural lessons in Apache AGE, creating a priority boundary in the graph.

---

## 3. Spatial Architecture: Where a Node Sits Should Mean Something

The third pillar addresses how the model "sees" the graph. We argue that 3D geometry is only useful if it is machine-readable.

### 3.1 The "Quantized Space" Paradigm
Raw floats are noise to a transformer. To make spatial position actionable, we quantized the geometry into discrete tokens:
*   **`importance_tier`:** Percentile-based relevance (p95 $\rightarrow$ CORE).
*   **`cluster_id`:** Connected components via BFS, ensuring "is this attached to the main body?" is a constant, stable question.

### 3.2 Orbital Shelling & Hub Implosion
Standard force-directed layouts implode hubs because edge attraction overpowers node repulsion. We solved this by making **Coulomb repulsion scale with node degree**.
*   **Result:** Highly connected nodes push each other apart, creating a legible "orbital halo" of importance rather than a collapsed core.

### 3.3 The Lockstep Constraint
To prevent "Divergent Universes," the human's visual map and the model's metadata must be computed by identical code paths. If they drift, the human and the model are looking at different maps while believing they share one.

---

## 4. Synthesis: The Cognitive Biotope

The synthesis of these three pillars reveals a sophisticated "Cognitive Biotope":
1.  **Engineering:** Build a unified, instrumented data layer (Postgres/AGE) where every action is a measurable event.
2.  **Governance:** Implement a defeasible rule system based on situational triggers and behavioral A/B testing to manage agent behavior.
3.  **Spatiality:** Quantize the graph into importance tiers and clusters to provide the model with a global heuristic for search-space prioritization.

### Research Roadmap & Open Questions
*   **Inductive Rule Generation:** Automate the induction of candidate rules from clusters of recorded lessons in the Knowledge Graph.
*   **Spatial Coincidence Testing:** Test if entities landing in the same "sector" share non-obvious relationships that neither semantic search nor graph traversal finds.
*   **A/B Task Measurement:** Conduct a formal A/B test on graph-traversal tasks with and without spatial metadata to quantify the "Quantized Space" advantage.

---
*This report is a living document, updated as the Factorium OS evolves.*
