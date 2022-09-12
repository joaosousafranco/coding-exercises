import { cyclicRotation } from '../src/cyclic-rotation';

it.each`
  list               | rotations | expectedRotation
  ${[3, 8, 9, 7, 6]} | ${3}      | ${[9, 7, 6, 3, 8]}
  ${[0, 0, 0]}       | ${1}      | ${[0, 0, 0]}
  ${[1, 2, 3, 4]}    | ${4}      | ${[1, 2, 3, 4]}
  ${[]}              | ${0}      | ${[]}
  ${[]}              | ${5}      | ${[]}
  ${[2]}             | ${5}      | ${[2]}
  ${[1, 2]}          | ${1}      | ${[2, 1]}
  ${[1, 2]}          | ${2}      | ${[1, 2]}
  ${[3, 8, 9, 7, 6]} | ${100}    | ${[3, 8, 9, 7, 6]}
`(
  'rotate array $list',
  ({ list, rotations, expectedRotation }) => {
    const rotatedArray = cyclicRotation(list, rotations);

    expect(rotatedArray).toEqual(expectedRotation);
  },
  80,
);
