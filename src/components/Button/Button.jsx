import React from 'react';
import styles from './Button.module.css'

const Button  = (props) => {
    return (
        <a href="#"className={styles.button} >{props.name}</a>

    )
}

export default  Button;
