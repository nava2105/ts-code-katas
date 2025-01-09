/**
The OddEvenPrime Kata
Write a program that prints numbers within specified range lets say 1 to 100.
- If number is odd print 'Odd' instead of the number.
- If number is even print 'Even' instead of number.
- Print number as a string, if number is Prime.
 */

export const game = (input: number) => {
  if (input<1) return 'Error';
  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let result = "";
  for (let i = 1; i <= input; i++) {
    if (isPrime(i)) result += i;
    else if (i % 2 === 0) result += 'Even';
    else result += 'Odd';
  }
  return result;
}