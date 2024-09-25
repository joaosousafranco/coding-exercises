import { distinctValues } from '../src/distinct-exercise';

it.each`
  input                 | output
  ${[]}                 | ${0}
  ${[1]}                | ${1}
  ${[1, 1]}             | ${1}
  ${[2, 1, 1, 2, 3, 1]} | ${3}
`('display distinct values $input', ({ input, output }) => {
  const values = distinctValues(input);

  expect(values).toEqual(output);
});
