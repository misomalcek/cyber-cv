/**
 * The six sections of this CV, with the icons the dock draws.
 *
 * One source for both surfaces: the home grid names each section and the dock
 * repeats its icon, so the enlarged glyph on the card and the small one in the
 * pill are recognisably the same mark. That visual link is what let the dock
 * drop its text labels — which is what made room for a seventh entry.
 *
 * Blurbs are deliberately one sentence. The home page exists to give the shape
 * of the thing; every section has a page of its own for the detail.
 */
export const ICONS: Record<string, string> = {
  grid:  'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  path:  'M5 20V9a3 3 0 013-3h5a3 3 0 013 3v3a3 3 0 003 3h1M9 20h-4M20 15l-2-2M20 15l-2 2',
  box:   'M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v9',
  flask: 'M9 3h6M10 3v6L4.5 18a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 9V3',
  orbit: 'M12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0M12 3a9 9 0 019 9M3 12a9 9 0 019-9',
  badge: 'M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z',
  search:'M11 11m-7 0a7 7 0 1014 0a7 7 0 10-14 0M20 20l-4.35-4.35',
  log:   'M4 5h16M4 10h16M4 15h10M4 20h7',
};

export interface SectionCard {
  id: string; slug: string; title: string; icon: string;
  metric: string; blurb: string;
}

export const sectionCards: SectionCard[] = [
  {
    id: 'career', slug: 'career/', title: 'Career', icon: 'path',
    metric: '20 years · Asseco → Google → SEO → AI',
    blurb: 'ERP testing at nineteen, Google Prague and Dublin at twenty-four, eight years growing traffic in a market that punishes guessing — then AI, by building rather than by title.',
  },
  {
    id: 'systems', slug: 'systems/', title: 'Systems', icon: 'box',
    metric: 'Two — and they are not the same thing',
    blurb: 'Team Brain: five data sources, 93.9% tool success over 1,352 real calls, delivered and handed over. Factorium: one 24 GB machine, two models, no cloud inference.',
  },
  {
    id: 'research', slug: 'research/', title: 'Research', icon: 'flask',
    metric: 'Three findings, each with a falsifier',
    blurb: 'Rules found 1-in-5 by their own wording and 10/10 by the situation. A model misjudging 7 of its own 8 rules. Centrality silently lost on 1,512 entities.',
  },
  {
    id: 'crystal', slug: 'crystal/', title: 'Knowledge crystal', icon: 'orbit',
    metric: 'The graph, rendered from live data',
    blurb: 'The knowledge graph as it actually stands — clickable entities, real relations, and importance rendered as orbital distance rather than decoration.',
  },
  {
    id: 'credentials', slug: 'credentials/', title: 'Credentials & references', icon: 'badge',
    metric: 'Every document, in this repository',
    blurb: 'Diplomas, certificates and references — held in the repo itself and opened here, not linked to a drive that asks a stranger to log in.',
  },
  {
    id: 'log', slug: 'log/', title: 'Build log', icon: 'log',
    metric: 'How this was made, defects included',
    blurb: 'What happened while building this site, including the four defects found on the way — the part a commit message has no room for.',
  },
];
