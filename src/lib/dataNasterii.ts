/**
 * Mandala după data nașterii: metoda cea mai des întâlnită.
 *  1. Cifrele datei (zz.ll.aaaa), urmate de aceleași cifre în ordine inversă: 16 cifre.
 *  2. Se adună cifrele vecine; o sumă de două cifre se reduce (10 → 1, 18 → 9).
 *  3. Se repetă până rămâne o singură cifră: un triunghi de 16 rânduri (136 de cifre).
 */
export function triunghi(data: string): number[][] {
  const cifre = data.replace(/\D/g, '').split('').map(Number);
  if (cifre.length !== 8) throw new Error(`Data trebuie să fie zz.ll.aaaa, nu „${data}”`);
  const rand = [...cifre, ...[...cifre].reverse()];
  const randuri = [rand];
  while (randuri[randuri.length - 1].length > 1) {
    const r = randuri[randuri.length - 1];
    randuri.push(r.slice(1).map((c, i) => {
      const s = r[i] + c;
      return s > 9 ? s - 9 : s;
    }));
  }
  return randuri;
}

/** Tabelul de culori folosit cel mai des (sursele diferă; 0 apare uneori roșu, alteori alb). */
export const culoriCifre: Record<number, { nume: string; hex: string }> = {
  0: { nume: 'alb', hex: '#f7f2e6' },
  1: { nume: 'roșu', hex: '#c62f2f' },
  2: { nume: 'albastru închis', hex: '#22378f' },
  3: { nume: 'verde', hex: '#2f7d3a' },
  4: { nume: 'galben', hex: '#f0c033' },
  5: { nume: 'bleu', hex: '#76b9e6' },
  6: { nume: 'turcoaz', hex: '#1aa39b' },
  7: { nume: 'roz', hex: '#e46fa5' },
  8: { nume: 'portocaliu', hex: '#ee7f25' },
  9: { nume: 'violet', hex: '#7a3fa6' },
};

/** Culoarea cifrei din punct: albă sau închisă, care se citește mai bine pe culoarea punctului. */
export function textPe(hex: string): string {
  const lum = (h: string) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
    const lin = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  };
  const L = lum(hex);
  const contrastAlb = 1.05 / (L + 0.05);
  const contrastInchis = (L + 0.05) / (lum('#1d1b2c') + 0.05);
  return contrastAlb >= contrastInchis ? '#ffffff' : '#1d1b2c';
}
