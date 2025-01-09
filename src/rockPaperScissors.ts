/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw

Return:
- PLayer one wins
- PLayer two wins
- Is a draw
*/

export const game = (playerOneMove: string, playerTwoMove: string) => {
  const rules: Record<string, string> = {
    Rock: 'Scissors',
    Scissors: 'Paper',
    Paper: 'Rock',
  };
  if (playerOneMove === playerTwoMove) {
    return 'Is a draw';
  }
  if (rules[playerOneMove] === playerTwoMove) {
    return 'Player one wins';
  }
  return 'Player two wins';
}
