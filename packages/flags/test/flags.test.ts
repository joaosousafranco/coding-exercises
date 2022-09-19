import { maxFlags } from '../src/flags';

it.each`
  input                                   | output
  ${[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]} | ${3}
`('maximum number of flags that can be set $input', ({ input, output }) => {
  const flags = maxFlags(input);

  expect(flags).toEqual(output);
});
