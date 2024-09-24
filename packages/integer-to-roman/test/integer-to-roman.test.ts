import { intToRoman } from '../src/integer-to-roman';

it.each`
  input   | output
  ${1}    | ${'I'}
  ${5}    | ${'V'}
  ${10}   | ${'X'}
  ${50}   | ${'L'}
  ${100}  | ${'C'}
  ${500}  | ${'D'}
  ${1000} | ${'M'}
  ${800}  | ${'DCCC'}
  ${494}  | ${'CDXCIV'}
  ${3749} | ${'MMMDCCXLIX'}
  ${58}   | ${'LVIII'}
  ${1994} | ${'MCMXCIV'}
`(
  'Calculate the correct roman number for integer $input',
  ({ input, output }) => {
    const roman = intToRoman(input);

    expect(roman).toEqual(output);
  },
  80,
);
