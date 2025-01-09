import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('If the input is -6 the result should be Error', () => {
    const resp = game(-6);
    expect(resp).toEqual('Error');
  });test('If the input is 0 the result should be Error', () => {
    const resp = game(0);
    expect(resp).toEqual('Error');
  });test('If the input is 1 the result should be Odd', () => {
    const resp = game(1);
    expect(resp).toEqual('Odd');
  });
  test('If the input is 5 the result should be Odd23Even5', () => {
    const resp = game(5);
    expect(resp).toEqual('Odd23Even5');
  });
  test('If the input is 7 the result should be Odd23Even5Even7', () => {
    const resp = game(7);
    expect(resp).toEqual('Odd23Even5Even7');
  });
  test('If the input is 13 the result should be Odd23Even5Even7EvenOddEven11Even13', () => {
    const resp = game(13);
    expect(resp).toEqual('Odd23Even5Even7EvenOddEven11Even13');
  });
});
