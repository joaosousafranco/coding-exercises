function isDigit(char: string): boolean {
  const parsed = parseInt(char, 10);

  return !Number.isNaN(parsed);
}

export function myAtoi(rawS: string): number {
  const s = rawS.trim();
  let i = 0;
  const len = s.length;
  let sign = 1;
  let result = 0;

  // Step 2: Check if the next character is '-' or '+'
  if (i < len && (s[i] === '-' || s[i] === '+')) {
    sign = s[i] === '-' ? -1 : 1;
    i += 1;
  }

  // Step 3: Read the digits and stop on a non-digit character
  while (i < len && isDigit(s[i])) {
    result = result * 10 + parseInt(s[i], 10);
    i += 1;
  }

  // Apply the sign to the result
  result *= sign;

  // Step 4: Handle out of bounds values
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (result < INT_MIN) {
    return INT_MIN;
  }
  if (result > INT_MAX) {
    return INT_MAX;
  }

  return result;
}
