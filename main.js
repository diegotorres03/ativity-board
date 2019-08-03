
const column = document.getElementById('board-column')
const btnAddCard = document.getElementById('btn-add-card')

const cards = []
const card = new Card('sample card')

createCard(column, card)


btnAddCard.addEventListener('click', event => createCard(column))



/**
 * create a card element and append it to parent
 *
 * @param {HTMLElement} parent
 * @param {Card} card
 */
function createCard(parent, card) {
    const cardData = card ||  new Card()
    const cardUI = new CardUI(cardData)
    cardUI.editingMode.title = !card
    const cardElemet = cardUI.createElement()
    parent.prepend(cardElemet)
}