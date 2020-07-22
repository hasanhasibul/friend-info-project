import React from 'react';
import './Header.css'
import logo from '../../logo.svg';
const Header = () => {
    return (
        <div>
            <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/manage">Manage Friend List</a>
            </nav>
        </div>
    );
};

export default Header;