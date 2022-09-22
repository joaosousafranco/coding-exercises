import { maxResult } from '../src/number-solitaire';

it.each`
  input                    | output
  ${[1, -2, 0, 9, -1, -2]} | ${8}
`('maximal result that can be achieved $input', ({ input, output }) => {
  const result = maxResult(input);

  expect(result).toEqual(output);
});
