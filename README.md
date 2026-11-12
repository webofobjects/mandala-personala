# mandalapersonala.ro

Pagina de prezentare pentru mandalele personale pictate manual. Făcută cu [Astro](https://astro.build) și [Tailwind CSS](https://tailwindcss.com), fără bază de date și fără cookie-uri: rezultatul este un site static, care se poate găzdui gratuit.

**Înainte de lansare:** citește [docs/de-completat.md](docs/de-completat.md). Acolo sunt informațiile pe care doar tu le poți da (dimensiunea pânzei, termenul, livrarea, plata) și ce cere legea pentru un site care vinde.

## Pornire

Ai nevoie de Node.js 22.22 sau mai nou.

```bash
npm install
```

```bash
npm run dev
```

Site-ul se deschide la http://localhost:4321.

## Ce modifici și unde

| Vrei să schimbi | Fișier |
| --- | --- |
| prețul, telefonul, adresa de e-mail, mesajul precompletat din e-mail | `src/data/site.ts` |
| textele de pe pagină (titluri, beneficii, întrebări, pași) | `src/data/continut.ts` |
| lucrările din galerie: ordinea, descrierile | `src/data/lucrari.ts` |
| culorile și fonturile | `src/styles/global.css` |

În titluri, un cuvânt pus între steluțe, de exemplu `*punct cu punct*`, apare scris cursiv.

## Adaugi o lucrare nouă

1. Pune fotografia în folderul `poze mandale/`.
2. În `scripts/prepare-images.mjs`, adaugă un rând în lista `works`, de forma `'25.jpeg': 'nume-scurt-fara-diacritice'`.
3. Rulează:

   ```bash
   npm run imagini
   ```

4. În `src/data/lucrari.ts`, adaugă lucrarea în listă, cu același `slug`, un titlu scurt și o descriere (`alt`) a ce se vede în imagine.

Astro micșorează și convertește singur imaginile (WebP/AVIF) la publicare.

## Publicare

```bash
npm run build
```

Rezultatul e în folderul `dist/`. Se poate publica pe Netlify, Cloudflare Pages sau Vercel (comanda de build: `npm run build`, folderul publicat: `dist`). Apoi domeniul `mandalapersonala.ro` se leagă de serviciul ales, din panoul firmei de la care e cumpărat domeniul.

## Verificare

```bash
npm run check
```

## Fonturi

Titlurile folosesc Fraunces, iar textul Instrument Sans, ambele găzduite odată cu site-ul (fără Google Fonts). Fișierele din `src/fonts/` sunt reduse doar la caracterele folosite în română, cu scriptul `scripts/subset-fonts.py` (necesită Python și `pip install fonttools brotli`). Nu trebuie rulat din nou decât dacă schimbi fonturile.
