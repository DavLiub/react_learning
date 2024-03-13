import React from 'react';
import {navigation} from "../../utils/constants.jsx";
import NaviButton from "./NaviButton.jsx";

const NaviBar = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navigation.map((item, i) => <NaviButton key={i} name={item} onClick={() => changePage(item)}/>)}
            </ul>
        </nav>
    );
};

export default NaviBar;