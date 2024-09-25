import { isProperlyNested } from '../src/nesting-exercise';

it.each`
  input           | output
  ${'(()(())())'} | ${1}
  ${'())'}        | ${0}
  ${''}           | ${1}
  ${')('}         | ${0}
  ${'(()('}       | ${0}
  ${')'}          | ${0}
  ${'('}          | ${0}
`('is properly nested $input.length $output', ({ input, output }) => {
  const isNested = isProperlyNested(input);

  expect(isNested).toEqual(output);
});
