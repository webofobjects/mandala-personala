// Datele de contact și prețul — un singur loc de unde se modifică tot site-ul.
export const site = {
  domeniu: 'mandalapersonala.ro',
  url: 'https://mandalapersonala.ro',
  nume: 'Mandala personală',

  pret: 299,
  moneda: 'lei',

  telefon: '0742 001 605',
  telefonLink: '+40742001605',
  email: 'geo_valy@yahoo.com',
} as const;

export const pretAfisat = `${site.pret} ${site.moneda}`;

// Mesajul precompletat când cineva apasă pe „Scrie-mi un e-mail”.
export const emailSubiect = 'Comandă mandala personală';
export const emailCorp = [
  'Bună ziua,',
  '',
  'Aș vrea o mandala personală.',
  '',
  'Pentru cine este (pentru mine, pentru un cuplu, pentru o familie): ',
  'Ocazia, dacă există: ',
  'Ce aș vrea să-mi amintească: ',
  'Culori care îmi plac / culori pe care nu le vreau: ',
  'Simboluri, dacă am deja câteva în minte: ',
  'Unde va sta tabloul: ',
  'Până când aș avea nevoie de ea: ',
  '',
  'Mulțumesc!',
].join('\n');

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(emailSubiect)}&body=${encodeURIComponent(emailCorp)}`;
export const telHref = `tel:${site.telefonLink}`;
export const smsHref = `sms:${site.telefonLink}`;
