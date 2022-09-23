import { convert } from '../src/currency-converter';

// 21:24h

it.each`
  amount | from     | to       | output
  ${10}  | ${'USD'} | ${'EUR'} | ${8.9}
  ${20}  | ${'EUR'} | ${'JPY'} | ${2586}
  ${5}   | ${'JPY'} | ${'AUD'} | ${null}
`(
  'convert amount $amount from $from to $to should be $output',
  ({ amount, from, to, output }) => {
    const value = convert(amount, from, to);

    expect(value).toEqual(output);
  },
);
