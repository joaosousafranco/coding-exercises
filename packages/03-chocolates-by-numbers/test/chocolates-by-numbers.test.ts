import { countChocolates } from '../src/chocolates-by-numbers';

it.each`
  timeout | n    | m    | output
  ${5}    | ${1} | ${1} | ${1}
  ${5}    | ${1} | ${2} | ${1}
  ${5}    | ${2} | ${1} | ${2}
`(
  'count the number of chocolates that you will eat $n $m $output',
  ({ n, m, output, timeout }) => {
    const startDate = +new Date();
    const chocolates = countChocolates(n, m);

    const endDate = +new Date();

    expect(chocolates).toEqual(output);
    expect(endDate - startDate).toBeLessThan(timeout);
  },
);
