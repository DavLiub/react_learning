import React from 'react';
import NaviBar from "./header_components/NaviBar.jsx";
import Title from "./header_components/Title.jsx";

const Header = ({changePage}) => {
    return (
        <header>
            <NaviBar changePage={changePage}/>
            <Title/>
        </header>
    );
};

export default Header;