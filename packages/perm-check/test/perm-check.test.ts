import { isPermutation } from '../src/perm-check';

it.each`
  input                              | output
  ${[4, 1, 3, 2]}                    | ${1}
  ${[4, 1, 3]}                       | ${0}
  ${[9, 5, 7, 3, 2, 7, 3, 1, 10, 8]} | ${0}
`('check if is a permutation $input.length $output', ({ input, output }) => {
  const permutation = isPermutation(input);

  expect(permutation).toEqual(output);
});
