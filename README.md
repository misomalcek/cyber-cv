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
npm run build            # → dist/          (works anywhere, no databases needed)
npx astro check          # types            (works anywhere)
npm run stats            # refresh src/data/hive.ts from the live stores
npm run check            # stats freshness + types — needs the hive running
```

**`build` and `astro check` run anywhere**, which is what CI enforces on every
push. **`npm run check` does not** — it queries Postgres on `:5432` and Qdrant on
`:6333`, so it only works on the machine the hive runs on. That is a pre-deploy
step, not a build step; if the stores are unreachable, verify the figures by hand
and say so, rather than shipping numbers nobody checked.

## The one rule

**Numbers come from the stores, not from the keyboard.** `scripts/pull-stats.mjs`
queries Postgres and Qdrant and rewrites `src/data/hive.ts` whole — it never
splices or carries anything through from the previous file. `npm run check` fails
if the committed figures no longer match the stores.

Team Brain's figures live in `src/data/team-brain.ts`, are hand-maintained, and
that script never opens the file. They are historical: the system is handed over
and its database is not ours to query. Aggregates only, with individual users and
business content excluded.

## Credentials

Five education documents live behind a Google sign-in, so linking them sends a
reader to a login page. Put the PDFs in `public/credentials/` and point the
`href` at `/credentials/<file>.pdf` in `src/pages/credentials/index.astro`,
switching `state` to `'hosted'`. Link states were probed on 2026-08-14; re-run
that check before any deploy where it matters.

## Deploy

Static output. `dist/` goes to Cloudflare Pages; the domain already runs through
Cloudflare, so a subdomain is one CNAME record.
