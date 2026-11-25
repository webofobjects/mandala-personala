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
    titlu: 'Sămânța vieții, auriu pe indigo',
    alt: 'Mandala pictată cu puncte: în centru, Sămânța vieții aurie pe fond negru, înconjurată de un inel albastru cu spirale aurii și inimioare roșii; spre margini, raze aurii.',
  },
  {
    slug: 'pasarea-phoenix',
    titlu: 'Pasărea Phoenix',
    alt: 'O pasăre Phoenix cu aripile deschise, în nuanțe de roșu și portocaliu, în mijlocul unui cerc de valuri din puncte roșii, albe și aurii, pe fond negru.',
  },
  {
    slug: 'trandafir-in-inima',
    titlu: 'Trandafir într-o inimă, pe negru',
    alt: 'Un trandafir roșu conturat cu auriu, în mijlocul unei inimi formate din rânduri de puncte roșii, aurii, lila, albastre și verzi, pe fond negru.',
  },
  {
    slug: 'sri-yantra-albastru',
    titlu: 'Sri Yantra, auriu pe albastru',
    alt: 'Sri Yantra: triunghiuri aurii care se întretaie, într-un cerc pe fond albastru-închis, încadrate de un pătrat cu patru porți din puncte albastre și aurii.',
  },
  {
    slug: 'floarea-vietii-lotusi-roz',
    titlu: 'Floarea vieții cu lotuși roz',
    alt: 'Mandala rotundă pe fond albastru-închis: în centru, Floarea vieții aurie pe lila, înconjurată de flori de lotus roz și frunze verzi în formă de inimă, cu marginea din puncte aurii.',
  },
  {
    slug: 'cubul-lui-metatron',
    titlu: 'Cubul lui Metatron',
    alt: 'Cubul lui Metatron pe fond albastru: treisprezece cercuri din puncte mov, verzi, galbene, portocalii și albastre, unite prin linii aurii, într-un cerc de puncte aurii.',
  },
  {
    slug: 'arborele-vietii-infinit',
    titlu: 'Pomul vieții',
    alt: 'Pomul vieții auriu, cu frunze ca niște picături colorate, în centrul unei mandale cu inele verzi și turcoaz, un cerc de semne ale infinitului și stele aurii la colțuri, pe fond negru.',
  },
  {
    slug: 'buddha',
    titlu: 'Buddha',
    alt: 'Mandala rotundă cu Buddha în meditație, cu veșmânt portocaliu din puncte, pe fond negru, înconjurat de ornamente aurii și de puncte roșii, verzi și albastre.',
  },
  {
    slug: 'cerc-de-inimi-trandafir',
    titlu: 'Cerc de inimi',
    alt: 'Mandala rotundă cu inimi roșii și forme albastre care alternează în cerc, un trandafir în spirală în centru și o margine din rânduri de puncte aurii, mov și albe, pe fond violet-închis.',
  },
  {
    slug: 'samanta-vietii-curcubeu',
    titlu: 'Sămânța vieții în culorile curcubeului',
    alt: 'Pe fond roșu din puncte, un cerc cu Sămânța vieții în culorile curcubeului, de la violet și albastru spre verde și galben în centru, cu contururi din puncte albe.',
  },
  {
    slug: 'coroana-floare-lila',
    titlu: 'Coroana și trandafirii',
    alt: 'Pânză neagră: în centru, o floare cu șase petale lila și argintii; sus, o coroană aurie cu o inimă roșie; în colțuri, trandafiri roșii conturați cu auriu.',
  },
  {
    slug: 'floarea-vietii-hexagon-paun',
    titlu: 'Floarea vieții în hexagon',
    alt: 'Pe fond albastru-închis, Floarea vieții aurie într-un hexagon cu triunghiuri roșii și albastre, într-un cerc roșu, cu ochi de păun în colțuri și raze din puncte aurii.',
  },
  {
    slug: 'ingerul',
    titlu: 'Îngerul',
    alt: 'Un înger cu aripi albe, aureolă aurie, coroană și o inimă roșie pe piept, pe un fundal de cercuri din puncte aurii, mov, roșii și argintii.',
  },
  {
    slug: 'inger-cerc-de-aur',
    titlu: 'Îngerul pe disc auriu',
    alt: 'Chipul unui înger cu aripi albe încrucișate, pe un disc auriu înconjurat de un cerc alb, pe fond albastru din puncte.',
  },
  {
    slug: 'lotusi-pe-albastru',
    titlu: 'Lotuși în jurul Florii vieții',
    alt: 'Mandala rotundă albastră pe fond auriu: în centru, Floarea vieții aurie, înconjurată de flori de lotus mov cu argintiu și de frunze verzi.',
  },
  {
    slug: 'floarea-vietii-aur-turcoaz',
    titlu: 'Floarea vieții în auriu și turcoaz',
    alt: 'Floarea vieții aurie, cu triunghiuri turcoaz, albastre și roșii, într-un cerc de puncte aurii și albe, înconjurată de petale din puncte aurii, turcoaz și roșii, pe fond albastru-închis.',
  },
  {
    slug: 'floarea-vietii-ochi-de-paun',
    titlu: 'Floarea vieții cu ochi de păun',
    alt: 'Floarea vieții din puncte aurii pe fond albastru, înconjurată de o dantelă de puncte maro și mov, cu câte un ochi de păun în fiecare colț.',
  },
  {
    slug: 'steaua-si-infinitul',
    titlu: 'Steaua și semnele infinitului',
    alt: 'Pe fond de puncte argintii, un inel auriu cu semne ale infinitului în jurul unui centru cu o stea în șase colțuri și raze de puncte colorate.',
  },
  {
    slug: 'samanta-vietii-albastru-regal',
    titlu: 'Auriu pe albastru regal',
    alt: 'Sămânța vieții cu petale aurii pe fond albastru regal, cu perle albe și triunghiuri roz în interior și frunze aurii spre margini.',
  },
  {
    slug: 'cercul-ingerilor',
    titlu: 'Cercul îngerilor',
    alt: 'Mandala rotundă pe fond auriu: șase îngeri în culorile curcubeului, fiecare cu aureolă și cu o inimă, în jurul Seminței vieții desenate cu auriu pe alb.',
  },
  {
    slug: 'arborele-vietii-in-inima',
    titlu: 'Pomul vieții într-o inimă de aur',
    alt: 'Un disc auriu cu inimi albastre, mov și roșii de jur împrejur; în centru, o inimă aurie cu Pomul vieții, înconjurată de un inel în culorile curcubeului.',
  },
  {
    slug: 'sri-yantra-mov',
    titlu: 'Sri Yantra pe mov',
    alt: 'Sri Yantra în auriu, roșu și verde, într-un cerc pe fond mov, încadrată de un pătrat cu porți din puncte aurii și albastre.',
  },
  {
    slug: 'lotus-auriu-in-patrat',
    titlu: 'Floare aurie în pătrat',
    alt: 'Mandala pătrată în roșu, verde și auriu: o floare aurie cu centrul din inele de puncte, încadrată de un romb din puncte albe, cu flori aurii în colțuri.',
  },
  {
    slug: 'floarea-vietii-verde-flori',
    titlu: 'Floarea vieții pe verde, cu flori',
    alt: 'Floarea vieții din petale magenta conturate cu puncte aurii, pe un cerc verde, cu flori mici roz și albe de jur împrejur, pe fond negru.',
  },
  {
    slug: 'floarea-vietii-raze-aurii',
    titlu: 'Floarea vieții cu raze aurii',
    alt: 'Floarea vieții din puncte aurii pe negru, înconjurată de un inel de petale mov, roz și galbene, apoi de raze aurii, ca un soare.',
  },
  {
    slug: 'calul-alb',
    titlu: 'Calul alb',
    alt: 'Un cap de cal alb, cu coama lungă, pictat pe un cerc roz-violet, înconjurat de inele de puncte albastre, argintii și aurii, cu ochi de păun în colțuri.',
  },
  {
    slug: 'bufnita',
    titlu: 'Bufnița',
    alt: 'O bufniță pictată cu puncte albe, roșii, verzi și lila, așezată pe o creangă sub stele, în mijlocul unor cercuri de puncte în culorile curcubeului.',
    pozitie: 'center 42%',
  },
  {
    slug: 'potirul-samanta-vietii',
    titlu: 'Potirul în Sămânța vieții',
    alt: 'Sămânța vieții cu petale crem pe fond galben, cu un potir roșu în centru și semne mici de jur împrejur, între care o cruce, semnul infinitului și o inimă, într-un inel verde de puncte în valuri.',
  },
  {
    slug: 'floarea-vietii-gradina',
    titlu: 'Grădina',
    alt: 'Floarea vieții din puncte cărămizii și aurii pe fond albastru-închis, înconjurată de un inel de puncte albe și de o bordură de flori mov, galbene și roșii cu frunze verzi.',
  },
  {
    slug: 'sri-yantra-turcoaz',
    titlu: 'Sri Yantra pe turcoaz',
    alt: 'Sri Yantra aurie și verde pe un cerc turcoaz, înconjurată de petale roșii și de un pătrat cu porți din puncte aurii, pe fond verde.',
  },
  {
    slug: 'romania-floarea-vietii',
    titlu: 'România',
    alt: 'Floarea vieții din puncte aurii pictată peste harta verde a României, pe fundalul tricolorului albastru, galben și roșu.',
  },
  {
    slug: 'floarea-vietii-rotunda-ochi-de-paun',
    titlu: 'Floarea vieții, cu ochi de păun în cerc',
    alt: 'Mandala rotundă pe fond albastru-lavandă: în centru, Floarea vieții aurie, înconjurată de un cerc de ochi de păun din puncte și de volute albe.',
  },
  {
    slug: 'coroana-floarea-vietii-trandafiri',
    titlu: 'Coroana, Floarea vieții și trandafirii',
    alt: 'Pânză neagră fotografiată pe perete: în centru, Floarea vieții aurie; sus, o coroană aurie cu o inimă roșie; în colțuri, trandafiri roșii; în jurul cercului, segmente colorate.',
  },
  {
    slug: 'floarea-vietii-albastra-flori',
    titlu: 'Floarea vieții albastră, cu flori',
    alt: 'Floarea vieții din puncte albastre și aurii pe fond închis, cu flori mici crem și roz în colțuri.',
  },
  {
    slug: 'trandafir-pe-albastru',
    titlu: 'Trandafir într-o inimă, pe albastru',
    alt: 'Un trandafir în spirală din puncte roz, roșii și galbene, în interiorul unei inimi din puncte roșii, pe fond albastru-deschis, cu puncte galbene și portocalii în partea de jos.',
  },
  {
    slug: 'steaua-aurie',
    titlu: 'Steaua aurie',
    alt: 'Mandala rotundă pe fond albastru: o stea aurie cu multe colțuri, cu un inel în culorile curcubeului spre centru și o margine din puncte aurii și argintii.',
  },
  {
    slug: 'cununa-de-flori',
    titlu: 'Cununa de flori',
    alt: 'Mandala rotundă cu o cunună de flori mici din puncte roșii, albe, galbene și verzi, în jurul unui centru roșu-închis, pe un fond de puncte argintii.',
  },
  {
    slug: 'mandala-alb-negru',
    titlu: 'În alb și negru',
    alt: 'Mandala în alb, negru și argintiu: un cerc negru pe fond de puncte argintii, cu un pătrat în centru și șapte perle albe în mijloc.',
  },
  {
    slug: 'floare-rosu-verde-argintiu',
    titlu: 'Floare în roșu și verde',
    alt: 'Mandala cu o floare roșie cu centrul albastru și argintiu, petale verzi, piersicii și lila, pe pânză neagră cu puncte argintii la colțuri.',
  },
  {
    slug: 'floarea-vietii-roz-flori',
    titlu: 'Floarea vieții roz, cu flori',
    alt: 'Floarea vieții din petale roz-magenta și triunghiuri albastre, pe un cerc verde-închis, înconjurată de flori roz și mov.',
  },
  {
    slug: 'spirala-de-cercuri',
    titlu: 'Spirala',
    alt: 'Cercuri pictate în galben, roșu, albastru, mov, roz și verde, conturate cu auriu, care se strâng în spirală spre un cerc roșu din centru, pe fond verde-auriu.',
  },
  {
    slug: 'spirala-portocalie',
    titlu: 'Spirala portocalie',
    alt: 'Cercuri pictate în portocaliu, roșu, roz și alte culori, conturate cu auriu, care se strâng în spirală spre un cerc mov, pe fond auriu.',
  },
  {
    slug: 'coroana-floarea-vietii-curcubeu',
    titlu: 'Coroana și curcubeul',
    alt: 'Floarea vieții aurie în centru, o coroană aurie cu inimă, trandafiri roșii în colțuri și segmente în culorile curcubeului de jur împrejur.',
  },
  {
    slug: 'cercuri-pe-argintiu',
    titlu: 'Cercuri pe argintiu',
    alt: 'Pe fond argintiu, cercuri verzi, galbene, roz, albastre și mov, conturate cu auriu, în jurul unui centru din inele de puncte.',
  },
];

export const vizibileInitial = 12;
