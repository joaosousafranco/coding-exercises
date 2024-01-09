import { maxSliceSum } from '../src/max-slice-sum';

it.each`
  input               | output
  ${[0]}              | ${0}
  ${[-10]}            | ${-10}
  ${[-2, 1]}          | ${1}
  ${[3, 2, -6, 4, 0]} | ${5}
`('maximum sum of any slice $input', ({ input, output }) => {
  const sum = maxSliceSum(input);

  expect(sum).toEqual(output);
});
