export const calculateCounters = (operations: number, list: number[]) => {
  const maxCounters = new Array(operations).fill(0);
  let maxCounter = 0;
  let lastMaxCounter = 0;

  list.forEach((item) => {
    if (item <= operations) {
      const itemIndex = item - 1;

      if (maxCounters[itemIndex] < lastMaxCounter) {
        maxCounters[itemIndex] = lastMaxCounter;
      }
      maxCounters[itemIndex] += 1;

      if (maxCounter < maxCounters[itemIndex]) {
        maxCounter = maxCounters[itemIndex];
      }
    } else {
      lastMaxCounter = maxCounter;
    }
  });

  maxCounters.forEach((counter, index) => {
    if (counter < lastMaxCounter) {
      maxCounters[index] = lastMaxCounter;
    }
  });

  return maxCounters;
};
