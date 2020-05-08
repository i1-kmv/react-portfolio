import React from 'react';
import styles from './NavMenu.module.css'
import {Link} from "react-scroll";

const NavMenu = () => {
    return (
        <div className={styles.nav}>
            <Link to="main" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}>
            <a href="" className={styles.nav__link}>Main</a>
            </Link>
            <Link to="skills" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}>
                <a href="" className={styles.nav__link}>Skills</a>
            </Link>
            <Link to="projects" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}>
                <a href="" className={styles.nav__link}>Projects</a>
            </Link>
            <Link to="contacts" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}>
                <a href="" className={styles.nav__link}>Contacts</a>
            </Link>
        </div>
    );
}

export default NavMenu;
