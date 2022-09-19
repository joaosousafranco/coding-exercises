export const requiredBlocks = (heights: number[]) => {
  const stack = [];
  let head = -1;
  let block = 0;
  let i = 0;
  while (i < heights.length) {
    const h = heights[i];
    if (head < 0 || stack[head] < h) {
      head += 1;
      stack[head] = h;
      i += 1;
    } else if (stack[head] === h) {
      i += 1;
    } else {
      head -= 1;
      block += 1;
    }
  }
  return block + head + 1;
};
