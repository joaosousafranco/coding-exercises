import { calculateIntersections } from '../src/number-of-disc-intersections';

it.each`
  input                 | output
  ${[]}                 | ${0}
  ${[1]}                | ${0}
  ${[1, 5]}             | ${1}
  ${[1, 5, 2, 1, 4, 0]} | ${11}
  ${[1, 10, 100, 1]}    | ${5}
`('find intersections $input.length $output', ({ input, output }) => {
  const intersections = calculateIntersections(input);

  expect(intersections).toEqual(output);
});
