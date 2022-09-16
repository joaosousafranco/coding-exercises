import { triangleExists } from '../src/triangle';

it.each`
  input                   | output
  ${[10, 2, 5, 1, 8, 20]} | ${1}
  ${[10, 50, 5, 1]}       | ${0}
`('triangle exists $input.length $output', ({ input, output }) => {
  const exists = triangleExists(input);

  expect(exists).toEqual(output);
});
