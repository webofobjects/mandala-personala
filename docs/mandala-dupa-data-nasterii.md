# Mandala după data nașterii

Cercetare făcută pe 12 noiembrie 2026, pentru secțiunea „Mandala după data nașterii” de pe site. Textul de pe site e în `src/data/continut.ts` (secțiunea `dataNasterii` și întrebările despre data nașterii).

Cercetare din 12.11.2026. Pe scurt: ideea se potrivește site-ului dacă o prezinți ca pe un fel de a compune tabloul (cifrele datei devin culori și rânduri de puncte), nu ca pe o „citire” a vieții cuiva. Ceilalți vând mai ales calcule, PDF-uri și printuri, cu promisiuni de energie și destin; o mandala pictată de mână și explicată cinstit aproape că nu există.

## 1. Ce este și cum se calculează

E un desen în cerc în care cifrele datei de naștere hotărăsc culorile și ordinea lor, după reguli luate din numerologie. Nu ține de mandalele din hinduism și budism: acelea nu pornesc de la data nașterii. Nu există un calcul unic. Metoda cea mai des întâlnită (în sursele rusești din care vine și la generatorul gratuit light-mandala.com):

1. Scrii data zi-lună-an, cu 0 în față unde e cazul: 12.03.1945 → 1 2 0 3 1 9 4 5.
2. Adaugi după ele aceleași 8 cifre, în ordine inversă. Rândul 1: 1 2 0 3 1 9 4 5 5 4 9 1 3 0 2 1.
3. Aduni fiecare două cifre vecine și scrii suma dedesubt, între ele. Dacă suma are două cifre, le aduni și pe ele (10 → 1, 13 → 4, 18 → 9).
4. Repeți până rămâne o singură cifră: 16 rânduri, 136 de cifre, un triunghi. Fiecare rând se citește la fel din ambele capete; așa îți verifici calculul.
5. Fiecare cifră primește o culoare. Tabelul obișnuit: 1 roșu, 2 albastru închis, 3 verde, 4 galben, 5 bleu, 6 turcoaz, 7 roz, 8 portocaliu, 9 violet; 0 e roșu într-o sursă, alb în alta. Tabelele diferă de la o școală la alta.
6. Triunghiul se repetă de 6 ori în jurul centrului, ca un hexagon: rândul 1 pe margine, ultima cifră în centru. Se pictează de la centru spre margine.

Exemplul complet (din sursa rusă, verificat rând cu rând):

```
1 2 0 3 1 9 4 5 5 4 9 1 3 0 2 1
 3 2 3 4 1 4 9 1 9 4 1 4 3 2 3
  5 5 7 5 5 4 1 1 4 5 5 7 5 5
   1 3 3 1 9 5 2 5 9 1 3 3 1
    4 6 4 1 5 7 7 5 1 4 6 4
     1 1 5 6 3 5 3 6 5 1 1
      2 6 2 9 8 8 9 2 6 2
       8 8 2 8 7 8 2 8 8
        7 1 1 6 6 1 1 7
         8 2 7 3 7 2 8
          1 9 1 1 9 1
           1 1 2 1 1
            2 3 3 2
             5 6 5
              2 2
               4
```

Ultima cifră e 4, deci centrul e galben. La pictura cu puncte, o cifră = un punct: 136 de puncte pe triunghi, 816 pe hexagon. Pe o pânză rotundă, rândurile pot deveni 16 cercuri, de la 96 de puncte pe margine la 6 în centru (propunere, nu regulă).

Variante:
- **După nume:** fiecare literă are o cifră (A J S = 1, B K T = 2, C L U = 3, D M V = 4, E N W = 5, F O X = 6, G P Y = 7, H Q Z = 8, I R = 9; Ă și Â ca A, Î ca I, Ș ca S, Ț ca T). Cu cifrele numelui (plus aceleași cifre în ordine inversă) faci la fel triunghiul: MARIA → 4 1 9 9 1 → … → 8 (portocaliu). E o adaptare: e-mandala.ro are o „mandala a numelui”, dar nu-și publică regulile.
- **O culoare principală:** aduni cifrele datei până rămâne una: 1+2+0+3+1+9+4+5 = 25 → 2+5 = 7 (roz).
- **După harta astrologică:** cere ora și locul nașterii; e altă meserie și înseamnă mai multe date personale. Nu o recomand.

**De unde vine.** „Mandala” înseamnă „cerc” în sanscrită, dar metoda cu data e nouă. Sursele, mai ales rusești, o atribuie Ursulei Irrgang, prezentată când ca cercetătoare austriacă, când ca matematiciană germană care ar fi creat-o prin 1992–1993; nu s-a găsit nicio sursă sigură despre ea. În România, cel mai cunoscut sistem e e-mandala.ro (Gabriel Munteanu și Vlad T. Popescu), care spune că prima versiune e inspirată de ea; pe el se sprijină și unii consultanți de numerologie. Regulile cu cifre vin din numerologia modernă, formată la începutul secolului XX (de pildă în cărțile scrise de L. Dow Balliett, 1904–1908), nu de la Pitagora.

