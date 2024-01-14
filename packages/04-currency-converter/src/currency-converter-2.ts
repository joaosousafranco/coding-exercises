// NOTE: ChatGPT solution

const currencies: Array<[string, string, number]> = [
  ['USD', 'EUR', 0.89],
  ['CAD', 'USD', 0.79],
  ['GBP', 'USD', 1.34],
  ['AUD', 'HKF', 5.68],
  ['EUR', 'CHF', 1.03],
  ['GBP', 'CAD', 1.7],
  ['JPY', 'CAD', 0.011],
  ['GBP', 'JPY', 154.28],
];

function findConversionRate(from, to) {
  // Check if direct conversion rate is available
  const directRate = currencies.find(
    (currency) => currency[0] === from && currency[1] === to,
  );
  if (directRate) {
    return directRate[2];
  }

  // Check if inverse conversion rate is available
  const inverseRate = currencies.find(
    (currency) => currency[0] === to && currency[1] === from,
  );
  if (inverseRate) {
    return 1 / inverseRate[2];
  }

  // Check if there is an indirect conversion through a common currency
  const commonCurrency = currencies.find(
    (currency) => currency[0] === from || currency[0] === to,
  );
  if (commonCurrency) {
    const rate1 = findConversionRate(from, commonCurrency[1]);
    const rate2 = findConversionRate(commonCurrency[1], to);
    if (rate1 !== null && rate2 !== null) {
      return rate1 * rate2;
    }
  }

  // If no conversion rate is found, return null
  return null;
}

function roundToThreeDecimals(number) {
  return Math.round(number * 1000) / 1000;
}

export function convert(amount, from, to) {
  // Find the conversion rate between 'from' and 'to' currencies
  const conversionRate = findConversionRate(from, to);

  // If conversion rate is not found, return an error message
  if (conversionRate === null) {
    return null;
  }

  // Calculate the converted amount rounded to 3 decimals
  const convertedAmount = roundToThreeDecimals(amount * conversionRate);

  return convertedAmount;
}
