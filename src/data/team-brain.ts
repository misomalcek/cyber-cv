/**
 * Team Brain, measured in production at handover (June 2026).
 *
 * HAND-MAINTAINED. Unlike src/data/hive.ts, nothing generates this file —
 * that system is handed over and its database is not ours to query, so these
 * figures are historical and fixed.
 *
 * It lives in its own module specifically so that scripts/pull-stats.mjs never
 * opens it. An earlier version carried this block through by slicing the
 * generated file at a comment string; when that string failed to match,
 * `indexOf` returned -1 and `slice(-1)` would have written a single character
 * with no error raised. Separating the files removes the failure instead of
 * guarding against it.
 *
 * Aggregates only — no individual users, client domains, or business content.
 */
export const teamBrain = {
  users: 15,
  conversations: 446,
  messages: 3558,
  toolCalls: 1352,
  toolSuccessPct: 93.9,
  agentRuns: 549,
  agentTypes: 17,
  tokensIn: 49_400_000,
  tokensOut: 2_200_000,
  reports: 1480,
  articles: 1121,
  memories: 514,
  embeddings: 1585,
  agentsWritten: 61,
  agentsLive: 12,
  period: 'Feb–Jun 2026',
  host: 'single 8 GB VPS',
} as const;
