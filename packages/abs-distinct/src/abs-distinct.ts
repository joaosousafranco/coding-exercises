export const distinctCount = (list: number[]) => {
  const elements = [];
  let counter = 0;

  list.forEach((element) => {
    const absoluteElement = Math.abs(element);
    if (!elements[absoluteElement]) {
      elements[absoluteElement] = 1;
      counter += 1;
    }
  });

  return counter;
};
