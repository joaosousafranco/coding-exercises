import { addTwoNumbers } from '../src/add-two-numbers-exercise';

it.each`
  l1                       | l2              | output
  ${[2, 4, 3]}             | ${[5, 6, 4]}    | ${[7, 0, 8]}
  ${[0]}                   | ${[0]}          | ${[0]}
  ${[9, 9, 9, 9, 9, 9, 9]} | ${[9, 9, 9, 9]} | ${[8, 9, 9, 9, 0, 0, 0, 1]}
`(
  'Calculate the correct roman number for integer $input',
  ({ l1, l2, output }) => {
    const numbers = addTwoNumbers(l1, l2);

    expect(numbers).toEqual(output);
  },
);
