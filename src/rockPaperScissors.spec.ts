import { game } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('should works', () => {
    const value = 'Rock';
    const resp = game(value, value);
    expect(resp).toEqual('');
  });
});
