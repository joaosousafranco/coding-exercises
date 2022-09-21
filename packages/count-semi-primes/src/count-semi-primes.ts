export const answers = (n: number, p: number[], q: number[]) => {
  const isSemiPrime = (value: number) => {
    let counter = 0;
    let x = value;

    for (let i = 2; i < x ** 0.5 + 1; i += 1) {
      while (x % i === 0) {
        x = Math.floor(x / i);
        counter += 1;
      }

      if (counter >= 2) {
        break;
      }
    }

    counter += x > 1 ? 1 : 0;

    return counter === 2;
  };

  const start = Math.min(...p);
  const finish = n;
  const dic = {};
  const result = {};

  for (let i = start; i < finish + 1; i += 1) {
    const old = i === start ? 0 : dic[i - 1];
    dic[i] = isSemiPrime(i) ? old + 1 : old;
  }

  for (let i = 0; i < p.length; i += 1) {
    result[i] = (dic[q[i]] || 0) - (dic[p[i] - 1] || 0);
  }

  return Object.values(result);
};
