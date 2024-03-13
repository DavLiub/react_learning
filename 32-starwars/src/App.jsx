import React, {useState} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {navigation} from "./utils/constants.jsx";

const App = () => {
    const [currentPage, setCurrentPage] = useState(navigation[0]);

    const changePage=(page)=>{ //TODO * create navigation
        setCurrentPage(page);
    }

    return (
        <div>
            <Header changePage={changePage}/>
            <Main currentPage={currentPage}/>
            <Footer/>
        </div>
    );
};

export default App;