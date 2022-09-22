import { minimumNails } from '../src/nailing-planks';

it.each`
  A               | B                | C                   | output
  ${[1, 4, 5, 8]} | ${[4, 5, 9, 10]} | ${[4, 6, 7, 10, 2]} | ${4}
  ${[2]}          | ${[2]}           | ${[1]}              | ${-1}
  ${[1]}          | ${[2]}           | ${[2]}              | ${1}
`('minimum number of nails $A $B $C', ({ A, B, C, output }) => {
  const nails = minimumNails(A, B, C);

  expect(nails).toEqual(output);
});
