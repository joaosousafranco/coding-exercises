import { minimalDifference } from '../src/tape-equilibrium';

it.each`
  input                               | output
  ${[3, 1, 2, 4, 3]}                  | ${1}
  ${[1, 1]}                           | ${0}
  ${[1, 2]}                           | ${1}
  ${[3, 1, 1]}                        | ${1}
  ${[-1000, 1000]}                    | ${2000}
  ${Array.from(Array(100000).keys())} | ${24810}
`('calculate minimal difference $output $input.length', ({ input, output }) => {
  const startDate = +new Date();

  const difference = minimalDifference(input);

  const endDate = +new Date();

  expect(difference).toEqual(output);
  expect(endDate - startDate).toBeLessThan(6000);
});
