export const maxDoubleSum = (list: number[]) => {
  let maxSum = 0;
  const forwardSums = new Array(list.length).fill(0);
  const backwardSums = new Array(list.length).fill(0);

  for (let i = 1; i < list.length - 1; i += 1) {
    forwardSums[i] = Math.max(forwardSums[i - 1] + list[i], 0);
  }

  for (let i = list.length - 2; i >= 0; i -= 1) {
    backwardSums[i] = Math.max(backwardSums[i + 1] + list[i], 0);
  }

  for (let i = 1; i < list.length - 1; i += 1) {
    maxSum = Math.max(maxSum, forwardSums[i - 1] + backwardSums[i + 1]);
  }

  return maxSum;
};
