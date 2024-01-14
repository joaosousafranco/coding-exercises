export const cyclicRotation = (list: number[], rotations: number) => {
  if (
    list.length < 2 ||
    list.length === rotations ||
    (list.length && rotations % list.length === 0)
  ) {
    return list;
  }

  for (let i = 0; i < rotations; i += 1) {
    const lastElement = list.pop();
    list.unshift(lastElement);
  }

  return list;
};
