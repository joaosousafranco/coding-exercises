import { countAliveFish } from '../src/fish';

it.each`
  fish                                          | directions                                             | output
  ${[4]}                                        | ${[1]}                                                 | ${1}
  ${[4, 3]}                                     | ${[1, 0]}                                              | ${1}
  ${[4, 3]}                                     | ${[0, 1]}                                              | ${2}
  ${[4, 3]}                                     | ${[1, 1]}                                              | ${2}
  ${[4, 3, 2, 1, 5]}                            | ${[1, 0, 0, 0, 0]}                                     | ${1}
  ${[4, 3, 2, 1, 5]}                            | ${[0, 1, 0, 0, 0]}                                     | ${2}
  ${[4, 3, 2, 1, 5, 6, 8, 7]}                   | ${[0, 1, 0, 0, 0, 0, 1, 0]}                            | ${4}
  ${[1, 2, 3, 4, 5]}                            | ${[1, 0, 0, 0, 0]}                                     | ${4}
  ${[1, 2, 3, 4, 5]}                            | ${[1, 0, 1, 0, 1]}                                     | ${3}
  ${new Array(100000).map((a, index) => index)} | ${new Array(100000).map((a) => (a % 2 === 0 ? 0 : 1))} | ${100000}
`(
  'count number of fish that will stay alive $fish.length $output',
  ({ fish, directions, output }) => {
    const alive = countAliveFish(fish, directions);

    expect(alive).toEqual(output);
  },
);
