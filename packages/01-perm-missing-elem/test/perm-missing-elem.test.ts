import { missingElement } from '../src/perm-missing-elem-2';

it.each`
  input           | output
  ${[2, 3, 1, 5]} | ${4}
  ${[2, 3, 4, 5]} | ${1}
  ${[2, 3, 1, 4]} | ${5}
  ${[]}           | ${1}
  ${[2]}          | ${1}
  ${[1]}          | ${2}
`(
  'find missing element $input',
  ({ input, output }) => {
    const element = missingElement(input);

    expect(element).toEqual(output);
  },
  100,
);
