import React from 'react';
import styles from './Slogan.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';

const Slogan = (props) => {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title name={props.name}/>
                    <Button name={props.buttonName}/>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
