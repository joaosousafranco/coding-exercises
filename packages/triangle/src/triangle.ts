export const triangleExists = (list: number[]) => {
  let foundTriangle = 0;

  list.sort((a, b) => a - b);

  for (let i = 0; i < list.length - 2 && foundTriangle === 0; i += 1) {
    const p = list[i];
    const q = list[i + 1];
    const r = list[i + 2];

    foundTriangle = p + q > r && q + r > p && r + p > q ? 1 : 0;
  }

  return foundTriangle;
};
