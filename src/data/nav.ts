/**
 * Top navigation — the five destinations, in order.
 */
export const sitePages = [
  { id: 'cv', slug: '', label: 'My CV' },
  { id: 'portfolio', slug: 'portfolio/', label: 'Portfolio' },
  { id: 'production', slug: 'production/', label: 'Production' },
  { id: 'publication', slug: 'public/', label: 'Publication' },
  { id: 'credentials', slug: 'credentials/', label: 'Credentials' },
] as const;

/** On the home page only — jump links into the CV body. */
export const homeSections = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'production', label: 'Production' },
  { id: 'skills', label: 'Skills' },
] as const;
