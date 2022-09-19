import { minimalPerimeter } from '../src/min-perimeter-rectangle';

it.each`
  input | output
  ${30} | ${22}
  ${48} | ${28}
`(
  'minimal perimeter of any rectangle whose area is exactly equal to $input',
  ({ input, output }) => {
    const perimeter = minimalPerimeter(input);

    expect(perimeter).toEqual(output);
  },
);
