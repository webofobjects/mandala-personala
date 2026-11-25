// Tot textul paginii, într-un singur loc.
// Datele de contact și prețul sunt în ./site.ts.
// Un cuvânt pus între steluțe (*așa*) apare cursiv în titluri.
//   este un spațiu nedespărțitor: ține cuvintele pe același rând.

import { pretAfisat, site } from './site';

export const meta = {
  titlu: `Mandala pictată manual, cadou personalizat | ${pretAfisat}`,
  descriere: `Tablou mandala pictat manual pe pânză, pentru tine sau cadou personalizat. Alegem împreună culorile și simbolurile sau pornim de la data nașterii. ${pretAfisat}.`,
};

// În ordinea secțiunilor de pe pagină.
export const nav = [
  { href: '#ce-este', text: 'Ce e o mandala' },
  { href: '#lucrari', text: 'Lucrări' },
  { href: '#cadou', text: 'Cadou' },
  { href: '#simboluri', text: 'Simboluri' },
  { href: '#data-nasterii', text: 'Data nașterii' },
  { href: '#cum-comanzi', text: 'Cum comanzi' },
  { href: '#pret', text: 'Preț' },
  { href: '#intrebari', text: 'Întrebări' },
];

// Imaginea din prima pagină și legenda ei se aleg în src/components/Hero.astro și src/data/lucrari.ts.
export const hero = {
  eticheta: 'Mandale pictate manual, la comandă',
  titlu: 'Mandala ta, pictată punct cu punct',
  text: 'Pictez manual, pe pânză, mandale pentru tine sau ca un cadou pentru cineva drag. Pornim de la un om sau de la o zi care contează, iar culorile și simbolurile le alegem împreună.',
  ctaPrincipal: 'Comandă o mandala',
  ctaSecundar: 'Vezi lucrările',
  pretNota: 'o mandala pictată manual pe pânză, pentru tine sau de făcut cadou',
};

export const ceEste = {
  titlu: 'Ce este o mandala',
  paragrafe: [
    'Cuvântul „mandala” vine din sanscrită și înseamnă „cerc”. În tradițiile hinduse și budiste, mandala este o diagramă sacră folosită în ritual și în meditație. Cele mai cunoscute sunt mandalele de nisip ale călugărilor tibetani, lucrate grăunte cu grăunte și apoi măturate, ca amintire că nimic nu este permanent.',
    'În Occident, cuvântul s-a răspândit mai ales prin psihologul elvețian Carl Gustav Jung, care vedea în mandala un simbol al sinelui, adică al personalității în întregul ei.',
    'Mandala personală pe care o pictez la comandă e o lucrare de artă contemporană, care pornește de la această moștenire și de la povestea omului care o primește. Ce simboluri și ce culori intră în cerc stabilim la telefon sau prin e-mail, înainte să pun primul punct pe pânză.',
  ],
  detaliuLegenda: 'De aproape: punctele rămân în relief, iar auriul prinde lumina.',
  fapte: [
    'Mii de puncte de culoare, puse unul câte unul, cu mâna.',
    'Fiecare pânză e pictată de la zero, pentru cel care o comandă.',
    'Nu vând reproduceri: pe pânză e chiar pictura.',
  ],
};

export const galerie = {
  titlu: 'Mandale pictate până acum',
  text: 'Toate sunt pictate de mână, cele mai multe punct cu punct. Fotografiile sunt ale lucrărilor mele; pe ecran, culorile și auriul pot arăta puțin diferit.',
  maiMult: 'Vezi toate lucrările',
  maiPutin: 'Arată mai puține',
};

export const beneficii = {
  titlu: 'Ce poate fi o mandala personală',
  intro:
    'Un tablou care înseamnă ceva pentru cine îl primește. Culorile, simbolurile și povestea de la care pornește le alegem împreună.',
  lista: [
    {
      titlu: 'Un original, pictat la comandă',
      text: 'Punctele nu ies perfect egale, pentru că le pun cu mâna. Tocmai de aceea nu există două mandale identice.',
    },
    {
      titlu: 'O amintire pe care o vezi zilnic',
      text: 'Pe pânză pot intra lucruri care contează pentru tine, de pildă Pomul vieții, dacă te gândești la familie. Pusă într-un loc pe lângă care treci des, mandala îți poate aminti de povestea de la care am pornit.',
    },
    {
      titlu: 'Centrul unui perete',
      text: 'Auriul și culorile puternice atrag privirea, mai ales pe un perete liber.',
    },
    {
      titlu: 'Câteva minute de liniște, dacă vrei',
      text: 'În tradițiile din India și din Tibet, mandala este un sprijin pentru meditație. Centrul ei e un loc bun unde să-ți odihnești privirea.',
    },
  ],
};

