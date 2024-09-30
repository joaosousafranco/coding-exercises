import { findPrimeDivisors } from '../src/common-prime-divisors-exercise';

it.each`
  a              | b              | output
  ${[15, 10, 3]} | ${[75, 30, 5]} | ${1}
`('prime divisors of A[K] and B[K] $a $b', ({ a, b, output }) => {
  const divisors = findPrimeDivisors(a, b);

  expect(divisors).toEqual(output);
});
