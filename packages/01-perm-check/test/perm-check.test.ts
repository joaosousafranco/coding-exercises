import { isPermutation } from '../src/perm-check-exercise';

it.each`
  input                              | output
  ${[4, 1, 3, 2]}                    | ${1}
  ${[4, 1, 3]}                       | ${0}
  ${[3, 3, 3]}                       | ${0}
  ${[1, 2, 3]}                       | ${1}
  ${[9, 5, 7, 3, 2, 7, 3, 1, 10, 8]} | ${0}
`('check if is a permutation $input $output', ({ input, output }) => {
  const permutation = isPermutation(input);

  expect(permutation).toEqual(output);
});
