import React from 'react';
import logo from '../svgs/supercharge-logo.svg';

const Header = props => (
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
);

export default Header;
