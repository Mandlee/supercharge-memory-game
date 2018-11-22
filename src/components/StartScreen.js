import React from "react";
import DeckSelector from "./DeckSelector";

const StartScreen = props => (
    <div className="start-game">
        <div className="container">
            <h1 className="company-title">Supercharge</h1>
            <h2 className="game-name">Memory Game</h2>
            <DeckSelector type="start-deck-size" startGame={props.startGame}/>
        </div>
    </div>
);

export default StartScreen;
