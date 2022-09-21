import { climbingWays } from '../src/ladder';

it.each`
  a                  | b                  | output
  ${[4, 4, 5, 5, 1]} | ${[3, 2, 4, 3, 1]} | ${[5, 1, 8, 0, 1]}
`('Build project hello $input', ({ a, b, output }) => {
  const ways = climbingWays(a, b);

  expect(ways).toEqual(output);
});
