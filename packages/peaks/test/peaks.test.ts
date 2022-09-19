import { maxBlocks } from '../src/peaks';

it.each`
  input                                   | output
  ${[1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]} | ${3}
`(
  'maximum number of blocks into which the list can be divided $input',
  ({ input, output }) => {
    const blocks = maxBlocks(input);

    expect(blocks).toEqual(output);
  },
);
