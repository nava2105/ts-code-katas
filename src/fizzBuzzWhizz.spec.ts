import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('if the input is -1, the output should be Error', () => {
    const result = game(-1);
    expect(result).toEqual('Error');
  });
  test('if the input is 0, the output should be Error', () => {
    const result = game(0);
    expect(result).toEqual('Error');
  });
  test('if the input is 1, the output should be 1', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test('if the input is 1.3, the output should be Error', () => {
    const result = game(1.3);
    expect(result).toEqual('Error');
  });
  test('if the input is 2, the output should be Wizz', () => {
    const result = game(2);
    expect(result).toEqual('Whizz');
  });
  test('if the input is 3, the output should be FizzWizz', () => {
    const result = game(3);
    expect(result).toEqual('FizzWhizz');
  });
  test('if the input is 4, the output should be 4', () => {
    const result = game(4);
    expect(result).toEqual(4);
  });
  test('if the input is 5, the output should be BuzzWizz', () => {
    const result = game(5);
    expect(result).toEqual('BuzzWhizz');
  });
  test('if the input is 7, the output should be Wizz', () => {
    const result = game(7);
    expect(result).toEqual('Whizz');
  });
  test('if the input is 15, the output should be FizzBuzz', () => {
    const result = game(15);
    expect(result).toEqual('FizzBuzz');
  });
  test('if the input is 113, the output should be 113', () => {
    const result = game(113);
    expect(result).toEqual(113);
  });
});