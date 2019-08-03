
let cardGlobalCount = 0
let cardUIGlobalCount = 0

/**
 * Card model
 * manage state
 *
 * @class Card
 */
class Card {

    constructor(title = '', message = '') {
        this.title = title
        this.message = message
        this.owner = {}
        this.users = []
        cardGlobalCount++
    }

}


/**
 * Card component
 *
 * @class CardUI
 */
class CardUI {
    /**
     *Creates an instance of CardUI.
     * @param {Card} card
     * @memberof CardUI
     */
    constructor(card) {
        this.card = card

        this.editingMode = {
            title: false
        }
        cardUIGlobalCount++
        console.log(cardUIGlobalCount)
    }

    /**
     * Render a CardUI element on the parentElement
     * if replace is true it will replace the content on the parent element
     * @param {HTMLElement} [parentElement]
     * @param {boolean} [replace=false]
     * @returns {HTMLDivElement}
     * @memberof CardUI
     */
    render(parentElement, replace = false) {

    }

    /**
     * create the HTML element representation of the card
     *
     * @returns {HTMLElement}
     * @memberof CardUI
     */
    createElement() {
        const inputId = `js-card-title-input-${cardUIGlobalCount}`
        const headerId = `js-card-header-${cardUIGlobalCount}`
        const createLine = item => {
            return `<li>${item}</li>`
        }
        const html = `
        <!-- CARD -->
        <div class="js-card-item" id="js-card-item-${cardUIGlobalCount}" >
            <header id="${headerId}">
                ${!this.editingMode.title ? this.card.title : `<input type="text" id="${inputId}" name="card-title" placeholder="Name">`}
            </header>
            <section>
                <strong>people: </strong>
                <ul>
                    ${this.card.users.map(createLine).join('\n')}
                </ul>
    
            </section>
        </div>`
        const element = document.createElement('div')
        element.innerHTML = html
        const header = element.querySelector(`#${headerId}`)
        // header.addEventListener('click', event => this.handleTitleEdit(event))
        header.addEventListener('dblclick', event => this.handleTitleEdit(event))
        return element
    }

    handleTitleEdit(event) {
        this.editingMode.title = true
        console.log('editing mode', this.editingMode.title? 'on': 'off')
    }

}




window.Card = Card
window.CardUI = CardUI