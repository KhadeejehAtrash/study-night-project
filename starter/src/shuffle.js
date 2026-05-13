const shuffle = (cards) => {
  let current = cards.length;
  const newCardsArray = [...cards];

  while (current !== 0) {
    const randomIndex = Math.floor(Math.random() * current);
    current--;

    [newCardsArray[current], newCardsArray[randomIndex]] =
      [newCardsArray[randomIndex], newCardsArray[current]];
  }

  return newCardsArray;
};

// ONLY CommonJS export (for Mocha + Node)
module.exports = { shuffle };