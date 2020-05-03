import React from 'react';
import styles from './SkillsItem.module.css'

const SkillsItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>{props.image}</div>
            <div className={styles.item__name}>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default SkillsItem;

