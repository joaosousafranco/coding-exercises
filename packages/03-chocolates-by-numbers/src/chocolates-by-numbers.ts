export const countChocolates = (n: number, m: number) => {
  const gcd = (a, b) => {
    if (a % b === 0) {
      return b;
    }
    return gcd(b, a % b);
  };

  if (n === 1) {
    return 1;
  }

  if (m === 1) {
    return n;
  }

  return n / gcd(n, m);
};
