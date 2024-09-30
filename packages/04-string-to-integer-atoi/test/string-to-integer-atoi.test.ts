import { myAtoi } from '../src/string-to-integer-atoi-exercise';

it.each`
  input              | output
  ${'42'}            | ${42}
  ${'   -042'}       | ${-42}
  ${'1337c0d3'}      | ${1337}
  ${'0-1'}           | ${0}
  ${'words and 987'} | ${0}
`('Convert $input to $output', ({ input, output }) => {
  const atoi = myAtoi(input);

  expect(atoi).toEqual(output);
});
