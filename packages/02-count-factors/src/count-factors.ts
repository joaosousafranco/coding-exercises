export const totalFactors = (value: number) => {
  let total = 0;

  let i = 1;
  while (i * i < value) {
    total += value % i === 0 ? 2 : 0;
    i += 1;
  }

  if (i * i === value) {
    total += 1;
  }

  return total;
};
