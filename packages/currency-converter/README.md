# Currency Converter

## Introduction

Given a set of currencies and their conversion rate:

const currencies = [
  ['USD', 'EUR', 0.89],
  ['CAD', 'USD', 0.79],
  ['GBP', 'USD', 1.34],
  ['AUD', 'HKF', 5.68],
  ['EUR', 'CHF', 1.03],
  ['GBP', 'CAD', 1.70],
  ['JPY', 'CAD', 0.011],
  ['GBP', 'JPY', 154.28]
];

Create a convert function that finds the conversion rate between two currencies:

convert(amount, from, to)

## Time Limit

- 120 minutes

## Test inputs

- (10, 'USD', 'EUR') => 8.9
- (20, 'EUR', 'JPY') => 2586
- (5, 'JPY', 'AUD') => null
