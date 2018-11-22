import React from "react";

class DeckSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: 3
        };
    }

    deckSize = React.createRef();

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        //let's start the game
        this.props.startGame(this.deckSize.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.type}>
                <label htmlFor="deck-size">Deck size:</label>
                <select ref={this.deckSize} value={this.state.value} onChange={this.handleChange}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                </select>
                <button type="submit" className="btn-primary btn start-game-btn">Start New Game</button>
            </form>
        )
    }
}

export default DeckSelector;
