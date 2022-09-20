export const totalScore = (tests: string[], results: string[]) => {
  const baseTestName = tests[0].match(/([a-z]+)/)[0];
  const testCounter = [];
  const groups = [];

  tests.forEach((test, index) => {
    const testGroup = +test.substring(baseTestName.length)[0];

    if (!groups[testGroup - 1]) {
      groups[testGroup - 1] = 0;
    }
    groups[testGroup - 1] += 1;

    if (results[index] === 'OK') {
      if (!testCounter[testGroup - 1]) {
        testCounter[testGroup - 1] = 0;
      }
      testCounter[testGroup - 1] += 1;
    }
  });

  const correctGroups = testCounter.filter(
    (test, index) => groups[index] === test,
  );

  return Math.round((correctGroups.length * 100) / groups.length);
};
