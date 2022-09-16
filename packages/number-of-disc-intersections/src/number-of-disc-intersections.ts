export const calculateIntersections = (list: number[]) => {
  const intervals = list
    .map((circle, index) => ({
      start: index - circle,
      end: index + circle,
    }))
    .sort((a, b) => a.start - b.start);

  let intersections = 0;

  for (let j = 0; j < intervals.length - 1; j += 1) {
    const interval = intervals[j];

    for (let k = j + 1; k < intervals.length; k += 1) {
      const circle = intervals[k];

      if (circle.start <= interval.end) {
        intersections += 1;
      } else {
        break;
      }
    }
  }

  return intersections > 10000000 ? -1 : intersections;
};
