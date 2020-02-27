import React from 'react';
import styles from './SkillsItem.module.css'

const SkillsItem = () => {
    return (
        <div className={styles.item}>
            <img className={styles.itemImage} src="" alt=""/>
            <div className={styles.itemName}>
                <p>React</p>
            </div>
            <div className={styles.itemDescription}>
                <p>Подробное описание навыка</p>
            </div>
        </div>
    );
}

export default SkillsItem;

