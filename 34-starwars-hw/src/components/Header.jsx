import React from 'react';
import Navigation from "./Navigation.jsx";

const Header = ({changePage}) => {
    return (
        <header>
            <Navigation changePage={changePage}/>
            <p className="text-center py-4 h1">Luke Skywalker</p>
        </header>
    );
};

export default Header;