import React from 'react';
import './App.css';
import Works from "./conponents/Works/Works";
import Slogan from "./conponents/Slogan/Slogan";
import Contacts from "./conponents/Contacts/Contacts";
import Footer from "./conponents/Footer/Footer";
import Header from "./conponents/Header/Header";
import Skills from "./conponents/Skills/Skills";
import Main from "./conponents/Main/Main";


const App = () => {
    return (
        <div className="App">
          <div className="portfolio">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Slogan/>
            <Contacts/>
            <Footer/>
          </div>
        </div>
    );
}

export default App;
