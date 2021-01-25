import React from 'react'
import styles from './Footer.module.css'
import FooterItem from "./FooterItem/FooterItem"
import Fade from 'react-reveal/Fade'

const Footer = (props) => {

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
                        <span>{(props.language === 'eng') ? 'Yarovoy Ivan' : 'Яровой Иван'}</span>
                    </div>
                    <div className={styles.footer__contacts}>
                        {footerItems}
                    </div>
                    <div className={styles.rights}>
                        <p>{(props.language === 'eng') ? '2021 ©All rights reserved' : '2021 ©Все права защищены'}</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
