export const minAbs = (A: number[]) => {
  const positives = [];
  const negatives = [];
  let i = 0;
  let min = 0;

  let start = 0;
  let end = 0;

  if (A.length === 1) {
    return Math.abs(A[0] + A[0]);
  }

  A.sort((a, b) => a - b);

  for (i = 0; i < A.length; i += 1) {
    if (A[i] < 0) {
      negatives.push(A[i]);
    } else {
      positives.push(A[i]);
    }
  }

  negatives.sort((a, b) => b - a);

  if (positives.length === 0) {
    return Math.abs(2 * negatives[0]);
  }

  if (negatives.length === 0) {
    return 2 * positives[0];
  }

  if (positives[0] === 0) {
    return 0;
  }

  min = positives[0] * 2;

  for (i = 0; i < negatives.length; i += 1) {
    start = 0;
    end = positives.length - 1;
    const neg = A[i];

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const pos = positives[mid];
      const sum = Math.abs(neg + pos);

      if (min > sum) min = sum;

      if (pos > Math.abs(neg)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return min;
};
