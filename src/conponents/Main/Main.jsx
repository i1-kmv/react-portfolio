import React from 'react';
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <span >Привет!</span>
                    <span >Я Иван <span>Яровой</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
