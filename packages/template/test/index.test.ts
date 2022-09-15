import { buildProjectHello } from '../src/business';

it.each`
  input       | output
  ${'test'}   | ${'Im the project test'}
  ${'test 2'} | ${'Im the project test 2'}
`('Build project hello $input', ({ input, output }) => {
  const projectHello = buildProjectHello(input);

  expect(projectHello).toEqual(output);
});
