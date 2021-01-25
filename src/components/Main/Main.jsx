import React from 'react';
import styles from './Main.module.css'
import {Link} from "react-scroll";


const Main = (props) => {
    return (
        <div className={styles.main} id={'main'}>
            <div className={styles.container}>
                <div className={styles.main__greeting}>
                    <span className={styles.greeting__item} >  {(props.language === 'eng') ? 'Hi There!' : 'Приветствую!'}</span>
                    <span className={styles.greeting__name} >{(props.language === 'eng') ? 'I am Yarovoy' : 'Я Яровой'}  <span className={styles.greeting__surname}>{(props.language === 'eng') ? 'Ivan' : 'Иван'}</span></span>
                    <h1 className={styles.greeting__title}>{(props.language === 'eng') ? 'I am a front-end developer' : 'Я front-end разработчик'} </h1>
                </div>
                <div className={styles.main__photo}>
                    <div className={styles.main__image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
