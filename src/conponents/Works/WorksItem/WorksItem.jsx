import React from 'react';
import styles from './WorksItem.module.css'
import Button from "../../Button/Button";

const WorksItem = (props) => {
    return (
        <div className={styles.work}>
            <div className={styles.img}>
                <img src="#" alt="картинка"/>
            </div>
            <Button name={props.name}/>
            <div className={styles.description}>
                <span>Название проекта</span>
                <span>Краткое описание</span>
            </div>
        </div>
    );
}

export default WorksItem;
