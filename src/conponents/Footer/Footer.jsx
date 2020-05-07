import React from 'react';
import styles from './Footer.module.css'
import FooterItem from "./FooterItem/FooterItem";
import Fade from 'react-reveal/Fade';

const Footer = () => {
    let state = {
        itemLink: ['https://github.com/i1-kmv', 'https://vk.com/id275446962', 'https://t.me/i1_kmv91'],
        itemImage: [<img src="https://img.icons8.com/ios-filled/150/000000/github.png"/>,
            <img src="https://img.icons8.com/ios-filled/150/000000/vk-com.png"/>,
            <img src="https://img.icons8.com/ios-filled/100/000000/sent.png"/>
        ]
    }

    return (
        <div className={styles.footer}>
            <Fade clear>
                <div className={styles.container}>
                    <div className={styles.footer__title}>
                        <span>Yarovoy Ivan</span>
                    </div>
                    <div className={styles.footer__contacts}>
                        <FooterItem link={state.itemLink[0]} image={state.itemImage[0]}/>
                        <FooterItem link={state.itemLink[1]} image={state.itemImage[1]}/>
                        <FooterItem link={state.itemLink[2]} image={state.itemImage[2]}/>
                    </div>
                    <div className={styles.rights}>
                        <p>2020 ©All rights reserved</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
