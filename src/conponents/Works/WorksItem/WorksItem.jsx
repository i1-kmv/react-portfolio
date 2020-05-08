import React from 'react';
import styles from './WorksItem.module.css'





const WorksItem = (props) => {

    return (
        <div className={styles.work} style={props.style}>
            <a target={'blank'} className={styles.link} href={props.link}>{props.projectName}</a>
        </div>
    );
}

export default WorksItem;
