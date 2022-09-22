export const countTriangles = (A: number[]) => {
  let result = 0;
  A.sort((a, b) => a - b);

  for (let i = A.length - 1; i >= 0; i -= 1) {
    let back = 0;
    let front = i - 1;

    while (back < front) {
      if (A[back] + A[front] > A[i]) {
        result += front - back;
        front -= 1;
      } else {
        back += 1;
      }
    }
  }

  return result;
};
