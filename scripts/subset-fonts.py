"""
Reduce fonturile la caracterele folosite pe un site în limba română.

Sursa: fișierele variabile din @fontsource-variable (instalate cu npm).
Rezultat: src/fonts/*.woff2, folosite în src/styles/fonts.css.

Rulare (o singură dată, sau după ce schimbi fonturile):
    pip install fonttools brotli
    python scripts/subset-fonts.py
"""
from pathlib import Path

from fontTools import subset
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
NM = ROOT / "node_modules" / "@fontsource-variable"
OUT = ROOT / "src" / "fonts"
OUT.mkdir(parents=True, exist_ok=True)

# Latin de bază + ce mai apare în texte românești (â, î, ghilimele „”, linii, puncte de suspensie…)
LATIN = (
    list(range(0x20, 0x7F))
    + [0xA0, 0xA9, 0xAB, 0xB0, 0xB7, 0xBB, 0xD7, 0xC2, 0xE2, 0xCE, 0xEE, 0xE4, 0xE8, 0xE9, 0xF6, 0xFC, 0xC9, 0xD6, 0xDC]
    + [0x2009, 0x2011, 0x2013, 0x2014, 0x2018, 0x2019, 0x201A, 0x201C, 0x201D, 0x201E, 0x2022, 0x2026, 0x202F, 0x2032, 0x20AC, 0x2122]
)
# Literele românești din Latin Extended: Ă ă Ș ș Ț ț (+ variantele vechi cu sedilă și semnele combinate)
LATIN_EXT_RO = [0x102, 0x103, 0x218, 0x219, 0x21A, 0x21B, 0x15E, 0x15F, 0x162, 0x163, 0x302, 0x306, 0x326, 0x327]


def hexranges(cps):
    return ",".join(f"U+{c:04X}" for c in sorted(set(cps)))


def run(src: Path, dst: Path, codepoints):
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["*"]
    opts.name_IDs = ["*"]
    opts.name_languages = ["*"]
    opts.notdef_outline = True
    opts.glyph_names = False
    font = subset.load_font(str(src), opts)
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=codepoints)
    sub.subset(font)
    # Titlurile folosesc doar grosimea 400: păstrăm numai axa „opsz” (forma după mărime).
    if dst.name.startswith("fraunces-"):
        font = instancer.instantiateVariableFont(font, {"wght": 400})
    subset.save_font(font, str(dst), opts)
    print(f"{dst.name:44s} {src.stat().st_size // 1024:4d} KB -> {dst.stat().st_size // 1024:4d} KB")


JOBS = [
    ("fraunces/files/fraunces-latin-opsz-normal.woff2", "fraunces-normal-latin.woff2", LATIN),
    ("fraunces/files/fraunces-latin-ext-opsz-normal.woff2", "fraunces-normal-ro.woff2", LATIN_EXT_RO),
    ("fraunces/files/fraunces-latin-opsz-italic.woff2", "fraunces-italic-latin.woff2", LATIN),
    ("fraunces/files/fraunces-latin-ext-opsz-italic.woff2", "fraunces-italic-ro.woff2", LATIN_EXT_RO),
    ("instrument-sans/files/instrument-sans-latin-wght-normal.woff2", "instrument-sans-latin.woff2", LATIN),
    ("instrument-sans/files/instrument-sans-latin-ext-wght-normal.woff2", "instrument-sans-ro.woff2", LATIN_EXT_RO),
]

for src, dst, cps in JOBS:
    run(NM / src, OUT / dst, cps)

print("\nunicode-range latin:", hexranges(LATIN))
print("unicode-range ro:   ", hexranges(LATIN_EXT_RO))
