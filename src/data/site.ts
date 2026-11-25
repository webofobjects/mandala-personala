// Datele de contact și prețul — un singur loc de unde se modifică tot site-ul.
export const site = {
  domeniu: 'mandalapersonala.ro',
  url: 'https://mandalapersonala.ro',
  nume: 'Mandala personală',

  moneda: 'lei',

  telefon: '0742 036 249',
  telefonLink: '+40742036249',
  email: 'mandalapersonala@gmail.com',
} as const;

// Mărimile pânzei și prețurile (latura în cm). De aici le iau toate secțiunile site-ului.
export const dimensiuni = [
  { latura: 20, pret: 199 },
  { latura: 30, pret: 399 },
  { latura: 40, pret: 499 },
] as const;

export const pretMinim = Math.min(...dimensiuni.map((d) => d.pret));

/** „20 × 20 cm”, cu spații care nu se rup pe două rânduri */
export const formatDimensiune = (latura: number) => `${latura} × ${latura} cm`;

/** „199 de lei” în frază (regula lui „de” la numerale) */
export const pretInFraza = (pret: number) => {
  const r = pret % 100;
  return `${pret}${r === 0 || r >= 20 ? ' de' : ''} ${site.moneda}`;
};

/** „20, 30 sau 40 cm” */
export const listaLaturi = `${dimensiuni.slice(0, -1).map((d) => d.latura).join(', ')} sau ${dimensiuni[dimensiuni.length - 1].latura} cm`;

/** „20 × 20, 30 × 30 sau 40 × 40 cm” */
export const listaDimensiuni = `${dimensiuni.slice(0, -1).map((d) => `${d.latura} × ${d.latura}`).join(', ')} sau ${formatDimensiune(dimensiuni[dimensiuni.length - 1].latura)}`;

export const pretAfisat = `de la ${pretMinim} ${site.moneda}`;

// Mesajul precompletat când cineva apasă pe „Scrie-mi un e-mail”.
export const emailSubiect = 'Comandă pentru o mandala personală';
export const emailCorp = [
  'Bună ziua,',
  '',
  'Aș vrea o mandala personală.',
  '',
  'Pentru cine este (pentru mine sau cadou pentru cineva drag): ',
  `Mărimea pânzei (${dimensiuni.map((d) => `${d.latura} × ${d.latura}`).join(', ')} cm): `,
  'Ocazia, dacă există (zi de naștere, nuntă, botez…): ',
  'Data nașterii (doar pentru o mandala după data nașterii): ',
  'Ce aș vrea să-mi amintească: ',
  'Culorile care îmi plac și cele pe care nu le vreau: ',
  'Simboluri, dacă am deja câteva în minte: ',
  'Unde va sta tabloul: ',
  'Până când aș avea nevoie de ea: ',
  '',
  'Mulțumesc.',
].join('\n');

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(emailSubiect)}&body=${encodeURIComponent(emailCorp)}`;
export const telHref = `tel:${site.telefonLink}`;
export const smsHref = `sms:${site.telefonLink}`;
