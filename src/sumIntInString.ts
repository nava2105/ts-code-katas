/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld1'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

export const sumOfIntegersInString = (input: string): number => {
  const numbers = input.match(/\d+/g);
  
  if (!numbers) return 0;
  
  return numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
}