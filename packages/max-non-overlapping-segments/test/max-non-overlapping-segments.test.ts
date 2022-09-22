import { maxNonOverlapping } from '../src/max-non-overlapping-segments';

it.each`
  a                  | b                   | output
  ${[1, 3, 7, 9, 9]} | ${[5, 6, 8, 9, 10]} | ${3}
`(
  'size of a non-overlapping set containing a maximal $a $b',
  ({ a, b, output }) => {
    const max = maxNonOverlapping(a, b);

    expect(max).toEqual(output);
  },
);
