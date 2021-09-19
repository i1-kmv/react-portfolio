import React from 'react';
import styles from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";
import Title from "../Title/Title";
import Fade from 'react-reveal/Fade'
import vuex from '../../image/17.svg'
import {DiplomGallery} from "./DiplomGallery/DiplomGallery";



const Skills = (props) => {

    const data = [
        {skillName: 'HTML5' , skillImage: <img src="https://img.icons8.com/ios-filled/150/000000/html-5.png"/> },
        {skillName: 'CSS' , skillImage: <img src="https://img.icons8.com/ios-filled/250/000000/css3.png"/> },
        {skillName: 'JS' , skillImage:  <img src="https://img.icons8.com/ios/250/000000/javascript.png"/>},
        {skillName:  'TS' , skillImage: <img src="https://img.icons8.com/ios/250/000000/typescript.png"/> },
        {skillName: 'ReactJs' , skillImage:    <img src="https://img.icons8.com/ios-filled/250/000000/react-native.png"/>},
        {skillName:  'Redux' , skillImage:    <img src="https://img.icons8.com/ios/250/000000/redux.png"/>},
        {skillName:  'Vue' , skillImage:    <img src="https://img.icons8.com/windows/256/000000/vuejs.png"/>},
        {skillName:  'Vuex' , skillImage:    <img src={vuex}/>},
        {skillName:  'GitHub' , skillImage:  <img src="https://img.icons8.com/ios-filled/250/000000/github.png"/> },
    ]

    const skills = data.map( (s, index) => {
        return <SkillsItem name={s.skillName} image={s.skillImage} key={index}/>
    })

    return (

        <div className={styles.skills} id={'skills'} >
            <div className={styles.container}>
                <Title name={props.name} runame={props.runame} language={props.language}/>
                <Fade clear>
                <div className={styles.skills__item} >
                    {skills}
                </div>
                </Fade>
                <DiplomGallery/>
            </div>
        </div>
    );
}

export default Skills;
