import React from 'react';
import logo from '../svgs/supercharge-logo.svg';
import DeckSelector from "./DeckSelector";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuActive: false
        }
    }

    toggleMenu = () => {
        const isMenuActive = !this.state.isMenuActive;
        this.setState({isMenuActive});
    };

    renderDeckSelector = () => {
        if (this.props.isGameStart) {
            let className = 'navbar-collapse';
            if (!this.state.isMenuActive) {
                className += ' collapse';
            }

            return (
                <React.Fragment>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarToggler"
                            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className={className} id="navbarToggler">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-2">
                            <li className="nav-item active">
                                <DeckSelector type="header-deck-size" startGame={this.props.startGame}/>
                            </li>
                        </ul>
                    </div>
                </React.Fragment>
            )
        }
    };

    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <span className="navbar-brand">
                        <img src={logo} width="30" height="30"
                             className="d-inline-block align-top logo"
                             alt="Restart game"
                             onClick={this.props.resetGame}
                        />
                        Memory game
                    </span>
                    {this.renderDeckSelector()}
                </nav>
            </header>
        )
    }
}

export default Header;
