// Pregătește imaginile pentru site, pornind de la fotografiile originale din „poze mandale/”.
//  - copiază fiecare lucrare în src/assets/lucrari/ cu un nume descriptiv
//  - decupează detalii (simboluri, textura punctelor) în src/assets/detalii/
//  - generează imaginea de partajare (public/og.jpg) și iconițele
// Rulare: node scripts/prepare-images.mjs
import sharp from 'sharp';
import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'poze mandale');
const OUT_WORKS = path.join(root, 'src', 'assets', 'lucrari');
const OUT_DETAILS = path.join(root, 'src', 'assets', 'detalii');
const PUBLIC = path.join(root, 'public');

// fișier original -> nume în site (o singură fotografie pentru fiecare pictură)
export const works = {
  '1.jpeg': 'trandafir-in-inima',
  '2.jpeg': 'coroana-floarea-vietii-trandafiri',
  '3.jpeg': 'lotus-auriu-in-patrat',
  '4.jpeg': 'coroana-floarea-vietii-curcubeu',
  '5.jpeg': 'trandafir-pe-albastru',
  '6.jpeg': 'arborele-vietii-infinit',
  '7.jpeg': 'arborele-vietii-in-inima',
  '8.jpeg': 'cerc-de-inimi-trandafir',
  '9.jpg': 'floare-rosu-verde-argintiu',
  '10.jpg': 'bufnita',
  '11.jpg': 'floarea-vietii-raze-aurii',
  '12.jpg': 'ingerul',
  '13.jpg': 'cununa-de-flori',
  '14.jpeg': 'samanta-vietii-albastru-regal',
  '16.jpeg': 'floarea-vietii-gradina',
  '17.jpeg': 'coroana-floare-lila',
  '18.jpeg': 'lotusi-pe-albastru',
  '19.jpeg': 'floarea-vietii-lotusi-roz',
  '21.jpeg': 'romania-floarea-vietii',
  '22.jpeg': 'spirala-de-cercuri',
  '23.jpeg': 'floarea-vietii-ochi-de-paun',
  '24.jpeg': 'samanta-vietii-auriu-indigo',
};
// 20.jpeg este aceeași pictură ca 11.jpg, iar 15.jpeg aceeași cu 23.jpeg (altă lumină) — nu le dublăm.

// decupaje: [sursă, nume, left, top, size] (coordonate în pixeli pe original)
const crops = [
  ['19.jpeg', 'simbol-floarea-vietii', 450, 460, 1100],
  ['6.jpeg', 'simbol-arborele-vietii', 205, 195, 330],
  ['18.jpeg', 'simbol-lotus', 735, 40, 450],
  ['1.jpeg', 'simbol-trandafir', 600, 500, 790],
  ['7.jpeg', 'simbol-inima', 190, 205, 330],
  ['17.jpeg', 'simbol-coroana', 760, 40, 460],
  ['12.jpg', 'simbol-inger', 105, 60, 560],
  ['10.jpg', 'simbol-bufnita', 90, 330, 990],
  ['24.jpeg', 'simbol-samanta-vietii', 560, 530, 910],
  ['23.jpeg', 'simbol-ochi-de-paun', 30, 25, 400],
  ['21.jpeg', 'simbol-romania', 50, 20, 1350],
  // texturi (macro) — candidate pentru secțiunea despre tehnică
  ['16.jpeg', 'textura-puncte-aurii', 760, 760, 560],
  ['14.jpeg', 'textura-petale-aurii', 980, 420, 560],
  ['1.jpeg', 'textura-inele-de-puncte', 40, 1250, 620],
  ['8.jpeg', 'textura-inimi', 300, 330, 620],
  ['3.jpeg', 'textura-centru-auriu', 540, 540, 960],
];

await mkdir(OUT_WORKS, { recursive: true });
await mkdir(OUT_DETAILS, { recursive: true });
await mkdir(PUBLIC, { recursive: true });

// Unele fotografii prind și peretele sau masa din jurul pânzei: le tăiem marginile
// (fracțiuni din lățime/înălțime: sus, dreapta, jos, stânga).
const margini = {
  '3.jpeg': [0.058, 0.04, 0.045, 0.04],
  '5.jpeg': [0.03, 0.03, 0.015, 0.047],
  '17.jpeg': [0.035, 0.005, 0.03, 0.027],
  '2.jpeg': [0.015, 0.02, 0.016, 0.035],
  '24.jpeg': [0.008, 0.012, 0, 0.017],
};

for (const [file, slug] of Object.entries(works)) {
  const src = path.join(SRC, file);
  const dst = path.join(OUT_WORKS, slug + '.jpg');
  const m = margini[file];
  if (!m) {
    await copyFile(src, dst);
    continue;
  }
  const [t, r, b, l] = m;
  const img = sharp(src).rotate();
  const { width: w, height: h } = await img.metadata();
  const left = Math.round(w * l);
  const top = Math.round(h * t);
  await img
    .extract({ left, top, width: Math.round(w * (1 - l - r)), height: Math.round(h * (1 - t - b)) })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(dst);
}

for (const [file, slug, left, top, size] of crops) {
  const img = sharp(path.join(SRC, file)).rotate();
  const meta = await img.metadata();
  const s = Math.min(size, meta.width - left, meta.height - top);
  await img
    .extract({ left, top, width: s, height: s })
    .resize(Math.min(s, 900), Math.min(s, 900))
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(OUT_DETAILS, slug + '.jpg'));
}

// Imagine de partajare 1200x630: trei lucrări pe fundal de hârtie caldă
{
  const W = 1200, H = 630, tile = 340, gap = 36;
  const picks = ['24.jpeg', '19.jpeg', '1.jpeg'];
  const startX = Math.round((W - (tile * 3 + gap * 2)) / 2);
  const y = Math.round((H - tile) / 2);
  const layers = [];
  for (let i = 0; i < picks.length; i++) {
    const buf = await sharp(path.join(SRC, picks[i])).rotate().resize(tile, tile, { fit: 'cover' }).toBuffer();
    // umbră discretă sub fiecare pânză
    const shadow = await sharp({
      create: { width: tile + 40, height: tile + 40, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    })
      .composite([{ input: Buffer.from(`<svg width="${tile + 40}" height="${tile + 40}"><rect x="20" y="28" width="${tile}" height="${tile}" fill="rgba(40,30,20,0.28)"/></svg>`) }])
      .blur(12)
      .png()
      .toBuffer();
    const x = startX + i * (tile + gap);
    layers.push({ input: shadow, left: x - 20, top: y - 20 });
    layers.push({ input: buf, left: x, top: y });
  }
  await sharp({ create: { width: W, height: H, channels: 3, background: '#f4eee2' } })
    .composite(layers)
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(PUBLIC, 'og.jpg'));
}

// Iconițe din favicon.svg (dacă există)
try {
  const svg = await readFile(path.join(PUBLIC, 'favicon.svg'));
  await sharp(svg, { density: 512 }).resize(180, 180).flatten({ background: '#f4eee2' }).png().toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
  await sharp(svg, { density: 512 }).resize(512, 512).png().toFile(path.join(PUBLIC, 'icon-512.png'));
  await sharp(svg, { density: 512 }).resize(192, 192).png().toFile(path.join(PUBLIC, 'icon-192.png'));
} catch (e) {
  console.warn('favicon.svg lipsește — sar peste iconițe:', e.message);
}

await writeFile(path.join(OUT_DETAILS, '.generated'), 'Generat de scripts/prepare-images.mjs\n');
console.log('Gata: %d lucrări, %d detalii.', Object.keys(works).length, crops.length);
