import { maxRopes } from '../src/tie-ropes';

it.each`
  k    | a                        | output
  ${4} | ${[1, 2, 3, 4, 1, 1, 3]} | ${3}
`('maximum number of ropes $k $a', ({ k, a, output }) => {
  const ropes = maxRopes(k, a);

  expect(ropes).toEqual(output);
});
