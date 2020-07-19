import React from 'react';
import styles from './Projects.module.css'
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import Title from "../Title/Title";
import counterImg from "../../image/2.png";
import walletImg from "../../image/3.png";
import repairImg from "../../image/4.png";
import skinaliImg from "../../image/5.png";
import Fade from 'react-reveal/Fade';


const Projects = (props) => {

    let projects = [
        {name: 'Counter', link: 'https://i1-kmv.github.io/hardCounter/',  style: {backgroundImage: `url(${counterImg})`}},
        {name: 'Expense calculator', link: 'https://i1-kmv.github.io/Present-calc/', style: {backgroundImage: `url(${walletImg})`}},
        {name: 'Repair', link: 'https://i1-kmv.github.io/repair-gh/', style: {backgroundImage: `url(${repairImg})`}},
        {name: 'Skinali', link: 'https://i1-kmv.github.io/skinali-/',   style: {backgroundImage: `url(${skinaliImg})`}},
    ]




    let projectsItems = projects.map((project) =>
        <ProjectsItem style={project.style} link={project.link} projectName={project.name}/>
    )

    return (
        <div className={styles.works}>

            <div className={styles.container} id={'projects'}>
                <Title name={props.name}/>
                <Fade bottom>
                    <div className={styles.works__items}>
                        {projectsItems}
                    </div>
                </Fade>
            </div>

        </div>
);
}

export default Projects;
