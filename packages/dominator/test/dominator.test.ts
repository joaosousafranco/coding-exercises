import { dominatorIndex } from '../src/dominator';

it.each`
  input                        | output
  ${[]}                        | ${-1}
  ${[1]}                       | ${0}
  ${[1, 2]}                    | ${-1}
  ${[-1]}                      | ${0}
  ${[3, 4, 3, 2, 3, -1, 3, 3]} | ${0}
`('find dominator index $input.length $output', ({ input, output }) => {
  const index = dominatorIndex(input);

  expect(index).toEqual(output);
});
