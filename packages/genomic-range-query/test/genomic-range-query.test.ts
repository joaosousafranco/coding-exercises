import { minimalImpactFactor } from '../src/genomic-range-query';

it.each`
  timeout | dnaSequence                             | p                           | q                               | output
  ${100}  | ${'CAGCCTA'}                            | ${[2, 5, 0]}                | ${[4, 5, 6]}                    | ${[2, 4, 1]}
  ${100}  | ${new Array(100000).fill('G').join('')} | ${new Array(50000).fill(0)} | ${new Array(50000).fill(1)}     | ${new Array(50000).fill(3)}
  ${720}  | ${new Array(100000).fill('G').join('')} | ${new Array(50000).fill(0)} | ${new Array(50000).fill(10000)} | ${new Array(50000).fill(3)}
`(
  'Minimal impact factor in nucleotides $dnaSequence.length $p.length $q.length ',
  ({ dnaSequence, p, q, output, timeout }) => {
    const startDate = +new Date();
    const impactFactor = minimalImpactFactor(dnaSequence, p, q);

    const endDate = +new Date();
    expect(impactFactor).toEqual(output);
    expect(endDate - startDate).toBeLessThan(timeout);
  },
);
