export const isProperlyNested = (s: string) => {
  let isNested = true;
  const symbols = [];

  for (let i = 0; i < s.length && isNested; i += 1) {
    if (s[i] === '(') {
      symbols.push(s[i]);
    } else if (symbols[symbols.length - 1] === '(') {
      symbols.pop();
    } else {
      isNested = false;
    }
  }

  return isNested && !symbols.length ? 1 : 0;
};
