export const dominatorIndex = (list: number[]) => {
  let dominator = -1;
  let count = 0;

  const sortedList = list.slice().sort((a, b) => a - b);

  const candidate = sortedList[Math.floor(sortedList.length / 2)];

  for (let i = 0; i < sortedList.length; i += 1) {
    if (sortedList[i] === candidate) {
      count += 1;
    }
  }

  if (count > Math.floor(sortedList.length / 2)) {
    dominator = candidate;
  }

  return list.indexOf(dominator);
};
