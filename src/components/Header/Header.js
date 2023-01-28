import React from 'react';
import logo from '../../logo.svg';

// import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} className="header-logo header-logo header__logo" alt="logo"/>
                <nav className='header__nav'>
                    <a href="/">home</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
