import React from 'react';
import styles from './Slogan.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";

const Slogan = (props) => {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div id={"slogan"} className={styles.container}>
                    <Title name={props.name} runame={props.runame} language={props.language}/>
                    <Link to="contacts" spy={true}
                          smooth={true}
                          offset={-70}
                          duration={1500}
                          className={styles.nav__link}
                    >
                        <Button name={props.buttonName} runame={props.rubuttonName} language={props.language}></Button>
                    </Link>

                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
