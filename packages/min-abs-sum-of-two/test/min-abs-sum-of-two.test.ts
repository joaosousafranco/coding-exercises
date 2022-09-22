import { minAbs } from '../src/min-abs-sum-of-two';

it.each`
  timeout | input                       | output
  ${5}    | ${[0]}                      | ${0}
  ${5}    | ${[1, 4, -3]}               | ${1}
  ${5}    | ${[-8, 4, 5, -10, 3]}       | ${3}
  ${5}    | ${[1000000000]}             | ${2000000000}
  ${512}  | ${new Array(10000).fill(1)} | ${2}
`('minimal abs sum of two $input.length', ({ input, output, timeout }) => {
  const startDate = +new Date();
  const min = minAbs(input);

  const endDate = +new Date();
  expect(min).toEqual(output);
  expect(endDate - startDate).toBeLessThan(timeout);
});
