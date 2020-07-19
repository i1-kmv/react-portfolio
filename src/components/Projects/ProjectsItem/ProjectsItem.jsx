import React from 'react';
import styles from './ProjectsItem.module.css'





const ProjectsItem = (props) => {

    return (
        <div className={styles.work} style={props.style}>
            <a target={'blank'} className={styles.link} href={props.link}>{props.projectName}</a>
        </div>
    );
}

export default ProjectsItem;
