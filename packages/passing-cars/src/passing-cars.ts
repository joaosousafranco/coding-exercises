export const pairedPassingCars = (list: number[]) => {
  let pairs = 0;
  let totalZeros = 0;

  list.forEach((item) => {
    if (item === 0) {
      totalZeros += 1;
    } else {
      pairs += totalZeros;
    }
  });

  return pairs > 1000000000 ? -1 : pairs;
};
