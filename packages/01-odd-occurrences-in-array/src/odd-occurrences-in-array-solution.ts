export const ocurrences = (input: Array<number>) => {
  input.sort();

  let result = 0;
  let i = 0;

  do {
    if (input[i] !== input[i + 1]) {
      result = input[i];
    }
    i += 2;
  } while (!result && i < input.length);

  return result;
};
