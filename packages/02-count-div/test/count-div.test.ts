import { divisibles } from '../src/count-div-exercise';

it.each`
  timeout | a      | b             | k             | output
  ${5}    | ${1}   | ${1}          | ${1}          | ${1}
  ${5}    | ${0}   | ${0}          | ${11}         | ${1}
  ${5}    | ${1}   | ${1}          | ${11}         | ${0}
  ${5}    | ${10}  | ${10}         | ${5}          | ${1}
  ${5}    | ${10}  | ${10}         | ${7}          | ${0}
  ${5}    | ${10}  | ${10}         | ${20}         | ${0}
  ${5}    | ${6}   | ${11}         | ${2}          | ${3}
  ${5}    | ${6}   | ${12}         | ${2}          | ${4}
  ${5}    | ${6}   | ${11}         | ${3}          | ${2}
  ${5}    | ${11}  | ${13}         | ${2}          | ${1}
  ${5}    | ${11}  | ${14}         | ${2}          | ${2}
  ${5}    | ${1}   | ${13}         | ${1}          | ${13}
  ${5}    | ${0}   | ${2000000000} | ${1}          | ${2000000001}
  ${5}    | ${0}   | ${2000000000} | ${2000000000} | ${2}
  ${5}    | ${100} | ${123456789}  | ${2}          | ${61728345}
  ${5}    | ${0}   | ${2000000000} | ${2}          | ${1000000001}
  ${5}    | ${0}   | ${2000000000} | ${3}          | ${666666667}
`('count divisibles $a $b $k', ({ timeout, a, b, k, output }) => {
  const startDate = +new Date();
  const totalDivisibles = divisibles(a, b, k);

  const endDate = +new Date();

  expect(totalDivisibles).toEqual(output);
  expect(endDate - startDate).toBeLessThan(timeout);
});
