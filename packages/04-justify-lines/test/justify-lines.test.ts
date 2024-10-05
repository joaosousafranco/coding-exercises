import { justifyLines } from '../src/justify-lines-exercise';

it.each`
  words                                                                                                                                                      | maxWidth | output
  ${['This', 'is', 'an', 'example', 'of', 'text', 'justification.']}                                                                                         | ${16}    | ${['This    is    an', 'example  of text', 'justification.  ']}
  ${['What', 'must', 'be', 'acknowledgment', 'shall', 'be']}                                                                                                 | ${16}    | ${['What   must   be', 'acknowledgment  ', 'shall be        ']}
  ${['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain', 'to', 'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do']} | ${20}    | ${['Science  is  what we', 'understand      well', 'enough to explain to', 'a  computer.  Art is', 'everything  else  we', 'do                  ']}
`(
  'sequence of integers representing the amount of non-divisors $input',
  ({ words, maxWidht, output }) => {
    const justifiedLines = justifyLines(words, maxWidht);

    expect(justifiedLines).toEqual(output);
  },
);
