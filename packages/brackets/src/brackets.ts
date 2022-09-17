export const isProperlyNested = (brackets: string) => {
  const symbols = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const symbolStack = [];
  let isNested = 1;

  for (let i = 0; i < brackets.length && isNested; i += 1) {
    const top = symbolStack[symbolStack.length - 1];
    const symbol = brackets[i];

    if (!top || (symbols[top] && symbols[symbol])) {
      symbolStack.push(symbol);
    }

    if (!symbols[symbol] && symbols[top] !== symbol) {
      isNested = 0;
    }

    if (symbols[top] === symbol) {
      symbolStack.pop();
    }
  }

  return symbolStack.length ? 0 : isNested;
};
