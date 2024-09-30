import { countChocolates } from '../src/chocolates-by-numbers-exercise';

it.each`
  timeout | n    | m    | output
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
