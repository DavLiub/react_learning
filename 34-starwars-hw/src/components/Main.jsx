import React from 'react';
import {navItems} from "../utils/constants.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";

const Main = ({currentPage}) => {
    switch (currentPage){
        case navItems[0]:
            return <Home/>;
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
    }
};

export default Main;