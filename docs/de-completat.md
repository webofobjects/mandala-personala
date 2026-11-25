# De completat înainte de lansare

Site-ul spune doar lucruri adevărate pentru orice comandă. Ce urmează ține de tine: informații pe care nu le-am putut ști și care, adăugate, fac pagina mai credibilă (și o aduc în regulă cu legea). Lângă fiecare punct am notat unde se modifică.

## 1. Despre comandă (cel mai important)

Clienții le caută primele, iar acum lipsesc de pe pagină:

- [ ] **Dimensiunea pânzei** pentru 299 lei (de exemplu 30 × 30 cm) și, dacă există, alte dimensiuni cu prețul lor. Prețul se judecă după mărime: la 30 × 30 cm, 299 lei e un preț ușor de apărat; la 40 × 40 cm e sub piață.
- [ ] **Materialele**: culori acrilice? auriu metalizat? pânză pe șasiu de lemn? lac de protecție?
- [ ] **Ce mai intră în preț**: semnătura pe lucrare, agățătoarea, o explicație scrisă a simbolurilor, ambalajul de cadou. Scrie pe site doar ce oferi la fiecare comandă.
- [ ] **Termenul**: în cât timp e gata o mandala (de exemplu 7–14 zile lucrătoare) și până când se mai poate comanda pentru Crăciun.
- [ ] **Schița**: trimiți o schiță sau culorile spre aprobare înainte să începi?
- [ ] **Fotografia înainte de expediere**: o trimiți? Câte modificări se pot cere?
- [ ] **Livrarea**: curierul (FAN Courier, Sameday/easybox, Cargus, Poșta Română), costul (sau „transport inclus”), dacă e asigurat, dacă trimiți și în străinătate.
- [ ] **Plata**: transfer bancar, card, ramburs? Ceri avans (și cât)?
- [x] **Reproduceri**: confirmat, nu vinzi printuri. Fiecare mandala e pictată de mână, iar un model din galerie se poate picta din nou, de la zero.

Unde se modifică: textele sunt în `src/data/continut.ts` (secțiunile `pret`, `proces`, `intrebari`), iar prețul în `src/data/site.ts`.

### Mandala după data nașterii

Pe site scrie acum că, la cerere, pornești de la data nașterii: scrii cifrele datei, le adaugi și în ordine inversă, le aduni rând cu rând până rămâne o cifră, iar fiecare cifră primește o culoare. Exemplul ilustrat folosește tabelul de culori cel mai des întâlnit. Cercetarea completă (metoda, concurența, ce să nu promiți) e în [mandala-dupa-data-nasterii.md](mandala-dupa-data-nasterii.md). Confirmă:

- [ ] Folosești chiar metoda asta, sau alta? Dacă alta, spune-mi cum și schimb textul.
- [ ] Ce culori dai cifrelor (tabelul de pe site sau al tău)? Unde intră auriul?
- [ ] Îi arăți clientului calculul (din ce cifră vine fiecare culoare)? Pe site scrie că da.
- [ ] Prețul și termenul sunt aceleași ca la celelalte mandale?
- [ ] Iei și prenumele în calcul? Dacă da, adaug și varianta „mandala numelui” (oamenii o caută în Google).
- [ ] Ce faci cu data după ce termini tabloul? Pe pagină nu scrie nimic despre asta; locul ei e în pagina de confidențialitate, când o faci (vezi punctul 8 de mai jos).
- [ ] Ai o mandala pictată după data nașterii? O fotografie a ei ar arăta mai bine decât exemplul cu cifre.

## 2. Despre tine

Acum pe pagină nu apare nimeni: nici un nume, nici o fotografie cu cine pictează. Asta e cel mai mare lucru care ar face site-ul să arate „al cuiva”:

- [ ] numele pe care vrei să-l afișezi;
- [ ] o fotografie reală: mâinile tale lucrând la o pânză sau tu ținând o mandala terminată (pe verticală, cel puțin 1200 px);
- [ ] orașul sau județul;
- [ ] de când pictezi și de ce, una-două întâmplări adevărate (prima mandala, mandala cu harta României);
- [ ] orele la care răspunzi la telefon.

Fotografii care ar ajuta mult în galerie: punctele de foarte aproape, cu auriul prinzând lumina; o pânză din unghi (se vede grosimea și marginea); o mandala pe perete, ca să se înțeleagă mărimea; câteva poze din timpul lucrului. Unele fișiere par salvate de pe rețele sociale (de exemplu `20.jpeg`, `11.jpg`); dacă ai originalele din telefon, sunt mai clare.

Pentru fiecare lucrare din galerie poți adăuga, dacă vrei: dimensiunea, anul, aproximativ câte ore de lucru. Dacă unele sunt comenzi ale altor oameni, cere-le acordul să le arăți.

## 3. Ce cere legea (informativ, nu este consultanță juridică)

Verifică punctele de mai jos cu un contabil sau jurist. Sursele sunt cele găsite la cercetare, pe 12 noiembrie 2026.

