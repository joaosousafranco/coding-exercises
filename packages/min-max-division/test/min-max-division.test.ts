import { minimalLargeSum } from '../src/min-max-division';

it.each`
  k    | m    | a                        | output
  ${3} | ${5} | ${[2, 1, 5, 1, 2, 2, 2]} | ${6}
  ${2} | ${0} | ${[0, 0]}                | ${0}
`('minimal large sum $k $m $a', ({ k, m, a, output }) => {
  const sum = minimalLargeSum(k, m, a);

  expect(sum).toEqual(output);
});
