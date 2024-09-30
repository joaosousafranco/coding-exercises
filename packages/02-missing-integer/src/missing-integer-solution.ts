export const findMissingInteger = (input: Array<number>) => {
  const filtered = input.reduce((elements, value) => {
    elements[value] = value > 0;
    return elements;
  }, []);

  const found = filtered.findIndex((value, i) => i > 0 && value === undefined);

  if (found > 0) {
    return found;
  }

  if (found === -1 && filtered.length) {
    return Math.max(...input) + 1;
  }

  return 1;
};
