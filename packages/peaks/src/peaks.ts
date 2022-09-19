export const maxBlocks = (list: number[]) => {
  const peaks = [];

  for (let i = 1; i < list.length - 1; i += 1) {
    if (list[i - 1] < list[i] && list[i] > list[i + 1]) {
      peaks.push(i);
    }
  }

  let max = 0;

  for (let i = 1; i < list.length; i += 1) {
    if (list.length % i === 0) {
      let bi = 0;
      const block = list.length / i;

      for (let peakIndex = 0; peakIndex < peaks.length; peakIndex += 1) {
        const p = peaks[peakIndex];
        if (bi * block <= p && p < (bi + 1) * block) {
          bi += 1;
        }
      }

      if (bi === i) {
        max = i;
      }
    }
  }

  return max;
};
