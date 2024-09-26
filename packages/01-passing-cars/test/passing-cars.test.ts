import { pairedPassingCars } from '../src/passing-cars-exercise';

it.each`
  timeout | input                                                                          | output
  ${5}    | ${[]}                                                                          | ${0}
  ${5}    | ${[1]}                                                                         | ${0}
  ${5}    | ${[1, 0]}                                                                      | ${0}
  ${5}    | ${[0, 0]}                                                                      | ${0}
  ${5}    | ${[0, 1]}                                                                      | ${1}
  ${5}    | ${[0, 1, 0, 1, 1]}                                                             | ${5}
  ${336}  | ${new Array(10000).fill(0)}                                                    | ${0}
  ${336}  | ${new Array(10000).fill(1)}                                                    | ${0}
  ${336}  | ${new Array(10000).fill(10000).map((item, index) => (!(index % 2) ? 1 : 0))}   | ${12497500}
  ${336}  | ${new Array(100000).fill(100000).map((item, index) => (!(index % 2) ? 1 : 0))} | ${-1}
`('find pairs of passing cars', ({ input, output, timeout }) => {
  const startDate = +new Date();
  const pairs = pairedPassingCars(input);

  const endDate = +new Date();

  expect(pairs).toEqual(output);
  expect(endDate - startDate).toBeLessThan(timeout);
});
