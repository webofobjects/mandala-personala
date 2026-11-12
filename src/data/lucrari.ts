import type { ImageMetadata } from 'astro';

const fisiere = import.meta.glob<{ default: ImageMetadata }>('../assets/lucrari/*.jpg', { eager: true });
const detalii = import.meta.glob<{ default: ImageMetadata }>('../assets/detalii/*.jpg', { eager: true });

export function lucrare(slug: string): ImageMetadata {
  const f = fisiere[`../assets/lucrari/${slug}.jpg`];
  if (!f) throw new Error(`Lipsește imaginea lucrării: ${slug}`);
  return f.default;
}

export function detaliu(slug: string): ImageMetadata {
  const f = detalii[`../assets/detalii/${slug}.jpg`];
  if (!f) throw new Error(`Lipsește detaliul: ${slug}`);
  return f.default;
}

export interface Lucrare {
  slug: string;
  /** descriere scurtă, afișată sub imagine */
  titlu: string;
  /** descrierea completă pentru cititoarele de ecran și motoarele de căutare */
  alt: string;
  /** încadrarea în pătrat pentru miniaturi (object-position) */
  pozitie?: string;
}

// Ordinea din galerie. Primele `vizibileInitial` se văd direct, restul la „Vezi toate”.
export const lucrari: Lucrare[] = [
  {
    slug: 'samanta-vietii-auriu-indigo',
    titlu: 'Sămânța vieții, aur pe indigo',
    alt: 'Mandala pictată cu puncte: Sămânța vieții aurie în centru, pe fond negru, înconjurată de un inel albastru cu spirale aurii și inimioare roșii și de raze aurii spre margini.',
  },
  {
    slug: 'trandafir-in-inima',
    titlu: 'Trandafir într-o inimă de puncte',
    alt: 'Un trandafir roșu conturat cu auriu, în mijlocul unei inimi formate din rânduri de puncte roșii, aurii, lila, albastre și verzi, pe fond negru.',
  },
  {
    slug: 'arborele-vietii-infinit',
    titlu: 'Pomul vieții',
    alt: 'Pomul vieții auriu, cu frunze ca niște picături colorate, în centrul unei mandale cu inele verzi și turcoaz, un cerc de semne ale infinitului și stele aurii la colțuri, pe fond negru.',
  },
  {
    slug: 'lotusi-pe-albastru',
    titlu: 'Lotuși în jurul Florii vieții',
    alt: 'Mandala rotundă albastră pe fond auriu: în centru, Floarea vieții aurie, înconjurată de flori de lotus mov cu argintiu și de frunze verzi.',
  },
  {
    slug: 'coroana-floare-lila',
    titlu: 'Coroana și trandafirii',
    alt: 'Pânză neagră cu o floare cu șase petale lila și argintii în centru, o coroană aurie cu o inimă roșie deasupra și trandafiri roșii conturați cu auriu în colțuri.',
  },
  {
    slug: 'cerc-de-inimi-trandafir',
    titlu: 'Cerc de inimi',
    alt: 'Mandala rotundă cu inimi roșii și forme albastre care alternează în cerc, un trandafir în spirală în centru și margini din puncte aurii, mov și albe, pe fond violet închis.',
  },
  {
    slug: 'floarea-vietii-ochi-de-paun',
    titlu: 'Floarea vieții cu ochi de păun',
    alt: 'Floarea vieții din puncte aurii pe fond albastru, înconjurată de o dantelă de puncte maro și mov, cu câte un ochi de pană de păun în fiecare colț.',
  },
  {
    slug: 'ingerul',
    titlu: 'Îngerul',
    alt: 'Un înger cu aripi albe, aureolă aurie și coroană, care ține o inimă roșie, pe un fundal de cercuri din puncte aurii, mov, roșii și argintii.',
  },
  {
    slug: 'samanta-vietii-albastru-regal',
    titlu: 'Aur pe albastru regal',
    alt: 'Sămânța vieții cu petale aurii pe fond albastru regal, cu perle albe și triunghiuri roz în interior și frunze aurii spre margini.',
  },
  {
    slug: 'arborele-vietii-in-inima',
    titlu: 'Pomul vieții într-o inimă de aur',
    alt: 'Un disc auriu cu inimi albastre, mov și roșii de jur împrejur; în centru, o inimă aurie cu Pomul vieții, înconjurată de un inel în culorile curcubeului.',
  },
  {
    slug: 'lotus-auriu-in-patrat',
    titlu: 'Floare aurie în pătrat',
    alt: 'Mandala pătrată în roșu, verde și auriu: o floare aurie cu centrul din inele de puncte, încadrată de un romb din puncte albe, cu flori aurii în colțuri.',
  },
  {
    slug: 'floarea-vietii-raze-aurii',
    titlu: 'Floarea vieții cu raze aurii',
    alt: 'Floarea vieții din puncte aurii pe negru, înconjurată de un inel de petale mov, roz și galbene și de raze aurii, ca un soare.',
  },
  {
    slug: 'bufnita',
    titlu: 'Bufnița',
    alt: 'O bufniță pictată cu puncte albe, roșii, verzi și lila, așezată pe o creangă sub stele, în mijlocul unor cercuri de puncte în culorile curcubeului.',
    pozitie: 'center 42%',
  },
  {
    slug: 'floarea-vietii-gradina',
    titlu: 'Grădina',
    alt: 'Floarea vieții din puncte cărămizii și aurii pe fond albastru închis, înconjurată de un inel de puncte albe și de o bordură de flori mov, galbene și roșii cu frunze verzi.',
  },
  {
    slug: 'romania-floarea-vietii',
    titlu: 'România',
    alt: 'Floarea vieții din puncte aurii pictată peste harta verde a României, pe fundalul tricolorului albastru, galben și roșu.',
  },
  {
    slug: 'coroana-floarea-vietii-trandafiri',
    titlu: 'Coroana, Floarea vieții și trandafirii',
    alt: 'Pânză neagră cu Floarea vieții aurie în centru, o coroană aurie cu inimă deasupra, trandafiri roșii în colțuri și segmente colorate în jurul cercului, fotografiată pe perete.',
  },
  {
    slug: 'trandafir-pe-albastru',
    titlu: 'Trandafir pe albastru deschis',
    alt: 'Un trandafir în spirală din puncte roz, roșii și galbene, în interiorul unei inimi din puncte roșii, pe fond albastru deschis, cu puncte galbene și portocalii în partea de jos.',
  },
  {
    slug: 'cununa-de-flori',
    titlu: 'Cununa de flori',
    alt: 'Mandala rotundă cu o cunună de flori mici din puncte roșii, albe, galbene și verzi, în jurul unui centru roșu-închis, pe un fond de puncte argintii.',
  },
  {
    slug: 'floare-rosu-verde-argintiu',
    titlu: 'Floare în roșu și verde',
    alt: 'Mandala cu o floare roșie cu centrul albastru și argintiu, petale verzi, piersicii și lila, pe pânză neagră cu puncte argintii la colțuri.',
  },
  {
    slug: 'spirala-de-cercuri',
    titlu: 'Spirala',
    alt: 'Cercuri pictate în galben, roșu, albastru, mov, roz și verde, conturate cu auriu, care se strâng în spirală spre un cerc roșu din centru, pe fond verde-auriu.',
  },
  {
    slug: 'coroana-floarea-vietii-curcubeu',
    titlu: 'Coroana, în culorile curcubeului',
    alt: 'Floarea vieții aurie în centru, o coroană aurie cu inimă, trandafiri roșii în colțuri și segmente în culorile curcubeului de jur împrejur.',
  },
  {
    slug: 'floarea-vietii-lotusi-roz',
    titlu: 'Floarea vieții cu lotuși roz',
    alt: 'Mandala rotundă: Floarea vieții aurie pe fond lila, înconjurată de flori de lotus roz și frunze verzi în formă de inimă, cu marginea din puncte aurii, pe fond albastru închis.',
  },
];

export const vizibileInitial = 12;
