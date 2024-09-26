export const isPermutation = (input: Array<number>) => {
  const sorted = Array.from(new Set(input)).sort();

  return sorted[sorted.length - 1] === sorted.length ? 1 : 0;
};
