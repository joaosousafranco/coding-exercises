import { answers } from '../src/count-semi-primes';

it.each`
  n     | p             | q               | output
  ${26} | ${[1, 4, 16]} | ${[26, 10, 20]} | ${[10, 4, 0]}
`(
  'elements specifying the consecutive answers to all the queries $input',
  ({ n, p, q, output }) => {
    const queriesAnswers = answers(n, p, q);

    expect(queriesAnswers).toEqual(output);
  },
);
