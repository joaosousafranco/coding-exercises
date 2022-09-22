export const distinctSlices = (M: number, A: number[]) => {
  const LIMIT = 1000000000;

  const lastPos = new Array(M + 1).fill(-1);
  let i = 0;
  let count = 0;
  let start = 0;

  if (A.length === 1) {
    return 1;
  }

  for (i = 0; i < A.length && count <= LIMIT; i += 1) {
    const item = A[i];

    if (lastPos[item] + 1 > start) {
      start = lastPos[item] + 1;
    }

    lastPos[item] = i;
    count += i - start + 1;
  }

  return count > LIMIT ? LIMIT : count;
};
