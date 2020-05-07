import React from 'react';
import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
                <div className={styles.nav}>
                    <a href="" className={styles.nav__link}>Main</a>
                    <a href="#skills" className={styles.nav__link}>Skills</a>
                    <a href="#projects" className={styles.nav__link}>Projects</a>
                    <a href="#contacts" className={styles.nav__link}>Contacts</a>
                </div>
    );
}

export default NavMenu;