**Ce statut are.** E o practică modernă, o credință, fără bază științifică; chiar e-mandala.ro scrie că interpretările nu pot fi dovedite științific și sunt subiective. Sigură e doar aritmetica: aceeași dată dă mereu același triunghi, deci toți cei născuți în aceeași zi au același calcul. Tabloul devine personal prin pictură, nuanțe și ce adaugi tu.

## 2. Ce oferă alții și unde te deosebești

Aproape nimeni nu pictează. Găsești: calcule gratuite online (e-mandala.ro, light-mandala.com, un tutorial pe astrotext.ro); interpretări și consultații (un PDF de o pagină, 200 lei, la sfat.info.ro; astrologie și Tarot cu consultație, 450 lei, la Cartea Magului); un fișier digital de printat (350 lei la EmRys, care cere și ora nașterii); obiecte imprimate (print, cană, breloc, 55–85 lei la FOLconcept, prețuri din pagini vechi); ateliere (180–450 lei).

Un singur concurent direct găsit: Ezo-Gift-Shop (totceeaceeste.ro) pictează cu puncte, pe pânză, după nume și data nașterii, în 20, 30 sau 40 cm, fără prețuri afișate (comenzi pe OLX sau e-mail). Promite că mandala aduce calm și pace, „vibrează” cu omul și acționează asupra corpului și a psihicului.

Pentru comparație, mandalele decorative cu puncte, fără dată (Ezera), costă cam 230–285 lei la 30 cm și 950–1.120 lei la 60 cm. La 30 × 30 cm, 299 lei e un preț bun.

Aproape toți promit destin, „misiune”, energie, vibrații, deblocări sau efecte asupra sănătății. Dintre site-urile românești găsite, doar e-mandala.ro și sfat.info.ro (ambele legate de Vlad T. Popescu) spun deschis că e subiectiv și nedovedit științific.

Te deosebești prin:
- pictură adevărată, punct cu punct, nu print, PDF sau fișier;
- cinste: spui că e o credință, nu o prezicere;
- calculul arătat deschis, pe site și clientului, ca „povestea tabloului”;
- prețul afișat (concurentul direct nu-l afișează);
- ce adaugi tu: nuanțele, auriul, mâna ta. Data singură nu face tabloul unic.

## 3. Cum s-o prezinți cinstit

**Metoda.** Recomand calculul de la punctul 1: e cel pe care îl caută oamenii și îl poți arăta deschis. Fă întâi o probă pe o dată din familie. Dacă nu-ți plac culorile date de tabel (de exemplu, vrei auriul și albastrul tău), folosește o regulă proprie: cifrele dau numărul de petale și de cercuri, iar suma lor, culoarea principală. Oricare ar fi, pe site scrii exact ce faci.

**Ce să spui:**
- ce faci, concret: „pornesc de la cifrele datei”, „le adun rând cu rând”, „pictez punct cu punct”;
- o singură dată, clar și la vedere: numerologia e o practică modernă, o credință, nu o știință, iar tu o folosești ca regulă de desen, nu ca prezicere;
- emoția ca emoție: „o zi care contează”, „un cadou cu poveste”;
- credința ca credință: „în numerologie, cifrei 7 i se asociază…”.

**Ce să nu spui**, nici pe site, nici pe Facebook sau OLX: energie, vibrații, armonie, echilibru; vindecă, terapie, stres, anxietate; protecție, amuletă; noroc, abundență, „atrage bani sau iubire”; destin, menire, misiune, karmă, „numărul destinului”; „îți dezvăluie personalitatea”; „tradiție milenară” sau „tibetană” (despre metoda cu data); „dovedit științific”; „calculată” doar dacă chiar calculezi.

**De ce.** Legea 363/2007 interzice promisiunile de rezultate pe care nu le poți dovedi, iar afirmația că un produs vindecă e interzisă în orice situație. Contează impresia de ansamblu, deci un avertisment la final nu salvează un titlu care promite. Cine caută așa ceva crede adesea în numerologie, iar pentru astfel de clienți legea cere mai multă grijă. Amenda: 20.000–100.000 lei. (Informativ; de verificat cu un jurist.)

**Datele personale:**
- Ceri doar ziua, luna și anul (plus prenumele, dacă îl folosești): nu ora, nu locul nașterii, nu CNP-ul. La un cadou ajunge data persoanei care îl primește, fără numele complet.
- Fraza „o șterg după ce primești tabloul” o scrii doar dacă o ștergi cu adevărat peste tot: SMS-uri, e-mailuri, notițe, schițe. Altfel: „o păstrez doar cât lucrez la comandă”.
- Cine știe metoda poate citi data din culorile marginii, așa că pentru fotografiile din galerie cere acordul, ca la numele și datele pictate.
- Data nașterii e o dată personală, dar nu „sensibilă”; o poți cere dacă o folosești doar pentru tablou. Trece-o în pagina de confidențialitate, când o faci. Pentru data altcuiva, primită la un cadou, cere părerea unui jurist.
- În lista „Ca să pornim, spune-mi” de pe site apare deja „data nașterii, dacă vrei o mandala după data nașterii”.

