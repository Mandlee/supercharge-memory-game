import React, {Component} from 'react';

import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Card from "./components/Card";

import _shuffle from 'lodash/shuffle';
import _concat from 'lodash/concat';

import './scss/App.scss';

const CARDS = ['angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'];

const STATUS = {
    SELECTED: 'selected',
    UNSELECTED: 'unselected',
    REMOVED: 'removed'
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            selectedCards: [],
            gameStart: 0
        };

        this.startGame = this.startGame.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    // Filtered and duplicate items
    filterCards = (cards, deckSize) => {
        let filteredCards = cards.slice(0, deckSize);
        return filteredCards.concat(filteredCards);
    };

    // Start game
    startGame(deckSize) {
        console.log(deckSize);

        let multipliedCards = this.filterCards(CARDS, deckSize);
        console.log(multipliedCards);

        let shuffled = _shuffle(multipliedCards);
        console.log(shuffled);

        let cards = shuffled.map(function (value) {
            return {
                type: value,
                status: STATUS.UNSELECTED
            }
        });

        console.log(cards);

        this.setState({
            cards: cards,
            selectedCards: [],
            gameStart: 1
        });
    }

    /**
     * Flipping cards
     * @param index
     */
    flipCard(index) {
        console.log('card type=' + this.state.cards[index].type + ', index=' + index);

        // Add selected card
        let selectedCards = _concat(this.state.selectedCards, index);
        console.log(selectedCards);

        // copy state
        let cards = this.state.cards;
        console.log(cards);

        // Flip cards
        cards[selectedCards[selectedCards.length - 1]].status = STATUS.SELECTED;

        this.setState({
            selectedCards,
            cards
        })
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {!this.state.gameStart &&
                <StartScreen startGame={this.startGame}/>
                }
                <div className="card-container">
                    <div className="cards">
                        {Object.keys(this.state.cards).map(key => (
                            <Card key={`card-${key}`}
                                  index={key}
                                  flipCard={this.flipCard}
                                  card={this.state.cards[key]}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
