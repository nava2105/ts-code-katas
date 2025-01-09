/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.

Extra: accept more string numbers to get the addiction
 */

export const sum = (...nums: string[]): string => {
  const isNaturalNumber = (num: string): boolean => /^\d+$/.test(num) && parseInt(num, 10) > 0;

  return nums
    .map(num => (isNaturalNumber(num) ? parseInt(num, 10) : 0)) // Replace invalid numbers with 0
    .reduce((sum, current) => sum + current, 0)                 // Sum up all valid numbers
    .toString();                                               // Convert the result back to a string
};
