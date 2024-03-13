import React from 'react';

import {navigation} from "../utils/constants.jsx";
import Home from "./main_components/Home.jsx";
import AboutMe from "./main_components/AboutMe.jsx";
import StarWars from "./main_components/StarWars.jsx";
import Contact from "./main_components/Contact.jsx";

//TODO About me, Star Wars, Contact, Home - components
const Main = ({currentPage}) => {
    //TODO Switch
    switch (currentPage) {
        case navigation[0]:
            return (
                <Home/>
            );
        case navigation[1]:
            return (
                <AboutMe/>
            );
        case navigation[2]:
            return (
                <StarWars/>
            );
        case navigation[3]:
            return (
                <Contact/>
            );
        default:
            return (
                <Home/>
            );
    }

};

export default Main;