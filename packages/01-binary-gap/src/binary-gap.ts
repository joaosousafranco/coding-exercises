const dec2bin = (value: number) => value.toString(2);

export const binaryGap = (input: number) => {
  const binary = dec2bin(input);

  let currentGap = 0;
  let maxGap = 0;

  for (let i = 0; i < binary.length; i += 1) {
    if (binary[i] === '0') {
      currentGap += 1;
    }

    if (binary[i] === '1') {
      maxGap = Math.max(currentGap, maxGap);
      currentGap = 0;
    }
  }

  return maxGap;
};
