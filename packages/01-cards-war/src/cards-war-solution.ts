const cardScores = {
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

export const alecWinnerTurns = (alec: string, bob: string) =>
  Array.from(alec).reduce((previousValue, alecCard, index) => {
    const bobCard = bob[index];

    const alecScore = cardScores[alecCard] || alecCard;
    const bobScore = cardScores[bobCard] || bobCard;

    const win = alecScore > bobScore ? 1 : 0;

    return previousValue + win;
  }, 0);
