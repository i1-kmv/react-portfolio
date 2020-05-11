import React from 'react';
import styles from './Main.module.css'


const Main = () => {
    return (
        <div className={styles.main} id={'main'}>
            <div className={styles.container}>
                <div className={styles.main__greeting}>
                    <span className={styles.greeting__item} >Hi There!</span>
                    <span className={styles.greeting__name} >I am Yarovoy <span className={styles.greeting__surname}>Ivan</span></span>
                    <h1 className={styles.greeting__title}>I am a front-end developer</h1>
                </div>
                <div className={styles.main__photo}>
                    <div className={styles.main__image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
