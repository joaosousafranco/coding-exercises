export const divisibles = (a: number, b: number, k: number) =>
  Math.floor(b / k) - Math.floor(a / k) + (!(a % k) ? 1 : 0);
