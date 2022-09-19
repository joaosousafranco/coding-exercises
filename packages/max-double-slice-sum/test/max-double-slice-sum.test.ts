import { maxDoubleSum } from '../src/max-double-slice-sum';

it.each`
  input                         | output
  ${[3, 2, 6, -1, 4, 5, -1, 2]} | ${17}
`('maximal sum of any double slice $input', ({ input, output }) => {
  const sum = maxDoubleSum(input);

  expect(sum).toEqual(output);
});
