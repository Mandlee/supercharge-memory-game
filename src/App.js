import React, {Component} from 'react';

import './scss/App.scss';
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";

// const CARDS = ['angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'];

class App extends Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
    }

    startGame(deckSize) {
        console.log(deckSize);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <StartScreen startGame={this.startGame}/>
            </div>
        );
    }
}

export default App;
