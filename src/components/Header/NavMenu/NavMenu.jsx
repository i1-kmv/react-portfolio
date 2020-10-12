import React from 'react';
import styles from './NavMenu.module.css'
import {Link} from "react-scroll";



const NavMenu = () => {
    return (
        <div className={styles.nav}>
            <Link  to="main"  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                 >
                Main
            </Link>
            <Link to="skills" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                 >
                Skills
            </Link>
            <Link to="projects" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                 >
                Projects
            </Link>
            <Link to="contacts" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                 >
                Contacts
            </Link>
        </div>
    );
}

export default NavMenu;