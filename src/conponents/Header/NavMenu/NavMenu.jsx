import React from 'react';
import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
                <div className={styles.nav}>
                    <a href="" className={styles.nav__link}>Main</a>
                    <a href="" className={styles.nav__link}>Skills</a>
                    <a href="" className={styles.nav__link}>Works</a>
                    <a href="" className={styles.nav__link}>Contacts</a>
                </div>
    );
}

export default NavMenu;
