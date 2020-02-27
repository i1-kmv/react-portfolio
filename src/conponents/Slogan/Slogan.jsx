import React from 'react';
import styles from './Slogan.module.css'

const Slogan = () => {
    return (
        <div className={styles.slogan}>
       <div className={styles.container}>
           <div className={styles.text}>
               <p>Рассматриваю варианты удаленной работы</p>
           </div>
           <div className={styles.title}>
               <p>Нанять меня</p>
           </div>
       </div>
        </div>
    );
}

export default Slogan;
