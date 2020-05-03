import React from 'react';
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__greeting}>
                    <span className={styles.greeting__item} >Привет!</span>
                    <span className={styles.greeting__name} >Я Иван <span className={styles.greeting__surname}>Яровой</span></span>
                    <h1 className={styles.greeting__title}>Я front-end разработчик</h1>
                </div>
                <div className={styles.main__photo}>
                    <div className={styles.main__image}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
