import { distinctCount } from '../src/abs-distinct';

it.each`
  input                              | output
  ${[-5, -3, -1, 0, 3, 6]}           | ${5}
  ${[-5, -4, -3, -1, 0, 3, 4, 4, 6]} | ${6}
`('absolute distinct count $input', ({ input, output }) => {
  const count = distinctCount(input);

  expect(count).toEqual(output);
});
