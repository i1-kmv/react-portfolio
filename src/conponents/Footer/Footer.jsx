import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Иван Иванов</p>
                </div>
                <div className={styles.form}>
                    <div className={styles.formItem}></div>
                    <div className={styles.formItem}></div>
                    <div className={styles.formItem}></div>
                    <div className={styles.formItem}></div>
                </div>
                <div className={styles.button}>
                    <p>2019 Все права защищены</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
