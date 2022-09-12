// 5 >>> 1 2 0101 >>> 1 0010
// eslint-disable-next-line no-bitwise
const decimalToBinary = (decimal: number) => (decimal >>> 0).toString(2);

export const binaryGap = (value: number) => {
  const binary = decimalToBinary(value);

  let gap = 0;

  let counter = 0;
  let counting = false;
  for (let i = 0; i < binary.length; i += 1) {
    if (binary[i] === '1' && !counting) {
      counting = true;
    }

    if (binary[i] === '1' && counting) {
      if (counter > gap) {
        gap = counter;
      }
      counter = 0;
    }

    if (binary[i] === '0' && counting) {
      counter += 1;
    }
  }

  return gap;
};
