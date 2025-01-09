import { sumOfIntegersInString } from "./sumIntInString";

describe('Sum Integers in String code kata', () => {
  test('If the input is 1, must return 1', () => {
    const resp = sumOfIntegersInString('1');
    expect(resp).toEqual(1);
  });
  test('If the input is h3ll0w0rld1, must return 4', () => {
    const resp = sumOfIntegersInString('h3ll0w0rld1');
    expect(resp).toEqual(4);
  });
  test('If the input is The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog, must return 3635', () => {
    const resp = sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog');
    expect(resp).toEqual(3635);
  });
  test('If the input is N4V4 1S 4LS0 M4730, must return 4743', () => {
    const resp = sumOfIntegersInString('N4V4 1S 4LS0 M4730');
    expect(resp).toEqual(4743);
  });
});
