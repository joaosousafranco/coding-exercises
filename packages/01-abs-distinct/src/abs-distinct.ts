export const distinctCount = (a: Array<number>) =>
  new Set(a.map((n) => Math.abs(n))).size;
