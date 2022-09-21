export const sequenceOfNonDivisors = (list: number[]) => {
  const counters = new Array(list.length * 2 + 1).fill(0);

  const nonDivisors = [];

  for (let i = 0; i < list.length; i += 1) {
    counters[list[i]] += 1;
  }

  for (let i = 0; i < list.length; i += 1) {
    let nonDivisor = list.length;

    for (let z = 1; z * z <= list[i]; z += 1) {
      if (list[i] % z === 0) {
        nonDivisor -= counters[z];
        if (z * z !== list[i]) {
          nonDivisor -= counters[list[i] / z];
        }
      }
    }

    nonDivisors.push(nonDivisor);
  }

  return nonDivisors;
};
