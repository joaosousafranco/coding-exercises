import { frogJumps } from '../src/fib-frog';

it.each`
  input                                | output
  ${[0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]} | ${3}
`('Build project hello $input', ({ input, output }) => {
  const jumps = frogJumps(input);

  expect(jumps).toEqual(output);
});
