import React from 'react';
import logo from '../svgs/supercharge-logo.svg';
import DeckSelector from "./DeckSelector";

const Header = props => (
    <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
             <span className="navbar-brand">
                <img src={logo} width="30" height="30"
                     className="d-inline-block align-top logo"
                     alt="logo"/>
                Memory game
             </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            {props.isGameStart &&
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-2">
                    <li className="nav-item active">
                        <DeckSelector type="header-deck-size" startGame={props.startGame}/>
                    </li>
                </ul>
            </div>
            }
        </nav>
    </header>
);

export default Header;
