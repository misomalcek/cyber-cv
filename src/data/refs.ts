/**
 * The numbered reference register.
 *
 * Every document lives in this repository (`public/refs/`) and opens in a viewer
 * on the page. Nothing here is a link to a drive that asks a stranger to sign in
 * — a reference a reader cannot open is not a reference, and the previous version
 * of this CV had four of those.
 *
 * The numbers are stable and citable: other pages mark a claim with [n] and link
 * to `/credentials/#r-n`. Ordered by date, oldest first, so the list reads as a
 * sequence rather than a pile.
 */

export type RefKind = 'diploma' | 'certificate' | 'transcript' | 'award' | 'reference' | 'language';

export interface Ref {
  n: number;
  title: string;
  issuer: string;
  date: string;
  /** Sort key — ISO, so "2007" and "2007-06" order correctly together. */
  sort: string;
  kind: RefKind;
  /** Files in public/refs/. Multi-page documents list every page. */
  files: string[];
  note?: string;
}

export const refs: Ref[] = [
  {
    n: 1,
    title: 'Top-students ranking, 2006–2007',
    issuer: 'University of Economics in Bratislava',
    date: '2006–2007', sort: '2007-06-01', kind: 'award',
    files: ['2006-2007-vysledky-zebricku-uspesnych-studentu.pdf'],
    note: 'Faculty ranking of students by academic results.',
  },
  {
    n: 2,
    title: 'Bachelor of Applied Informatics — diploma and supplement',
    issuer: 'University of Economics in Bratislava',
    date: '2008', sort: '2008-06-01', kind: 'diploma',
    files: ['bc-diploma.jpg', 'bc-suplement_1.jpg', 'bc-suplement_2.jpg',
            'bc-suplement_3.jpg', 'bc-suplement_4.jpg'],
    note: 'Diploma plus the four-page supplement listing the completed courses.',
  },
  {
    n: 3,
    title: 'Academic transcript',
    issuer: 'University of Economics in Bratislava',
    date: '2008', sort: '2008-06-02', kind: 'transcript',
    files: ['transcript_p1.jpg'],
  },
  {
    n: 4,
    title: 'Startup scholarship',
    issuer: 'Awarded scholarship',
    date: '2008', sort: '2008-09-01', kind: 'award',
    files: ['startupscholarship.pdf'],
  },
  {
    n: 5,
    title: 'CEMS — progress record',
    issuer: 'CEMS (Global Alliance in Management Education)',
    date: '2008', sort: '2008-10-01', kind: 'transcript',
    files: ['CEMS_MyProgress.pdf'],
  },
  {
    n: 6,
    title: 'International Marketing — detailed overview',
    issuer: 'University coursework',
    date: '2008', sort: '2008-10-02', kind: 'transcript',
    files: ['IM-DetailedOverview.pdf'],
  },
  {
    n: 7,
    title: 'Information Technology and Systems — detailed overview',
    issuer: 'University coursework',
    date: '2008', sort: '2008-10-03', kind: 'transcript',
    files: ['ITS-DetailedOverview.pdf'],
  },
  {
    n: 8,
    title: 'Goethe-Zertifikat — German',
    issuer: 'Goethe-Institut',
    date: '2009', sort: '2009-01-01', kind: 'language',
    files: ['goethe.jpg'],
  },
  {
    n: 9,
    title: 'Google AdWords — certification exams',
    issuer: 'Google',
    date: '2011', sort: '2011-01-01', kind: 'certificate',
    files: ['aw-exams.png'],
    note: 'Exam record from the AdWords certification programme.',
  },
  {
    n: 10,
    title: 'Google Search Advertising — certificate',
    issuer: 'Google',
    date: '2011', sort: '2011-01-02', kind: 'certificate',
    files: ['SearchAdvertising.pdf'],
  },
  {
    n: 11,
    title: 'Google Display Advertising — certificate',
    issuer: 'Google',
    date: '2011', sort: '2011-01-03', kind: 'certificate',
    files: ['GoogleDisplayAdvertising.pdf'],
  },
  {
    n: 12,
    title: 'Reference — Google, Dublin',
    issuer: 'Andrew — manager, Google Dublin',
    date: '2011', sort: '2011-06-01', kind: 'reference',
    files: ['andrew-google.png'],
    note: 'Written reference from the Google years.',
  },
  {
    n: 13,
    title: 'AI Generalist — course certificate',
    issuer: 'Outskill',
    date: '2026', sort: '2026-04-01', kind: 'certificate',
    files: ['outskill.pdf'],
    note: 'The three-day course. Everything after it was learned from the systems themselves — which is the point of the rest of this site.',
  },
];

/** Sorted once, so page order and numbering can never disagree. */
export const refsOrdered = [...refs].sort((a, b) => a.sort.localeCompare(b.sort));

export const isPdf = (f: string) => f.toLowerCase().endsWith('.pdf');
