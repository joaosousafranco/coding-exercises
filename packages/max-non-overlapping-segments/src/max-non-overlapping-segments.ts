export const maxNonOverlapping = (A: number[], B: number[]) => {
  if (A.length === 0) {
    return A.length;
  }

  let count = 1;
  let ending = B[0];
  for (let i = 1; i < B.length; i += 1) {
    if (A[i] > ending) {
      ending = B[i];
      count += 1;
    }
  }

  return count;
};
