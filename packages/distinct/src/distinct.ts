export const distinctValues = (list: number[]) => {
  const items = [];
  let counter = 0;

  list.forEach((item) => {
    if (!items[item]) {
      items[item] = 1;
      counter += 1;
    }
  });
  return counter;
};
