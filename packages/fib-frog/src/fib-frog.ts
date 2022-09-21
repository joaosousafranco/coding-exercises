/* eslint-disable no-continue */
export const frogJumps = (A: number[]) => {
  const f = new Array(30);
  f[0] = 1;
  f[1] = 2;
  for (let i = 2; i < f.length; i += 1) f[i] = f[i - 1] + f[i - 2];
  const mins = new Array(A.length + 1);

  for (let i = 0; i < mins.length; i += 1) {
    if (i < A.length && A[i] === 0) {
      mins[i] = -1;
      continue;
    }
    let min = Number.MAX_SAFE_INTEGER;

    for (let j = f.length - 1; j >= 0; j -= 1) {
      const k = i - f[j];
      if (k < -1) continue;
      if (k === -1) {
        min = 1;
        break;
      }
      if (mins[k] < 0) continue;
      const newMin = mins[k] + 1;
      if (newMin < min) min = newMin;
    }
    if (min !== Number.MAX_SAFE_INTEGER) mins[i] = min;
    else mins[i] = -1;
  }

  return mins[A.length];
};
