export const ocurrences = (list: number[]) => {
  const oddNumbers = {};

  list.forEach((item) => {
    if (!oddNumbers[item]) {
      oddNumbers[item] = 1;
    } else {
      delete oddNumbers[item];
    }
  });

  const keys = Object.keys(oddNumbers);

  return keys.length ? +keys[0] : -1;
};
