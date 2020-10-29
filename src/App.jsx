import React, {useState} from 'react'
import './App.css'
import Projects from "./components/Projects/Projects"
import Slogan from "./components/Slogan/Slogan"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"
import Main from "./components/Main/Main"
import Particles from 'react-particles-js'
import CustomizedSnackbars from "./components/Utils/Alert"


const particlesOpt = {
    "particles": {
        "number": {
            "value": 30,
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
}


const App = () => {

    const [loaded, setLoaded] = useState(false)

    let logos = {
        titleName: ['My skills', 'My Projects', 'I work as a freelancer', 'Contacts'],
        buttonNames: ['To send', 'Hire me']
    }

    return (
        <div className="App">
            <Particles className="particles"
                       params={particlesOpt}
            />
            <Header/>
            <Main/>
            <Skills name={logos.titleName[0]}/>
            <Projects name={logos.titleName[1]}/>
            <Slogan name={logos.titleName[2]} buttonName={logos.buttonNames[1]}/>
            <Contacts name={logos.titleName[3]} buttonName={logos.buttonNames[0]} buttonType={'submit'}
                      setLoaded={setLoaded}/>
            <Footer/>
            {loaded && <CustomizedSnackbars/>}
        </div>
    )
}

export default App;
