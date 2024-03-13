import React, {useState} from 'react';
import {navigation} from "../../utils/constants.jsx";



const NaviButton = ({name, onClick}) => {
    let styles = "nav-item btn btn-danger mx-1"


    return (
        <li className={styles} onClick={onClick}>{name}</li>
    );
};

export default NaviButton;