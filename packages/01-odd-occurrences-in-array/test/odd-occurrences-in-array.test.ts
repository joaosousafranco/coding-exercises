import { ocurrences } from '../src/odd-occurrences-in-array-exercise';

it.each`
  input                    | output
  ${[9, 3, 9, 3, 9, 7, 9]} | ${7}
  ${[9, 3, 9]}             | ${3}
  ${[42]}                  | ${42}
`(
  'find ocurrences $input',
  ({ input, output }) => {
    const odd = ocurrences(input);

    expect(odd).toEqual(output);
  },
  1000,
);
