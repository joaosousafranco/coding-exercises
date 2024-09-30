import { convert } from '../src/currency-converter-exercise';

it.each`
  amount      | from     | to       | output
  ${10}       | ${'USD'} | ${'EUR'} | ${8.9}
  ${8.9}      | ${'EUR'} | ${'USD'} | ${10}
  ${20}       | ${'EUR'} | ${'JPY'} | ${2585.951}
  ${2585.951} | ${'JPY'} | ${'EUR'} | ${20}
  ${5}        | ${'JPY'} | ${'AUD'} | ${null}
  ${4.998}    | ${'HKF'} | ${'AUD'} | ${0.88}
  ${0.88}     | ${'AUD'} | ${'HKF'} | ${4.998}
  ${1}        | ${'CHF'} | ${'JPY'} | ${125.532}
  ${125.532}  | ${'JPY'} | ${'CHF'} | ${1}
`(
  'convert amount $amount from $from to $to should be $output',
  ({ amount, from, to, output }) => {
    const value = convert(amount, from, to);

    expect(value).toEqual(output);
  },
);
