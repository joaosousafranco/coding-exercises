export const minimalLargeSum = (K: number, M: number, A: number[]) => {
  let begin = A.reduce((a, v) => a + v, 0);
  begin = Math.floor((begin + K - 1) / K);
  const maxA = Math.max(...A);

  if (maxA > begin) {
    begin = maxA;
  }

  let end = begin + M + 1;
  let res = 0;

  while (begin <= end) {
    const mid = Math.floor((begin + end) / 2);

    let sum = 0;
    let block = 1;

    for (let i = 0; i < A.length; i += 1) {
      const a = A[i];
      sum += a;
      if (sum > mid) {
        block += 1;
        if (block > K) {
          break;
        }
        sum = a;
      }
    }

    if (block > K) {
      begin = mid + 1;
    } else {
      res = mid;
      end = mid - 1;
    }
  }
  return res;
};
