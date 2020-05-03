import React from 'react';
import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
                <div className={styles.nav}>
                    <a href="" className={styles.nav__link}>Главная</a>
                    <a href="" className={styles.nav__link}>Скиллы</a>
                    <a href="" className={styles.nav__link}>Проекты </a>
                    <a href="" className={styles.nav__link}>Контакты</a>
                </div>
    );
}

export default NavMenu;
