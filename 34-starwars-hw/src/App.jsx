import React, {useState} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    const [currentPage, setCurrentPage] = useState("Home");

    const changePage=(page)=>{
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