import { minValue } from '../src/min-abs-sum';

it.each`
  input            | output
  ${[1, 5, 2, -2]} | ${0}
`('minimum possible value $input', ({ input, output }) => {
  const value = minValue(input);

  expect(value).toEqual(output);
});
