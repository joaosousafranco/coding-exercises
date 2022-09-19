import { totalFactors } from '../src/count-factors';

it.each`
  input         | output
  ${1}          | ${1}
  ${24}         | ${8}
  ${2147483647} | ${2}
`(
  'returns the number of factors from N $input $output',
  ({ input, output }) => {
    const factors = totalFactors(input);

    expect(factors).toEqual(output);
  },
);