**Cuvinte pentru Google** (sugestii Google verificate pe 12.11.2026):
- principalul: „mandala după data nașterii”, în titlul secțiunii și într-o întrebare;
- natural, în text: „mandala data nașterii”, „mandala zilei de naștere”, „mandala numerologică” (ca „inspirată din numerologie”);
- „calcul mandala zi de naștere” și „calcul mandala personală”: întrebarea „Cum se calculează…?”; „interpretare mandala personală”: întrebarea despre culori;
- „mandala numelui” doar dacă faci și varianta după nume;
- rămân de bază „mandala personală”, „tablou mandala”, „mandala cu puncte”; „mandala zodiac” nu merită.

Scrie cu diacritice; Google găsește pagina și când oamenii caută fără. Cine caută „calcul…” vrea de obicei un calculator gratuit: pagina îi explică metoda și îi oferă ce nu-i dă un calculator, tabloul pictat.

## 4. De confirmat înainte de publicare

1. Folosești calculul de la punctul 1 sau o regulă proprie? Textul descrie exact ce faci.
2. Ce tabel de culori: cel obișnuit sau al tău? Ce culoare primește 0? Unde intră auriul (contur, fundal, în locul galbenului)?
3. Ce formă și ce mărime: hexagonul din 6 triunghiuri (816 puncte) sau 16 cercuri pe pânză rotundă? Încape frumos pe pânza de 299 lei?
4. Iei și prenumele? Ești de acord cu Ă/Â → A, Î → I, Ș → S, Ț → T?
5. Îi dai clientului calculul în scris (schița cu cifre și culori, pe hârtie sau ca poză)? Explici și sensurile din numerologie sau doar de unde vine fiecare culoare?
6. Prețul și termenul rămân aceleași?
7. Ștergi cu adevărat data după livrare? Scrii data pe tablou (față sau spate)? Arăți în galerie mandalele clienților făcute după data nașterii?
8. Ai deja o mandala după data nașterii, pentru o fotografie în secțiune?
9. Vrei și variante pentru cuplu (după data nunții) sau pentru un nou-născut? Ocaziile sunt deja pe site.

## Surse

Metoda:
- https://nsportal.ru/detskiy-sad/raznoe/2015/12/13/prezentatsiya-na-temu-mandala-i-mandaloterapiya-sozdanie-mandaly-po (pașii, exemplul 12.03.1945, culorile; în rusă)
- https://stranamasterov.ru/node/1073456 (pictat de la centru, variante; în rusă)
- https://light-mandala.com (generator gratuit; spune că nu e ghicit și nu înlocuiește sfatul medical)
- https://www.astrotext.ro/2013/04/mandala-datei-de-nastere/ (altă metodă, în română)

Originea și statutul:
- https://e-mandala.ro/ și https://e-mandala.ro/istoria (generatorul românesc, avertismentul, legătura cu Irrgang)
- https://www.dcode.fr/pythagorean-numerology (tabelul literelor)
- https://en.wikipedia.org/wiki/Numerology și https://en.wikipedia.org/wiki/Mrs._L._Dow_Balliett

Piața:
- https://totceeaceeste.ro/ezo-gift-shop/ (concurentul direct)
- https://www.emrys.ro/mandala_natala_personala (fișier digital, 350 lei)
- https://sfat.info.ro/wordpress/?p=284 (interpretare PDF, 200 lei)
- https://folconcept.ro/produse-cu-mandala-personala/ (obiecte imprimate)
- https://carteamagului.ro/tarot/mandala-personala-in-tarot/ (pachet cu Tarot, 450 lei)
- https://ezera.ro/tablouri-mandala (prețuri pentru mandale cu puncte)

Legea și datele personale:
- https://legislatie.just.ro/Public/DetaliiDocument/88290 (Legea 363/2007, forma din 27.03.2026: art. 6, art. 15, Anexa 1 pct. 17)
- https://eur-lex.europa.eu/legal-content/RO/TXT/?uri=CELEX:32016R0679 (GDPR) și https://www.dataprotection.ro/

Căutările:
- https://suggestqueries.google.com/complete/search?client=firefox&hl=ro&gl=ro&q=mandala%20dupa%20 (și variante)

Verificat pe 12.11.2026: calculul refăcut pentru 12.03.1945 și 12.11.2026 se potrivește cu sursele; pagina Ezo-Gift-Shop; avertismentul de pe e-mandala.ro; art. 15 și Anexa 1 pct. 17 din Legea 363/2007. Facebook, Instagram și OLX nu s-au putut citi; unele prețuri vin din pagini vechi.