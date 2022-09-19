import { countLeaders } from '../src/equi-leader';

it.each`
  input                 | output
  ${[4, 3, 4, 4, 4, 2]} | ${2}
`(
  'find the number of equi leaders $input.length $output',
  ({ input, output }) => {
    const leaders = countLeaders(input);

    expect(leaders).toEqual(output);
  },
);
