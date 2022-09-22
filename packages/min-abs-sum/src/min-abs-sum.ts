export const minValue = (A: number[]) => {
  let i = 0;
  let j = 0;
  let max = 0;
  let total = 0;
  let target = 0;
  const dp = [];
  const count = [];
  let minDiff = Infinity;

  if (A.length === 0) {
    return 0;
  }

  A.sort((a, b) => Math.abs(a) - Math.abs(b));

  max = Math.abs(A[A.length - 1]);

  for (i = 0; i <= max; i += 1) {
    count[i] = 0;
  }

  for (i = 0; i < A.length; i += 1) {
    A[i] = Math.abs(A[i]);
    count[A[i]] += 1;
    total += A[i];
  }

  dp[0] = 0;
  for (i = 1; i <= total; i += 1) {
    dp[i] = -1;
  }

  target = total / 2;

  for (i = 0; i < count.length; i += 1) {
    if (count[i] > 0) {
      const step = i;
      for (j = 0; j < dp.length; j += 1) {
        if (dp[j] >= 0) {
          dp[j] = count[i];
        } else if (j >= step && dp[j - step] > 0) {
          dp[j] = dp[j - step] - 1;
        }

        if (dp[j] >= 0) {
          if (j === target) {
            return 0;
          }
          minDiff = Math.min(minDiff, Math.abs(total - 2 * j));
        }
      }
    }
  }

  return minDiff;
};
