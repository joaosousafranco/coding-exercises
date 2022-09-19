export const minimalPerimeter = (value: number) => {
  let minimal = Number.MAX_VALUE;

  let a = 1;
  while (a * a <= value) {
    if (value % a === 0) {
      const b = value / a;

      minimal = Math.min(minimal, 2 * (a + b));
    }
    a += 1;
  }

  return minimal;
};
