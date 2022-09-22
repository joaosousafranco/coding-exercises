export const maxResult = (A: number[]) => {
  const dp = [A[0]];

  for (let i = 1; i < A.length; i += 1) {
    let max = dp[i - 1] + A[i];

    for (let j = 1; j <= 6; j += 1) {
      if (i - j >= 0) {
        max = Math.max(dp[i - j] + A[i], max);
      }
    }

    dp[i] = max;
  }

  return dp[A.length - 1];
};
