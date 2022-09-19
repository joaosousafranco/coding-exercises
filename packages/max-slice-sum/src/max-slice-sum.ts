export const maxSliceSum = (list: number[]) => {
  let maxClose = -1000001;
  let maxSlice = -1000001;

  for (let i = 0; i < list.length; i += 1) {
    const value = list[i];

    maxClose = Math.max(value, maxClose + value);
    maxSlice = Math.max(maxClose, maxSlice);
  }

  return maxSlice;
};
