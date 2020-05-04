import React from 'react';
import styles from './Slogan.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";

const Slogan = (props) => {
    return (
        <div className={styles.slogan}>
       <div className={styles.container}>
           <Title name={props.name}/>
           <Button name={props.buttonName}/>
       </div>
        </div>
    );
}

export default Slogan;
