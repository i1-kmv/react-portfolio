import React from 'react';
import styles from './Skills.module.css'
import SkillsItem from "./SkillsItem/SkillsItem";

const Skills = () => {
    return (
        <div className={styles.skills}>
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Мои скиллы</p>
            </div>
            <div className={styles.skillsItem}>
                <SkillsItem/>
                <SkillsItem/>
                <SkillsItem/>
            </div>
        </div>
        </div>
    );
}

export default Skills;
