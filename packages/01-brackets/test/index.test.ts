import { isProperlyNested } from '../src/brackets-exercise';

it.each`
  input         | output
  ${''}         | ${1}
  ${'{[()()]}'} | ${1}
  ${'([)()]'}   | ${0}
  ${'{{{{'}     | ${0}
  ${')'}        | ${0}
`('is properly nested $input.length $output', ({ input, output }) => {
  const isNested = isProperlyNested(input);

  expect(isNested).toEqual(output);
});
