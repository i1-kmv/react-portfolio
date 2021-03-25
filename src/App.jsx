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

    const [language, setLanguage] = useState('eng')

    const [loaded, setLoaded] = useState(false)

    let logos = {
        titleName: ['My skills', 'My Projects', 'I work as a freelancer', 'Contacts'],
        titleTranslateName: ['Технологии', 'Мои проекты', 'Работаю на фрилансе', 'Контакты' ],
        buttonNames: ['To send', 'Hire me'],
        buttonTranslateName:['Отправить', 'Нанять меня']
    }

    return (
        <div className="App">
            <Particles className="particles"
                       params={particlesOpt}
            />
            <Header language={language} setLanguage={setLanguage}/>
            <Main language={language}/>
            <Skills name={logos.titleName[0]} runame={logos.titleTranslateName[0]} language={language}/>
            <Projects name={logos.titleName[1]} runame={logos.titleTranslateName[1]} language={language}/>
            <Slogan name={logos.titleName[2]} runame={logos.titleTranslateName[2]} buttonName={logos.buttonNames[1]} rubuttonName={logos.buttonTranslateName[1]} language={language}/>
            <Contacts name={logos.titleName[3]} runame={logos.titleTranslateName[3]} buttonName={logos.buttonNames[0]}  rubuttonName={logos.buttonTranslateName[0]}  buttonType={'submit'}
                      setLoaded={setLoaded} language={language}/>
            <Footer language={language}/>
            {loaded && <CustomizedSnackbars/>}
        </div>
    )
}

export default App;
