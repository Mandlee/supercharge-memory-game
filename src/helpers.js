/**
 * Filtered and duplicate cards
 * @param cards - All available cards
 * @param deckSize - deckSize
 * @returns {Array|*|T[]|string}
 */
export const filterCards = (cards, deckSize) => {
    let filteredCards = cards.slice(0, deckSize);
    return filteredCards.concat(filteredCards);
};

/**
 * Check two selected cards mathing
 * @param cards
 * @param selectedCards
 * @returns {boolean}
 */
export const isMatching = (cards, selectedCards) => {
    return cards[selectedCards[0]].type === cards[selectedCards[1]].type
};

/**
 * Update the selected cards status
 * @param cards
 * @param selectedCards
 * @param newStatus
 * @returns {*}
 */
export const changeStatusOfSelected = (cards, selectedCards, newStatus) => {
    for (let value of selectedCards) {
        cards[value].status = newStatus;
    }
    return cards;
};
