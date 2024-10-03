import { distinctSlices } from '../src/count-distinct-slices-exercise';

it.each`
  M    | A                  | output
  ${6} | ${[3, 4, 5, 5, 2]} | ${9}
`('calculate the number of distinct slices $M $A', ({ M, A, output }) => {
  const slices = distinctSlices(M, A);

  expect(slices).toEqual(output);
});
