import React from 'react';
import styles from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";
import Title from "../Title/Title";
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";





const Skills = (props) => {

    const data = [
        {skillName: 'HTML5' , skillImage: <img src="https://img.icons8.com/ios-filled/150/000000/html-5.png"/> },
        {skillName: 'CSS' , skillImage: <img src="https://img.icons8.com/ios-filled/250/000000/css3.png"/> },
        {skillName: 'JS' , skillImage:  <img src="https://img.icons8.com/ios/250/000000/javascript.png"/>},
        {skillName:  'TS' , skillImage: <img src="https://img.icons8.com/ios/250/000000/typescript.png"/> },
        {skillName: 'ReactJs' , skillImage:    <img src="https://img.icons8.com/ios-filled/250/000000/react-native.png"/>},
        {skillName:  'Redux' , skillImage:    <img src="https://img.icons8.com/ios/250/000000/redux.png"/>},
        {skillName:  'GitHub' , skillImage:  <img src="https://img.icons8.com/ios-filled/250/000000/github.png"/> },
    ]

    const skills = data.map( (s) => {
        return <SkillsItem name={s.skillsName} image={s.skillImage}/>
    })

    return (

        <div className={styles.skills} id={'skills'} >
            <div className={styles.container}>
                <Title name={props.name}/>
                <Fade clear>
                <div className={styles.skills__item} >
                    {skills}
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;
