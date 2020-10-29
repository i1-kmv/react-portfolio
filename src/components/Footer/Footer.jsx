import React from 'react'
import styles from './Footer.module.css'
import FooterItem from "./FooterItem/FooterItem"
import Fade from 'react-reveal/Fade'

const Footer = () => {

    let items = [
    {itemLink: 'https://github.com/i1-kmv', itemImage: <img src="https://img.icons8.com/ios-filled/150/000000/github.png"/> },
    {itemLink:'https://vk.com/id275446962', itemImage: <img src="https://img.icons8.com/ios-filled/150/000000/vk-com.png"/>},
    {itemLink: 'https://t.me/i1_kmv91', itemImage:  <img src="https://img.icons8.com/ios-filled/100/000000/sent.png"/>}
    ]

    let footerItems = items.map(i => {
        return(
            <FooterItem link={i.itemLink} image={i.itemImage}/>
        )
    })

    return (
        <div className={styles.footer}>
            <Fade clear>
                <div className={styles.container}>
                    <div className={styles.footer__title}>
                        <span>Yarovoy Ivan</span>
                    </div>
                    <div className={styles.footer__contacts}>
                        {footerItems}
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
