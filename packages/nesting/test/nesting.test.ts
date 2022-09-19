import { isProperlyNested } from '../src/nesting';

it.each`
  input           | output
  ${'(()(())())'} | ${1}
  ${'())'}        | ${0}
`('is properly nested $input.length $output', ({ input, output }) => {
  const isNested = isProperlyNested(input);

  expect(isNested).toEqual(output);
});
