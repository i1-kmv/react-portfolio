import React from 'react';
import styles from './Header.module.css'
import NavMenu from "./NavMenu/NavMenu";
import LanguageSelection from "./LanguageSelection/LanguageSelection";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NavMenu language={props.language}/>
                <LanguageSelection setLanguage={props.setLanguage}/>
            </div>
        </div>
    );
}

export default Header;
