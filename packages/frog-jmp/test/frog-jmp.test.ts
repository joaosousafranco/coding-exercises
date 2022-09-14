import { minimalJumps } from '../src/frog-jmp';

it.each`
  x     | y             | d     | output
  ${10} | ${85}         | ${30} | ${3}
  ${85} | ${85}         | ${30} | ${0}
  ${65} | ${85}         | ${30} | ${1}
  ${70} | ${85}         | ${30} | ${1}
  ${1}  | ${1000000000} | ${1}  | ${999999999}
`(
  'Minimal jumps $x $y $d',
  ({ x, y, d, output }) => {
    const jumps = minimalJumps(x, y, d);

    expect(jumps).toEqual(output);
  },
  100,
);
