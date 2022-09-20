export const alecWinnerTurns = (alec: string, bob: string) => {
  const symbolsMap = {
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  return alec.split('').reduce((turns, symbol, index) => {
    const alecSymbol = symbolsMap[symbol] || symbol;
    const bobSymbol = symbolsMap[bob[index]] || bob[index];

    return alecSymbol > bobSymbol ? turns + 1 : turns;
  }, 0);
};
