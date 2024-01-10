import { alecWinnerTurns } from '../src/cards-war';

it.each`
  alec        | bob         | output
  ${'A586QK'} | ${'JJ653K'} | ${4}
  ${'23A84Q'} | ${'K2Q25J'} | ${4}
  ${'A'}      | ${'A'}      | ${0}
  ${'J'}      | ${'A'}      | ${0}
`('number of turns alec will win $alec $bob', ({ alec, bob, output }) => {
  const turns = alecWinnerTurns(alec, bob);

  expect(turns).toEqual(output);
});
