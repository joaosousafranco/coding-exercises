export const minimalImpactFactor = (
  dnaSequence: string,
  p: number[],
  q: number[],
) => {
  const minimalQueries = [];

  for (let i = 0; i < p.length; i += 1) {
    const left = p[i];
    const right = q[i];

    const sequence = dnaSequence.slice(left, right + 1);

    if (sequence.indexOf('A') > -1) {
      minimalQueries.push(1);
    } else if (sequence.indexOf('C') > -1) {
      minimalQueries.push(2);
    } else if (sequence.indexOf('G') > -1) {
      minimalQueries.push(3);
    } else {
      minimalQueries.push(4);
    }
  }

  return minimalQueries;
};
