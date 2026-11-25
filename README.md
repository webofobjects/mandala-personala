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

## Publicare pe GitHub Pages

Site-ul se publică singur la fiecare `git push` pe ramura `main`, prin `.github/workflows/deploy.yml`. Fișierul `public/CNAME` păstrează domeniul `mandalapersonala.ro`.

O singură dată, în repo-ul de pe GitHub:

1. **Settings → Pages**: la Source alegi **GitHub Actions**, iar la Custom domain scrii `mandalapersonala.ro`.
2. La firma domeniului (Claus Web), în zona DNS (nu la nameservere):

   | Tip | Nume | Valoare |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | webofobjects.github.io |

   Șterge vechile înregistrări A/AAAA/CNAME pentru `@` și `www`; nu atinge înregistrările MX (e-mailul).
3. După ce DNS-ul s-a propagat (până la 24 de ore), bifezi **Enforce HTTPS** în Settings → Pages.

Progresul fiecărei publicări se vede în tab-ul **Actions** al repo-ului.

Ca să vezi local varianta finală:

```bash
npm run build
```

```bash
npm run preview
```

Fișierul `public/_headers` contează doar dacă muți site-ul pe Netlify sau Cloudflare Pages; GitHub Pages îl ignoră.

## Verificare

```bash
npm run check
```

## Fonturi

Titlurile folosesc Fraunces, iar textul Instrument Sans, ambele găzduite odată cu site-ul (fără Google Fonts). Fișierele din `src/fonts/` sunt reduse doar la caracterele folosite în română, cu scriptul `scripts/subset-fonts.py` (necesită Python și `pip install fonttools brotli`). Nu trebuie rulat din nou decât dacă schimbi fonturile.
