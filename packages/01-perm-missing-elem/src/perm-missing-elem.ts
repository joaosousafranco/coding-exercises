export const missingElement = (list: number[]) => {
  const firstNumber = 1;
  const lastNumber = list.length + 1;
  const totalElements = list.length + 1;

  const expectedSum = (firstNumber + lastNumber) * (totalElements / 2);
  const listSum = list.reduce((a, b) => a + b, 0);

  return expectedSum - listSum;
};
