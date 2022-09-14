export const findMissingInteger = (list: number[]) => {
  const counter = [];

  list.forEach((item) => {
    if (!counter[item] && item > 0) {
      counter[item] = 1;
    }
  });

  const found = counter.findIndex((a, index) => index > 0 && a === undefined);

  if (found > 0) {
    return found;
  }

  if (found === -1 && counter.length) {
    return Math.max(...list) + 1;
  }

  return 1;
};
