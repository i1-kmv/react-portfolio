import React from 'react';
import './App.css';
import Works from "./conponents/Works/Works";
import Slogan from "./conponents/Slogan/Slogan";
import Contacts from "./conponents/Contacts/Contacts";
import Footer from "./conponents/Footer/Footer";
import Header from "./conponents/Header/Header";
import Skills from "./conponents/Skills/Skills";
import Main from "./conponents/Main/Main";
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
        buttonNames: ['To send','Hire me', 'View the project']
    };

    return (
        <div className="App">
                <Particles className="particles"
                           params={particlesOpt}
                />
                <Header/>
                <Main/>
                <Skills name={state.titleName[0]}/>
                <Works name={state.titleName[1]} buttonName={state.buttonNames[2]}/>
                <Slogan name={state.titleName[2]} buttonName={state.buttonNames[1]}/>
                <Contacts name={state.titleName[3]} buttonName={state.buttonNames[0]}/>
                <Footer/>
            </div>
    );
}

export default App;
