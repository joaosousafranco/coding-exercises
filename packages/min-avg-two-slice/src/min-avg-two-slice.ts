export const minimalSlicePosition = (list: number[]) => {
  let start = 0;

  let currentSum = list[0] + list[1];
  let minAvgSlice = currentSum / 2;

  for (let i = 2; i < list.length; i += 1) {
    currentSum += list[i];
    let newAvg = currentSum / 3;
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg;
      start = i - 2;
    }

    currentSum -= list[i - 2];
    newAvg = currentSum / 2;
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg;
      start = i - 1;
    }
  }

  return start;
};
