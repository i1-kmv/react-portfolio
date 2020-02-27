import React from 'react';
import styles from './WorksItem.module.css'

const WorksItem = () => {
    return (
        <div className={styles.work}>
            <div className={styles.img}>
                <img src="#" alt="картинка"/>
            </div>
            <div className={styles.link}><a href="№">Смотреть</a></div>
            <div className={styles.description}>
                <span>Название проекта</span>
                <span>Краткое описание</span>
            </div>
        </div>
    );
}

export default WorksItem;
