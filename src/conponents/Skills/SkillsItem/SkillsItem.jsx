import React from 'react';
import styles from './SkillsItem.module.css'

const SkillsItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                {props.image}
            </div>
            <div className={styles.item__name}>
                <h3>{props.name}</h3>
            </div>
        </div>
    );
}

export default SkillsItem;

