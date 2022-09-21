import { sequenceOfNonDivisors } from '../src/count-non-divisible';

it.each`
  input              | output
  ${[3, 1, 2, 3, 6]} | ${[2, 4, 3, 2, 0]}
`(
  'sequence of integers representing the amount of non-divisors $input',
  ({ input, output }) => {
    const nonDivisors = sequenceOfNonDivisors(input);

    expect(nonDivisors).toEqual(output);
  },
);
