import React from 'react';
import styles from './FooterItem.module.css'

const FooterItem = (props) => {
    return (
        <div className={styles.footer__item}>
            <a href={props.link} target={'blank'}>{props.image} </a>
        </div>
    );
}

export default FooterItem;
