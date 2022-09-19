export const maxPossibleProfit = (list: number[]) => {
  let maxProfitClose = -200001;
  let maxProfitSlice = -200001;

  for (let i = 1; i < list.length; i += 1) {
    const profit = list[i] - list[i - 1];

    maxProfitClose = Math.max(profit, maxProfitClose + profit);
    maxProfitSlice = Math.max(maxProfitClose, maxProfitSlice);
  }

  return maxProfitSlice > 0 ? maxProfitSlice : 0;
};
