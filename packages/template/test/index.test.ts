import { buildProjectHello } from '../src/business';

it('Build project hello', () => {
  const projectHello = buildProjectHello('test');

  expect(projectHello).toEqual('Im the project test');
});
