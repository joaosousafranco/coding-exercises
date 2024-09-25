import { earliestJump } from '../src/frog-river-one-exercise';

it.each`
  jumps | leafs                       | output
  ${5}  | ${[1, 3, 1, 4, 2, 3, 5, 4]} | ${6}
  ${5}  | ${[3]}                      | ${-1}
  ${1}  | ${[1]}                      | ${0}
`(
  'find earliest jump $jumps $leafs.length $output',
  ({ jumps, leafs, output }) => {
    const jump = earliestJump(jumps, leafs);

    expect(jump).toEqual(output);
  },
);
