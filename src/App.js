import React from 'react';
import './App.css';
import Works from "./components/Works/Works";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Main from "./components/Main/Main";
import Particles from 'react-particles-js';


const particlesOpt = {
    "particles": {
        "number": {
            "value":30,
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};




const App = () => {
    let state = {
        titleName: ['My skills', 'My Projects', 'I work as a freelancer', 'Contacts'],
        buttonNames: ['To send','Hire me']
    };

    return (
        <div className="App">
                <Particles className="particles"
                           params={particlesOpt}
                />
                <Header/>
                <Main/>
                <Skills name={state.titleName[0]}/>
                <Works name={state.titleName[1]} />
                <Slogan name={state.titleName[2]} buttonName={state.buttonNames[1]}/>
                <Contacts name={state.titleName[3]} buttonName={state.buttonNames[0]}/>
                <Footer/>
            </div>
    );
}

export default App;
