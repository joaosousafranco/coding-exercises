export const maxFlags = (heights: number[]) => {
  const nextPeak = new Array(heights.length).fill(0);
  let counter = 0;

  for (let i = heights.length - 2; i > 0; i -= 1) {
    if (heights[i - 1] < heights[i] && heights[i] > heights[i + 1]) {
      nextPeak[i] = i;
      counter += 1;
    } else {
      nextPeak[i] = nextPeak[i + 1];
    }
  }

  for (let intended = counter; intended > 0; intended -= 1) {
    let planted = 0;
    let i = 1;

    while (i < heights.length && nextPeak[i] && planted < intended) {
      i = nextPeak[i];
      planted += 1;
      i += intended;
    }

    if (intended === planted) {
      return planted;
    }
  }

  return 0;
};
