export const cyclicRotation = (list: number[], rotations: number) => {
  if (list.length < 2 || list.length === rotations) {
    return list;
  }

  for (let i = 0; i < rotations; i += 1) {
    const lastElement = list.pop();
    list.unshift(lastElement);
  }

  return list;
};
