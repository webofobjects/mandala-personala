const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Transformă *cuvinte* în <em>cuvinte</em> (italic în titluri). Restul textului este escapat.
 */
export function accent(text: string): string {
  return escape(text).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** Textul fără marcajele de accent — pentru <title>, alt etc. */
export function plain(text: string): string {
  return text.replace(/\*([^*]+)\*/g, '$1');
}
