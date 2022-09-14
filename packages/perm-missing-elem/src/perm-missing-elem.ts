export const missingElement = (list: number[]) => {
  const totalElements = list.length + 1;

  const expectedSum = (totalElements * (totalElements + 1)) / 2;
  const listSum = list.reduce((a, b) => a + b, 0);

  return expectedSum - listSum;
};
