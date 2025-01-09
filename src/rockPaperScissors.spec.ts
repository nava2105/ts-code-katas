import { game } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('If both players play Rock should return Is a draw', () => {
    const resp = game('Rock', 'Rock');
    expect(resp).toEqual('Is a draw');
  });
  test('If player one plays Scissors and player two plays Rock should return Player two wins', () => {
    const resp = game('Scissors', 'Rock');
    expect(resp).toEqual('Player two wins');
  });
  test('If player one plays Scissors and player two plays Paper should return Player one wins', () => {
    const resp = game('Scissors', 'Paper');
    expect(resp).toEqual('Player one wins');
  });
});
