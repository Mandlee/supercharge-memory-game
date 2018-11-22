import React from "react";

class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: 3 //setting default value
        };
    }

    deckSize = React.createRef();

    handleChange(event) {
        // console.log(event.target);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.startGame(this.deckSize.current.value);
    }

    render() {
        return (
            <div className="start-game">
                <div className="container">
                    <h1 className="company-title">Supercharge</h1>
                    <h2 className="game-name">Memory Game</h2>
                    <form onSubmit={this.handleSubmit}>
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
                </div>
            </div>
        )
    }
}

export default StartScreen;
