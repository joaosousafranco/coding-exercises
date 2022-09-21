function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

function check(a, b) {
  let gcdA = gcd(a, b);

  if (gcdA === a) {
    return true;
  }
  if (gcdA === 1) {
    return false;
  }
  const factor = a / gcdA;
  gcdA = gcd(factor, gcdA);
  return check(Math.max(factor, gcdA), Math.min(factor, gcdA));
}

export const findPrimeDivisors = (a: number[], b: number[]) => {
  let primeDivisors = 0;

  for (let k = 0; k < a.length; k += 1) {
    const big = Math.max(a[k], b[k]);
    const small = Math.min(a[k], b[k]);
    const div = gcd(big, small);

    if (big === small) {
      primeDivisors += 1;
    } else if (check(big, div) && check(small, div)) {
      primeDivisors += 1;
    }
  }

  return primeDivisors;
};
