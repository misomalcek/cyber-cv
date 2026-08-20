/**
 * Credentials — one list, one line each.
 *
 * This replaced a page that carried the same qualifications twice: a numbered
 * register of the files, plus a parallel set of cards with a paragraph of
 * commentary on each. Nobody asked for the commentary. A credential is a fact
 * with a date and a piece of paper; anything beyond that belongs in the CV text
 * or nowhere.
 *
 * `file` is held in public/refs/ and opens on the page. `link` is an external
 * source for entries whose document is not in the repository.
 */

export interface Ref {
  n: number;
  title: string;
  issuer: string;
  date: string;
  sort: string;
  /** Files in public/refs/; multi-page documents list every page. */
  files?: string[];
  link?: string;
  /** At most one short clause, and only where the fact is incomplete without it. */
  note?: string;
}

export const refs: Ref[] = [
  { n: 1, title: 'Electrical Engineering, ICT specialisation', issuer: 'High School of Jozef Murgaš, Banská Bystrica',
    date: '2002–2006', sort: '2006-06-01', note: 'final-year average 1.0' },
  { n: 2, title: 'Top 10 student of ~500', issuer: 'University of Economics, Prague',
    date: '2007', sort: '2007-06-01', files: ['2006-2007-vysledky-zebricku-uspesnych-studentu.pdf'] },
  { n: 3, title: 'Applied Informatics — Bachelor\'s degree', issuer: 'University of Economics, Prague',
    date: '2009', sort: '2009-06-01',
    files: ['bc-diploma.jpg', 'bc-suplement_1.jpg', 'bc-suplement_2.jpg', 'bc-suplement_3.jpg', 'bc-suplement_4.jpg'],
    note: 'average 1.6 · diploma and four-page supplement' },
  { n: 4, title: 'Academic transcript', issuer: 'University of Economics, Prague',
    date: '2009', sort: '2009-06-02', files: ['transcript_p1.jpg'] },
  { n: 5, title: 'Erasmus exchange — A in every subject', issuer: 'Corvinus University, Budapest',
    date: '2010', sort: '2010-06-01', link: 'http://www.uni-corvinus.hu/index.php?id=44542' },
  { n: 6, title: 'Information Systems & Technologies — Master\'s, 41 ECTS', issuer: 'University of Economics, Prague',
    date: '2009–2011', sort: '2011-01-01', files: ['ITS-DetailedOverview.pdf'],
    note: 'average 1.5 · left for practice rather than finishing' },
  { n: 7, title: 'CEMS International Management — Master\'s, in English', issuer: 'CEMS · University of Economics, Prague',
    date: '2009–2011', sort: '2011-01-02', files: ['CEMS_MyProgress.pdf', 'IM-DetailedOverview.pdf'],
    note: 'average 1.7 · second language exam not passed' },
  { n: 8, title: 'Google Search Advertising', issuer: 'Google', date: '2011', sort: '2011-03-01',
    files: ['SearchAdvertising.pdf'] },
  { n: 9, title: 'Google Display Advertising', issuer: 'Google', date: '2011', sort: '2011-03-02',
    files: ['GoogleDisplayAdvertising.pdf'] },
  { n: 10, title: 'Google AdWords — certification exams', issuer: 'Google', date: '2011', sort: '2011-03-03',
    files: ['aw-exams.png'] },
  { n: 11, title: 'Reference — Google, Dublin', issuer: 'Andrew Nartker, Product Manager, Ads Revenue & Reporting',
    date: '2011', sort: '2011-09-19', files: ['andrew-google.png'] },
  { n: 12, title: 'Startup Scholarship, Lisbon', issuer: 'Summer school at Startup Lisboa',
    date: '2013', sort: '2013-08-01', files: ['startupscholarship.pdf'] },
  { n: 13, title: 'German A1', issuer: 'Goethe-Institut, Hamburg', date: '2020', sort: '2020-01-01',
    files: ['goethe.jpg'] },
  { n: 14, title: 'Third worldwide — international Russian language olympiad', issuer: 'St Petersburg University · 5,000+ entrants',
    date: '2022', sort: '2022-06-01', link: 'https://drive.google.com/file/d/1CO4XJdY4kGTINsHSgpdxJW88-kZfiw44/view',
    note: 'certificate never issued; confirmation email is the record' },
  { n: 15, title: 'AI Generalist', issuer: 'Outskill — three-day intensive', date: '2026', sort: '2026-04-01',
    files: ['outskill.pdf'], note: 'the only formal AI training' },
  { n: 16, title: 'Google internal training programme', issuer: 'Google',
    date: '2010–2011', sort: '2011-06-01',
    note: 'AdWords Professional · Analytics · Product Management · Coding in Python · Personal Effectiveness · Presenting with Confidence' },
  { n: 17, title: 'Speaker — Slovak e-commerce conference', issuer: 'Recorded session',
    date: '2013', sort: '2013-01-01', link: 'https://www.youtube.com/watch?v=f8WMaL8jWYg' },
  { n: 18, title: 'StepUp management programme — 10 weeks', issuer: 'Lottoland',
    date: '2017', sort: '2017-01-01' },
  { n: 19, title: 'Four AI workshops for a whole company branch', issuer: 'msg life Slovakia · leadership to newest hires, voluntary attendance',
    date: '2025–2026', sort: '2026-01-01',
    note: 'the first opened with ethics and the practical limits of formal logic — Gödel, the frame problem, Tarski — and what each means when working with a probabilistic system' },
];

export const refsOrdered = [...refs].sort((a, b) => a.sort.localeCompare(b.sort));
