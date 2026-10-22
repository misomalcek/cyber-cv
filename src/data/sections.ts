/**
 * The five sections of this CV, with the icons the dock draws.
 *
 * One source for both surfaces: the home grid names each section and the dock
 * repeats its icon, so the enlarged glyph on the card and the small one in the
 * pill are recognisably the same mark.
 *
 * Blurbs are deliberately one sentence. The home page exists to give the shape
 * of the thing; every section has a page of its own for the detail.
 */
export const ICONS: Record<string, string> = {
  grid:  'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  path:  'M5 20V9a3 3 0 013-3h5a3 3 0 013 3v3a3 3 0 003 3h1M9 20h-4M20 15l-2-2M20 15l-2 2',
  box:   'M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v9',
  badge: 'M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z',
  search:'M11 11m-7 0a7 7 0 1014 0a7 7 0 10-14 0M20 20l-4.35-4.35',
  code:  'M8 6l-6 6 6 6M16 6l6 6-6 6',
};

export interface SectionCard {
  id: string; slug: string; title: string; icon: string;
  metric: string; blurb: string;
}

export const sectionCards: SectionCard[] = [
  {
    id: 'systems', slug: 'systems/', title: 'Systems', icon: 'box',
    metric: 'Two — and they are not the same thing',
    blurb: 'Team Brain: five data sources, 93.9% tool success over 1,352 real calls, delivered and handed over. Factorium: one 24 GB machine, two models, no cloud inference.',
  },
  {
    id: 'work', slug: 'work/', title: 'Public output', icon: 'code',
    metric: '15 repositories · 3 games · 4 sites · video',
    blurb: 'Everything public in one place — including three games that are all prototypes of one idea, and two repositories published as evidence of where the working practice came from.',
  },
  {
    id: 'credentials', slug: 'credentials/', title: 'Credentials & references', icon: 'badge',
    metric: 'Every document, in this repository',
    blurb: 'Diplomas, certificates and references — held in the repo itself and opened here, not linked to a drive that asks a stranger to log in.',
  },
];
