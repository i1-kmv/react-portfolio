import React from 'react';
import styles from './NavMenu.module.css'
import {Link} from "react-scroll";


const NavMenu = (props) => {
    return (
        <div className={styles.nav}>
            <Link to="main" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                {(props.language === 'eng') ? 'Main' : 'Главная'}
            </Link>
            <Link to="skills" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                {(props.language === 'eng') ? 'Skills' : 'Навыки'}
            </Link>
            <Link to="projects" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                {(props.language === 'eng') ? 'Projects' : 'Проекты'}
            </Link>
            <Link to="slogan" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={styles.nav__link}
                  activeClass={styles.active}
            >
                {(props.language === 'eng') ? 'Contacts' : 'Контакты'}
            </Link>
        </div>
    );
}

export default NavMenu;
