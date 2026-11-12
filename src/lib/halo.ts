/**
 * Cercuri concentrice de puncte, ca marginile picturilor. Generat ca fișier SVG separat
 * (vezi src/pages/decor/[nume].svg.ts), ca să nu încarce pagina cu sute de noduri.
 */
export function haloSvg(color: string, rings = 7): string {
  const c = 500;
  const f = (n: number) => +n.toFixed(1);
  let dots = '';
  for (let k = 0; k < rings; k++) {
    const R = 300 + k * 30;
    const r = Math.max(1.6, 5.2 - k * 0.55);
    const n = Math.round((2 * Math.PI * R) / (r * 2 + 9 + k * 1.5));
    const off = k % 2 ? Math.PI / n : 0;
    const o = +(1 - k / (rings + 1)).toFixed(2);
    let ring = '';
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 2 * Math.PI + off;
      ring += `<circle cx="${f(c + R * Math.cos(a))}" cy="${f(c + R * Math.sin(a))}" r="${r}"/>`;
    }
    dots += `<g opacity="${o}">${ring}</g>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><g fill="${color}">${dots}</g></svg>`;
}
