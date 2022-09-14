import { findMissingInteger } from '../src/missing-integer';

it.each`
  input                 | output
  ${[1, 3, 6, 4, 1, 2]} | ${5}
  ${[]}                 | ${1}
  ${[1]}                | ${2}
  ${[1, 2, 3]}          | ${4}
  ${[-1, -3]}           | ${1}
  ${[-1, -3, 2, 3]}     | ${1}
`('find missing integer $input.length $output', ({ input, output }) => {
  const startDate = +new Date();

  const missingInteger = findMissingInteger(input);

  const endDate = +new Date();

  expect(missingInteger).toEqual(output);
  expect(endDate - startDate).toBeLessThan(150);
});