1. **Datele de identificare** (Legea 365/2002, art. 5): numele complet sau denumirea PFA, adresa, numărul de la Registrul Comerțului și CUI-ul (dacă ești înregistrat), dacă plătești TVA. Trebuie să fie vizibile permanent, de exemplu în subsolul paginii. Nu publica niciodată CNP-ul.
2. **Înregistrarea**: vânzările repetate, la preț fix, printr-un site public arată ca o activitate economică. Drumul obișnuit e un PFA cu codul CAEN 9012, „Activități de creație în domeniul artelor vizuale”. Cere o părere scrisă unui contabil înainte de lansare.
3. **Pictograma ANPC SAL** (250 × 50 px, pe pagina principală, cu legătură spre https://reclamatiisal.anpc.ro). Descarcă varianta actuală de pe anpc.ro. Vechea pagină `anpc.ro/ce-este-sal/` nu mai există. Legătura spre platforma europeană SOL/ODR nu mai e necesară (platforma a fost închisă pe 20 iulie 2025).
4. **Informațiile dinainte de comandă** (OUG 34/2014, art. 6): dimensiunea, materialele, prețul total cu livrarea, plata și avansul, termenul, modul de livrare, garanția.
5. **Dreptul de retragere**: pentru produsele personalizate nu se aplică cele 14 zile (OUG 34/2014, art. 16 lit. c). Clientul trebuie anunțat înainte de comandă; textul e deja în întrebările de pe pagină.
6. **Garanția legală de conformitate** de 2 ani (OUG 140/2021) și, din 27 septembrie 2026, notificarea armonizată a UE despre garanția legală. Textul oficial în română e pe pagina Comisiei Europene: https://commission.europa.eu/publications/harmonised-notice-legal-guarantee-conformity-and-harmonised-label-commercial-guarantee-durability_en
7. **Confirmarea comenzii** pe e-mail (OUG 34/2014, art. 8): cu descrierea mandalei, prețul total, plata, termenul, livrarea, nota despre retragere și garanție. Pentru comenzile la telefon, cere un răspuns scris („Confirm comanda”).
8. **Confidențialitatea** (GDPR, art. 13): o pagină scurtă care spune cine ești, ce date primești (nume, telefon, adresă de livrare), de ce, cât le păstrezi, cui le dai (curier, contabil), ce drepturi are omul și că se poate plânge la ANSPDCP (www.dataprotection.ro).
9. **Recenziile**: doar reale, cu acordul oamenilor. Dacă le afișezi, spune cum le verifici.

Ce **nu** e nevoie, cât timp site-ul rămâne așa: banner de cookie-uri (site-ul nu folosește cookie-uri, statistici sau fonturi de la Google; dacă adaugi Google Analytics, Facebook Pixel sau o hartă Google, ai nevoie de banner).

## 4. Texte gata de folosit

**Subsol, după ce ai datele:**

> [Nume și prenume / denumirea PFA] · [localitatea, județul] · Telefon: 0742 001 605 · E-mail: geo_valy@yahoo.com · [Nr. ONRC: F__/____/____] · [CUI: ________] · [Prețurile sunt finale; nu se adaugă TVA.]

**Pentru confirmarea comenzii și pentru fotografii:**

> După ce termin o mandala, o fotografiez și pot arăta fotografia pe site și pe paginile mele. Dacă nu vrei asta, spune-mi. Numele sau datele pictate în lucrare nu le public fără acordul tău.

**Pentru subsol, dacă rămâne adevărat:**

> Site-ul nu folosește cookie-uri, nu are formulare și nu folosește instrumente de urmărire. Datele pe care mi le dai la telefon sau prin e-mail le folosesc doar pentru comanda ta.

## 5. Vizibilitate în Google (după ce site-ul e online)

Pagina e deja pregătită pentru căutări: titlul, descrierea și titlurile secțiunilor folosesc ce caută oamenii în română (am verificat sugestiile Google pe 12 noiembrie 2026): „tablou pictat manual pe pânză”, „tablou mandala”, „mandala pictată”, „mandala personalizată”, „cadou personalizat”, „cadou cu semnificație”. Are și datele structurate pentru Google (produs cu preț, întrebări frecvente, numele site-ului) și o hartă a site-ului.

Ce mai poți face tu:

- [ ] Adaugă site-ul în **Google Search Console** (gratuit) și trimite harta site-ului: `https://mandalapersonala.ro/sitemap-index.xml`.
- [ ] Pune linkul spre site pe paginile tale de Facebook sau Instagram. Dacă îmi dai adresele lor, le adaug și în datele pentru Google.
- [ ] Când ai recenzii reale (de exemplu pe Google), cu acordul clienților, se pot arăta pe pagină.
- [ ] Online, „mandala personală” înseamnă uneori o mandala „calculată” după data nașterii. Dacă folosești și tu data nașterii, spune-mi și adaug o întrebare despre asta; dacă nu, pagina rămâne așa.

## 6. Unde se schimbă ce

| Ce | Fișier |
| --- | --- |
| prețul, telefonul, e-mailul, mesajul precompletat din e-mail | `src/data/site.ts` |
| toate textele de pe pagină | `src/data/continut.ts` |
| descrierile lucrărilor din galerie | `src/data/lucrari.ts` |
| subsolul (date de identificare, pictograma ANPC) | `src/components/Footer.astro` |
