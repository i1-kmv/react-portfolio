import React from 'react';
import styles from './Projects.module.css'
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import Title from "../Title/Title";
import counterImg from "../../image/2.png";
import walletImg from "../../image/3.png";
import repairImg from "../../image/4.png";
import skinaliImg from "../../image/5.png";
import blogImg from "../../image/6.png";
import gotImg from '../../image/7.png';
import artImg from '../../image/8.png';
import windowsImg from '../../image/9.png';


import Fade from 'react-reveal/Fade';


const Projects = (props) => {

    let projects = [
        {name: 'Counter', link: 'https://i1-kmv.github.io/hardCounter/',  style: {backgroundImage: `url(${counterImg})`}},
        {name: 'Expense calculator', link: 'https://i1-kmv.github.io/Present-calc/', style: {backgroundImage: `url(${walletImg})`}},
        {name: 'Repair', link: 'https://i1-kmv.github.io/repair-gh/', style: {backgroundImage: `url(${repairImg})`}},
        {name: 'Skinali', link: 'https://i1-kmv.github.io/skinali-/',   style: {backgroundImage: `url(${skinaliImg})`}},
        {name: 'React blog page', link: 'https://i1-kmv.github.io/React-Blog/',   style: {backgroundImage: `url(${blogImg})`}},
        {name: 'Work with GOT Api', link: 'https://i1-kmv.github.io/React-GotApp/',   style: {backgroundImage: `url(${gotImg})`}},
        {name: 'ART', link: 'https://i1-kmv.github.io/Art/',   style: {backgroundImage: `url(${artImg})`}},
        {name: 'Window shop', link: 'https://i1-kmv.github.io/windowMarketIrvas/',   style: {backgroundImage: `url(${windowsImg})`}},
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
