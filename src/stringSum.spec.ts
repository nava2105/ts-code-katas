import { sum } from "./stringSum";

describe('String Sum code kata', () => {
  test('If input is 3 and 5 should return 8', () => {
    const resp = sum('3', '5');
    expect(resp).toEqual('8');
  });
  test('If input is 1 and 1 should return 2', () => {
    const resp = sum('1', '1');
    expect(resp).toEqual('2');
  });
  test('If input is 5 and 8.8 should return 5', () => {
    const resp = sum('5', '8.8');
    expect(resp).toEqual('5');
  });
  test('If input is 25 and -13 should return 25', () => {
    const resp = sum('25', '-13');
    expect(resp).toEqual('25');
  });
});
