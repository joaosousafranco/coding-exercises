export const maxRopes = (K: number, A: number[]) => {
  if (K === 1) {
    return A.length;
  }

  let count = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i += 1) {
    sum += A[i];

    if (sum >= K) {
      sum = 0;
      count += 1;
    }
  }

  return count;
};
