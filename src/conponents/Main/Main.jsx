import React from 'react';
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <span className={styles.infoItem}>Привет!</span>
                    <span className={styles.infoItem}>Меня зовут Иван Иванов.</span>
                    <span className={styles.infoItem}>Я front-end разработчик</span>
                </div>
                <div className={styles.photo}>
                <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
