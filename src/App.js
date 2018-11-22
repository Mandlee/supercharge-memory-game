import React, {Component} from 'react';
import logo from './svgs/supercharge-logo.svg';

import './scss/App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                        <span className="navbar-brand">
                            <img src={logo} width="30" height="30"
                                 className="d-inline-block align-top logo"
                                 alt="logo"/>
                            Memory game
                        </span>
                    </nav>
                </header>
                <div className="start-game">
                    <div className="container">
                        <h1>Supercharge</h1>
                        <h2>Memory Game</h2>
                        <form>
                            <label htmlFor="deck-size">Deck size:</label>
                            <select>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="10">10</option>
                            </select>
                            <button type="submit" className="btn-primary btn">Start New Game</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
