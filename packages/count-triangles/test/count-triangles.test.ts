import { countTriangles } from '../src/count-triangles';

it.each`
  input                   | output
  ${[10, 2, 5, 1, 8, 12]} | ${4}
`('number of triangular triplets $input', ({ input, output }) => {
  const triangles = countTriangles(input);

  expect(triangles).toEqual(output);
});