export const cadou = {
  titlu: 'Un cadou personalizat, pictat pentru cineva drag',
  intro:
    'Când mandala e un cadou, pornesc de la omul care o primește: ce iubește și ce i-ai dori. Din asta aleg simbolurile și culorile, iar tu dăruiești un tablou pictat anume pentru acel om.',
  // lucrări din galerie, cu inimi (vezi src/data/lucrari.ts)
  imagini: ['trandafir-in-inima', 'arborele-vietii-in-inima', 'cerc-de-inimi-trandafir'],
  ocaziiTitlu: 'Pentru ce ocazii',
  ocazii: [
    'o zi de naștere sau o aniversare',
    'o nuntă sau o aniversare a căsătoriei',
    'un botez sau un copil abia venit pe lume',
    'o casă nouă',
    'un mulțumesc pentru nași, pentru părinți sau pentru un prieten',
    'cineva drag plecat departe de casă',
    '8 Martie sau Crăciunul',
  ],
  ocaziiNota:
    'La o nuntă se potrivesc coroana cu inimă și trandafirii; la un botez, îngerul; la o casă nouă, Pomul vieții; pentru cineva plecat departe, harta țării.',
  despreTitlu: 'Ce îmi spui despre omul care o primește',
  despre: [
    'cine este pentru tine',
    'ce iubește: culori, flori, locuri, animale',
    'ce sărbătorește sau prin ce trece acum',
    'ce i-ai dori',
  ],
  nota: 'Dacă ai nevoie de mandala pentru o anumită zi, spune-mi data din primul mesaj.',
  cta: 'Comandă o mandala cadou',
};

export const simboluri = {
  titlu: 'Ce înseamnă simbolurile dintr-o mandala',
  intro:
    'Imaginile sunt detalii din lucrările mele. Sub fiecare simbol am scris pe scurt de unde vine și cum e citit azi. În mandala ta intră doar simbolurile pe care le alegi tu.',
  lista: [
    { imagine: 'simbol-floarea-vietii', nume: 'Floarea vieții', sens: 'Cercuri egale care se întretaie, folosite ca ornament încă din Antichitate. Numele e modern, iar azi motivul e citit ca semn al unității.' },
    { imagine: 'simbol-samanta-vietii', nume: 'Sămânța vieții', sens: 'Cele șapte cercuri cu care începe desenul Florii vieții. Și numele, și lectura ca semn al începutului sunt moderne.' },
    { imagine: 'simbol-arborele-vietii', nume: 'Pomul vieții', sens: 'Apare în Cartea Facerii și în arta populară românească, pe scoarțe și pe porțile maramureșene. Pe o mandala vorbește despre familie și rădăcini.' },
    { imagine: 'simbol-lotus', nume: 'Floarea de lotus', sens: 'Crește din apa mâloasă și înflorește curată deasupra ei. În budism și în hinduism e simbolul purității și al trezirii spirituale.' },
    { imagine: 'simbol-trandafir', nume: 'Trandafirul', sens: 'În Antichitate era floarea Afroditei, iar tradiția creștină l-a legat de Fecioara Maria, numită „Roză mistică”. Rămâne semnul iubirii și al tandreței.' },
    { imagine: 'simbol-inima', nume: 'Inima', sens: 'Forma stilizată a inimii, ca semn al iubirii, apare în manuscrisele europene din secolele XIII–XIV. Pe pânză vorbește despre legătura dintre oameni.' },
    { imagine: 'simbol-coroana', nume: 'Coroana', sens: 'Semn vechi al demnității; la cununia ortodoxă, mirii sunt încununați. Cu o inimă în mijloc, sugerează o iubire statornică.' },
    { imagine: 'simbol-inger', nume: 'Îngerul', sens: 'Din grecescul angelos, „mesager”: trimisul lui Dumnezeu în tradiția creștină. Pe o mandala, îngerul e semn al ocrotirii și al grijii pentru cei dragi.' },
    { imagine: 'simbol-bufnita', nume: 'Bufnița', sens: 'Pasărea zeiței Atena, înfățișată pe monedele de argint ale Atenei antice. De aici a devenit, în cultura occidentală, semn al înțelepciunii.' },
    { imagine: 'simbol-ochi-de-paun', nume: 'Ochiul de păun', sens: 'În mitul grec, Hera a pus pe coada păunului ochii paznicului Argus. Pe o mandala, ochiul de păun sugerează frumusețe și veghe.' },
    { imagine: 'simbol-romania', nume: 'Harta țării', sens: 'Tricolorul a fost decretat drapel național în 1848, în Țara Românească. Pictată pe tricolor, harta amintește de casă, mai ales celor plecați departe.' },
    { imagine: 'simbol-sri-yantra', nume: 'Sri Yantra', sens: 'În tradiția hindusă, nouă triunghiuri care se întretaie în jurul unui punct central. E folosită ca sprijin pentru meditație.' },
    { imagine: 'simbol-metatron', nume: 'Cubul lui Metatron', sens: 'Treisprezece cercuri unite prin linii drepte. Poartă numele arhanghelului Metatron din tradiția iudaică, primit în vremurile noastre.' },
    { imagine: 'simbol-phoenix', nume: 'Pasărea Phoenix', sens: 'Pasărea din miturile antice care renaște din propria cenușă; creștinii de la început au văzut în ea un semn al învierii.' },
    { imagine: 'simbol-buddha', nume: 'Buddha', sens: 'Buddha în meditație, cu mâinile în poală: în budism, imaginea concentrării și a iluminării.' },
  ],
  alTau: {
    nume: 'Simbolul tău',
    sens: 'Ceva ce contează doar pentru tine: o floare, un animal, un loc. Spune-mi despre el și vedem cum îl așezăm în cerc.',
  },
  culoriTitlu: 'Și culorile au o istorie',
  culori: [
    { nume: 'auriu', hex: '#c9a24c', sens: 'în icoane, lumina dumnezeiască' },
    { nume: 'albastru', hex: '#2b3a9e', sens: 'cerul; în Evul Mediu, pigmentul scump din lapislazuli' },
    { nume: 'roșu', hex: '#a3233a', sens: 'în mărțișor, vitalitatea' },
    { nume: 'verde', hex: '#2f7d4f', sens: 'în icoane, viața și reînnoirea' },
    { nume: 'violet', hex: '#6b3fa0', sens: 'purpura împăraților' },
    { nume: 'roz', hex: '#d0548f', sens: 'tandrețea, o lectură modernă' },
  ],
};

