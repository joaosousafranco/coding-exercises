const calcPerimeter = (a: number, b: number) => 2 * (a + b);

export const minimalPerimeter = (input: number) => {
  let perimeter = Number.MAX_VALUE;

  for (let i = 1; i * i <= input; i += 1) {
    if (input % i === 0) {
      const b = input / i;
      const newPerimeter = calcPerimeter(i, b);

      perimeter = Math.min(newPerimeter, perimeter);
    }
  }

  return perimeter;
};
