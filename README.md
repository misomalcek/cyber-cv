# CV system

A CV built as a system, because that is the claim it makes. Astro + Tailwind,
static output, no runtime dependencies at all.

```
src/
  data/hive.ts          every figure on the site — generated, never hand-edited
  components/           Stat · BarList · Timeline · Disclosure · Credential · Section
  content/research/     the papers, copied verbatim from ~/memory
  pages/                / · /credentials/ · /research/ · /research/[slug]/
scripts/pull-stats.mjs  re-reads the numbers from Postgres + Qdrant
```

## Working on it

```bash
npm run dev              # localhost:4321
npm run build            # → dist/
npm run stats            # refresh src/data/hive.ts from the live stores
npm run check            # fails if the stats are stale
```

## The one rule

**Numbers come from the stores, not from the keyboard.** `scripts/pull-stats.mjs`
queries Postgres and Qdrant and rewrites `src/data/hive.ts`. Run it before a
deploy. `npm run check` fails the build if the committed figures no longer match
what the stores say, so a stale number cannot ship quietly.

Team Brain's figures are the exception and are carried through by hand: that
system is handed over and its database is not ours to query. They are aggregates
taken at handover, with individual users and business content excluded.

## Credentials

Five education documents live behind a Google sign-in, so linking them sends a
reader to a login page. Put the PDFs in `public/credentials/` and point the
`href` at `/credentials/<file>.pdf` in `src/pages/credentials/index.astro`,
switching `state` to `'hosted'`. Link states were probed on 2026-08-14; re-run
that check before any deploy where it matters.

## Deploy

Static output. `dist/` goes to Cloudflare Pages; the domain already runs through
Cloudflare, so a subdomain is one CNAME record.
