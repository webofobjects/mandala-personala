// Datele de contact și prețul — un singur loc de unde se modifică tot site-ul.
export const site = {
  domeniu: 'mandalapersonala.ro',
  url: 'https://mandalapersonala.ro',
  nume: 'Mandala personală',

  pret: 399,
  moneda: 'lei',

  telefon: '0742 036 249',
  telefonLink: '+40742036249',
  email: 'mandalapersonala@gmail.com',
} as const;

export const pretAfisat = `${site.pret} ${site.moneda}`;

// Mesajul precompletat când cineva apasă pe „Scrie-mi un e-mail”.
export const emailSubiect = 'Comandă pentru o mandala personală';
export const emailCorp = [
  'Bună ziua,',
  '',
  'Aș vrea o mandala personală.',
  '',
  'Pentru cine este (pentru mine sau cadou pentru cineva drag): ',
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
