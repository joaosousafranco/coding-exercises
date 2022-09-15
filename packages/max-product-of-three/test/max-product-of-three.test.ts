import { maximalProductOfTriplet } from '../src/max-product-of-three';

it.each`
  input                   | output
  ${[-3, 1, 2, -2, 5, 6]} | ${60}
`(' value of the maximal product of any triplet', ({ input, output }) => {
  const maxProduct = maximalProductOfTriplet(input);

  expect(maxProduct).toEqual(output);
});
