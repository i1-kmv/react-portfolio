import React from 'react';
import styles from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';



const Skills = () => {
    let state = {
        skillsName: ['JS', 'React', 'HTML', 'CSS', 'GitHub', 'Redux'],
    }

    return (
        <div className={styles.skills}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h2 >Мои скиллы</h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.skills__item}>
                <SkillsItem name={state.skillsName[0]} />
                <SkillsItem name={state.skillsName[1]} />
                <SkillsItem name={state.skillsName[2]} />
                <SkillsItem name={state.skillsName[3]} />
                <SkillsItem name={state.skillsName[4]} />
                <SkillsItem name={state.skillsName[5]} />
            </div>
        </div>
        </div>
    );
}

export default Skills;
