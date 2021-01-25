import React from 'react';
import styles from './Title.module.css';






const Title = (props) => {


    return (
                <div className={styles.title}>
                    <h2>{(props.language === 'eng') ? props.name : props.runame}</h2>
                    <div className={styles.title__line}></div>
                </div>
    )
}

export default Title;
