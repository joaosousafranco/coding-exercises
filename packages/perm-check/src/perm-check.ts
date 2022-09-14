export const isPermutation = (list: number[]) => {
  const itemsCounter = [];
  let totalCounter = 0;
  const maxNumber = Math.max(...list);

  let index = 0;
  let permutation = true;
  do {
    const itemValue = list[index];
    if (!itemsCounter[itemValue]) {
      itemsCounter[itemValue] = 1;
      totalCounter += 1;
    } else {
      permutation = false;
    }

    index += 1;
  } while (index < list.length && permutation);

  return permutation && totalCounter === maxNumber ? 1 : 0;
};
