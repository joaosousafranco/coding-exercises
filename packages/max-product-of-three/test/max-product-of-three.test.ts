import { maximalProductOfTriplet } from '../src/max-product-of-three';

it.each`
  timeout | input                         | output
  ${5}    | ${[-3, 1, 2, -2, 5, 6]}       | ${60}
  ${5}    | ${[-10, -2, -4]}              | ${-80}
  ${5}    | ${[-5, 5, -5, 1, 1, 1, 1, 4]} | ${125}
  ${168}  | ${new Array(1000).fill(1)}    | ${1}
`(
  ' value of the maximal product of any triplet $input.length $output',
  ({ timeout, input, output }) => {
    const startDate = +new Date();
    const maxProduct = maximalProductOfTriplet(input);

    const endDate = +new Date();
    expect(maxProduct).toEqual(output);
    expect(endDate - startDate).toBeLessThan(timeout);
  },
);
