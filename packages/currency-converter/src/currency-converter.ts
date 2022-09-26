const currencies = [
  ['USD', 'EUR', 0.89],
  ['CAD', 'USD', 0.79],
  ['GBP', 'USD', 1.34],
  ['AUD', 'HKF', 5.68],
  ['EUR', 'CHF', 1.03],
  ['GBP', 'CAD', 1.7],
  ['JPY', 'CAD', 0.011],
  ['GBP', 'JPY', 154.28],
];

export const convert = (
  amount: number,
  from: string,
  to: string,
  originalTo = to,
  currentCurrencies = currencies,
) => {
  const conversion = currentCurrencies.find(
    (c) =>
      (c[0] === from && c[1] === originalTo) ||
      (c[1] === from && c[0] === originalTo),
  );
  if (conversion) {
    const result =
      conversion[0] === from
        ? amount * +conversion[2]
        : amount / +conversion[2];

    return Math.round(result * 1000) / 1000;
  }

  const nextConversions = currentCurrencies.filter(
    (c) => (c[0] === from || c[1] === from) && !(c[0] === from && c[1] === to),
  );

  let nextAmount = null;
  for (let i = 0; i < nextConversions.length && nextAmount === null; i += 1) {
    const nextConversion = nextConversions[i];

    const nextFrom =
      nextConversion[0] === from ? nextConversion[1] : nextConversion[0];
    const nextTo = originalTo;

    nextAmount =
      nextConversion[0] === from
        ? amount * +nextConversion[2]
        : amount / +nextConversion[2];

    const nextCurrencies = currentCurrencies.filter(
      (c) => c[0] !== nextConversion[0] && c[1] !== nextConversion[1],
    );

    nextAmount = convert(
      nextAmount,
      `${nextFrom}`,
      `${nextTo}`,
      originalTo,
      nextCurrencies,
    );
  }

  return nextAmount;
};
