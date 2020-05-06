import React from 'react';
import styles from './WorksItem.module.css'
import Button from "../../Button/Button";

const WorksItem = (props) => {

    return (
        <div className={styles.work} style={props.style}>
            <Button className={styles.button} name={props.name} />
        </div>
    );
}

export default WorksItem;
