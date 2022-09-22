function check(a, b, c, num) {
  const pNails = new Array(2 * c.length + 1).fill(0);
  for (let i = 0; i < num; i += 1) {
    pNails[c[i]] += 1;
  }
  for (let i = 1; i < pNails.length; i += 1) {
    pNails[i] += pNails[i - 1];
  }
  for (let i = 0; i < a.length; i += 1) {
    if (pNails[b[i]] <= pNails[a[i] - 1]) {
      return false;
    }
  }
  return true;
}

export const minimumNails = (A: number[], B: number[], C: number[]) => {
  let begin = 0;
  let end = C.length - 1;
  let res = -1;
  while (begin <= end) {
    const mid = Math.floor((begin + end) / 2);
    if (check(A, B, C, mid + 1)) {
      end = mid - 1;
      res = mid + 1;
    } else {
      begin = mid + 1;
    }
  }
  return res;
};
