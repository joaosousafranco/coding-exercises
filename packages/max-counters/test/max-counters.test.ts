import { calculateCounters } from '../src/max-counters';

it.each`
  timeout | operations | list                              | output
  ${5}    | ${5}       | ${[3, 4, 4, 6, 1, 4, 4]}          | ${[3, 2, 2, 4, 2]}
  ${10}   | ${2120}    | ${new Array(2120).fill(2121)}     | ${new Array(2120).fill(0)}
  ${30}   | ${10000}   | ${new Array(10000).fill(10001)}   | ${new Array(10000).fill(0)}
  ${200}  | ${100000}  | ${new Array(100000).fill(100001)} | ${new Array(100000).fill(0)}
`(
  'calculate counters $operations $list.length',
  ({ timeout, operations, list, output }) => {
    const startDate = +new Date();
    const counters = calculateCounters(operations, list);

    const endDate = +new Date();

    expect(counters).toEqual(output);
    expect(endDate - startDate).toBeLessThan(timeout);
  },
);
