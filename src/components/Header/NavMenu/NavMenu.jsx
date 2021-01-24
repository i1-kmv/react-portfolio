import React from 'react';
import styles from './NavMenu.module.css'
import {Link} from "react-scroll";


const NavMenu = () => {
    return (
        <div className={styles.nav}>
            <Link to="main" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                Main
            </Link>
            <Link to="skills" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                Skills
            </Link>
            <Link to="projects" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                Projects
            </Link>
            <Link to="slogan" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                Contacts
            </Link>
        </div>
    );
}

export default NavMenu;