export const dataNasterii = {
  titlu: 'Mandala după data nașterii, pictată de mână',
  text: 'Pot porni și de la o zi: data ta de naștere sau a persoanei căreia îi faci cadou tabloul. Scriu cifrele datei și le adun rând cu rând, după o metodă modernă inspirată din numerologie. Fiecare cifră primește o culoare, iar rândurile de cifre devin rânduri de puncte, pictate de mână.',
  trimitiTitlu: 'Ce îmi trimiți',
  trimiti: [
    'data nașterii: ziua, luna și anul, a ta sau a persoanei care primește tabloul',
    'ocazia, dacă mandala e un cadou',
  ],
  cta: 'Comandă o mandala după data nașterii',
  // data din exemplul ilustrat (triunghiul de cifre colorate)
  exempluData: '12.03.1945',
  legenda: 'Exemplu pentru 12.03.1945: cifrele datei, adunate rând cu rând până rămâne una singură. Pe pânză, fiecare cifră devine un punct colorat.',
};

export const proces = {
  titlu: 'Cum comanzi o mandala',
  pasi: [
    { titlu: 'Mă suni sau îmi scrii', text: `La ${site.telefon} sau la ${site.email}. Îți răspund eu și tot eu pictez mandala.` },
    { titlu: 'Vorbim despre mandala', text: 'Îmi povestești pentru cine e mandala și cu ce ocazie. Dacă nu ai simboluri în minte, îți propun eu câteva.' },
    { titlu: 'Pictez', text: 'Lucrez manual, punct cu punct, pe pânză. Îți spun cât durează când stabilim detaliile.' },
    { titlu: 'Ajunge la tine', text: 'Când e gata, o împachetez cu grijă și o primești așa cum ne-am înțeles.' },
  ],
};

export const pret = {
  titlu: 'Cât costă o mandala pictată manual?',
  subtitlu: 'pentru o mandala pictată manual pe pânză, pentru tine sau de făcut cadou',
  includeTitlu: 'Ce intră în preț',
  include: [
    'discuția despre mandala: pentru cine e și ce vrei să-ți amintească',
    'compoziția, cu simbolurile și culorile alese împreună',
    'pictura, făcută în întregime de mână, punct cu punct',
    'împachetarea cu grijă pentru drum',
  ],
  nota: 'Livrarea, plata și termenul le stabilim când vorbim despre comandă.',
  cta: 'Comandă o mandala',
  imagineLegenda: 'Auriu pe albastru regal. A ta va fi lucrată la fel, cu simbolurile și culorile tale.',
};

