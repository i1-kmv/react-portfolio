import React from 'react';
import rus from '../../../image/rus.png'
import eng from '../../../image/eng.png'
import styles from './LanguageSelection.module.css'




const LanguageSelection = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.item} onClick={() => props.setLanguage('rus')}><img src={rus} alt=""/></div>
            <div className={styles.item} onClick={() => props.setLanguage('eng')}><img src={eng} alt=""/></div>
        </div>
    );
}

export default LanguageSelection;
