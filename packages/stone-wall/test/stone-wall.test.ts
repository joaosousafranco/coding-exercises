import { requiredBlocks } from '../src/stone-wall';

it.each`
  input                          | output
  ${[8, 8, 5, 7, 9, 8, 7, 4, 8]} | ${7}
`(
  'minimum number of blocks needed to build the wall $input.length $output',
  ({ input, output }) => {
    const blocks = requiredBlocks(input);

    expect(blocks).toEqual(output);
  },
);
