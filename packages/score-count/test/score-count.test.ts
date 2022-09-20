import { totalScore } from '../src/score-count';

it.each`
  tests                                                                  | results                                                                 | output
  ${['test1a', 'test2', 'test1b', 'test1c', 'test3']}                    | ${['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']} | ${33}
  ${['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a']} | ${['Wrong answer', 'OK', 'OK', 'Runtime error', 'OK']}                  | ${50}
`('total score $tests', ({ tests, results, output }) => {
  const score = totalScore(tests, results);

  expect(score).toEqual(output);
});
