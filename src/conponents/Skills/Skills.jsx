import React from 'react';
import styles from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";
import Title from "../Title/Title";


const Skills = (props) => {
    let state = {
        skillsName: ['HTML5', 'CSS', 'JS', 'ReactJs',  'Redux', 'GitHub'],
        skillsImages: [<img src="https://img.icons8.com/ios-filled/150/000000/html-5.png"/>,
                       <img src="https://img.icons8.com/ios-filled/250/000000/css3.png"/>,
                       <img src="https://img.icons8.com/ios/250/000000/javascript.png"/>,
                       <img src="https://img.icons8.com/ios-filled/250/000000/react-native.png"/>,
                       <img src="https://img.icons8.com/ios/250/000000/redux.png"/>,
                       <img src="https://img.icons8.com/ios-filled/250/000000/github.png"/>
        ]
    };

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title name={props.name}/>
                <div className={styles.skills__item}>
                    <SkillsItem name={state.skillsName[0]} image={state.skillsImages[0]}/>
                    <SkillsItem name={state.skillsName[1]} image={state.skillsImages[1]}/>
                    <SkillsItem name={state.skillsName[2]} image={state.skillsImages[2]}/>
                    <SkillsItem name={state.skillsName[3]} image={state.skillsImages[3]}/>
                    <SkillsItem name={state.skillsName[4]} image={state.skillsImages[4]}/>
                    <SkillsItem name={state.skillsName[5]} image={state.skillsImages[5]}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
