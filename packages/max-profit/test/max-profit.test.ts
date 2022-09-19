import { maxPossibleProfit } from '../src/max-profit';

it.each`
  input                                         | output
  ${[23171, 21011, 21123, 21366, 21013, 21367]} | ${356}
`(
  'maximum possible profit from one transaction during period $input.length $output',
  ({ input, output }) => {
    const maxProfit = maxPossibleProfit(input);

    expect(maxProfit).toEqual(output);
  },
);
