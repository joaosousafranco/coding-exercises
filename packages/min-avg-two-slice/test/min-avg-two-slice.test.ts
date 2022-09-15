import { minimalSlicePosition } from '../src/min-avg-two-slice';

it.each`
  timeout | input                                   | output
  ${10}   | ${[2, 2]}                               | ${0}
  ${10}   | ${[2, 2, 1]}                            | ${1}
  ${10}   | ${[4, 2, 2, 5, 1, 5, 8]}                | ${1}
  ${10}   | ${[9, 2, 3, 2, 2, 2, 2, 2, 2, 7, 8, 9]} | ${3}
  ${10}   | ${new Array(700).fill(2)}               | ${0}
  ${10}   | ${new Array(10000).fill(1)}             | ${0}
  ${6000} | ${new Array(100000).fill(10000)}        | ${0}
`(
  'find the starting position of a slice whose average is minimal $timeout $input.length $output',
  ({ input, output, timeout }) => {
    const startDate = +new Date();
    const position = minimalSlicePosition(input);

    const endDate = +new Date();
    expect(position).toEqual(output);
    expect(endDate - startDate).toBeLessThan(timeout);
  },
);
