import { minimalPerimeter } from '../src/min-perimeter-rectangle';

it.each`
  input | output
  ${30} | ${22}
  ${48} | ${28}
  ${1}  | ${4}
  ${4}  | ${8}
  ${9}  | ${12}
`(
  'minimal perimeter of any rectangle whose area is exactly equal to $input',
  ({ input, output }) => {
    const perimeter = minimalPerimeter(input);

    expect(perimeter).toEqual(output);
  },
);