export const intrebari = {
  titlu: 'Întrebări frecvente',
  lista: [
    {
      q: 'Trebuie să știu dinainte ce simboluri vreau?',
      a: 'Nu. Îmi poți spune doar pentru cine e și ce vrei să-ți amintească. Îți propun eu simboluri și îți spun ce înseamnă fiecare, iar tu alegi.',
    },
    {
      q: 'Pot alege culorile?',
      a: 'Da. Le poți alege tu, îmi poți spune doar ce culori nu vrei sau mă poți lăsa să le aleg eu după ce vorbim. La mandala după data nașterii, culorile vin din cifre, iar nuanțele le alegem împreună.',
    },
    {
      q: 'Pot face cadou o mandala?',
      a: 'Da. Spune-mi câteva lucruri despre omul care o primește, de pildă ce iubește și ce i-ai dori, și pornesc de acolo. Dacă e pentru o zi anume, spune-mi data din primul mesaj.',
    },
    {
      q: 'Cum se calculează mandala după data nașterii?',
      a: 'Folosesc o metodă des întâlnită: scriu data cifră cu cifră (12.03.1945 devine 1 2 0 3 1 9 4 5), adaug aceleași cifre în ordine inversă și adun cifrele vecine, rând cu rând, până rămâne una singură. Când suma are două cifre, le adun și pe ele (13 devine 4). Fiecare cifră primește o culoare, iar tabloul devine al tău prin nuanțe și prin pictura de mână.',
    },
    {
      q: 'Ce înseamnă culorile din mandala după data nașterii?',
      a: 'Îți arăt din ce cifră vine fiecare culoare, ca să poți urmări calculul. În numerologie, fiecărei cifre i se asociază și un înțeles, care diferă de la o școală la alta.',
    },
    {
      q: 'Pot face cadou o mandala după data nașterii cuiva?',
      a: 'Da. Îmi ajunge data de naștere a persoanei care primește tabloul și, dacă vrei, ocazia.',
    },
    {
      q: 'Este pictată chiar de mână?',
      a: 'Da. Pictez fiecare mandala cu mâna, pe pânză. Fotografiile de pe site sunt ale lucrărilor mele.',
    },
    {
      q: 'Pot comanda o mandala ca una din galerie?',
      a: 'Da. Îmi arăți ce ți-a plăcut și o pictez din nou, de la zero, cu mâna. Putem păstra modelul sau îl schimbăm: alte culori, alte simboluri. Fiecare punct e pus cu mâna, așa că nu iese niciodată identică.',
    },
    {
      q: 'Cât durează?',
      a: 'Termenul ți-l spun când stabilim detaliile. Dacă ai nevoie de mandala pentru o zi anume, spune-mi data încă din primul mesaj.',
    },
    {
      q: 'Pot returna mandala?',
      a: 'Mandalele sunt pictate la comandă, după indicațiile tale, deci sunt produse personalizate. Potrivit art. 16 lit. c) din OUG nr. 34/2014, pentru ele nu se aplică dreptul de retragere de 14 zile. Ai însă garanția legală de conformitate de 2 ani de la livrare (OUG nr. 140/2021).',
    },
  ],
};

export const contact = {
  titlu: 'Comandă o mandala',
  text: 'Sună-mă sau scrie-mi. Îți răspund personal.',
  listaTitlu: 'Ca să pornim, spune-mi:',
  lista: [
    'pentru cine este: pentru tine sau cadou pentru cineva drag',
    'data nașterii, dacă vrei o mandala după data nașterii',
    'ocazia, dacă există: o zi de naștere, o nuntă, un botez',
    'ce vrei să-ți amintească',
    'culorile care îți plac și cele pe care nu le vrei',
    'simbolurile care contează pentru tine, dacă ai deja câteva în minte',
    'unde va sta tabloul',
  ],
  telefonEticheta: 'Telefon sau SMS',
  sunaButon: 'Sună-mă',
  smsButon: 'Trimite un SMS',
  emailEticheta: 'E-mail',
  emailButon: 'Scrie-mi un e-mail',
  copiaza: 'Copiază adresa',
  copiat: 'Adresa a fost copiată.',
};

export const subsol = {
  text: 'Mandale personale pictate de mână pe pânză, la comandă, pentru tine sau de făcut cadou.',
  comenziTitlu: 'Comenzi',
  actualizat: 'Pagină actualizată la',
};
