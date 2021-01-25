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
import pulseImg from '../../image/10.png';
import taxiImg from '../../image/11.png';
import starWarsImg from '../../image/12.png';
import TodoList from '../../image/13.png'
import Pokemon from '../../image/15.png'



const Projects = (props) => {

    let projects = [
        {
            name: 'TypeScript -Pokemon cards',
            link: 'https://i1-kmv.github.io/KODE-test2-pokemonApp/',
            style: {backgroundImage: `url(${Pokemon})`}
        },
        {
            name: 'TypeScript - ToDoList',
            link: ' https://i1-kmv.github.io/TODOLIST-TS/',
            style: {backgroundImage: `url(${TodoList})`}
        },
        {
            name: 'React - Counter',
            link: 'https://i1-kmv.github.io/hardCounter/',
            style: {backgroundImage: `url(${counterImg})`},
        },
        {
            name: 'Expense calculator',
            link: 'https://i1-kmv.github.io/Present-calc/',
            style: {backgroundImage: `url(${walletImg})`}
        },
        {
            name: 'Repair',
            link: 'https://i1-kmv.github.io/repair-gh/',
            style: {backgroundImage: `url(${repairImg})`}},
        {
            name: 'Skinali',
            link: 'https://i1-kmv.github.io/skinali-/',
            style: {backgroundImage: `url(${skinaliImg})`}},
        {
            name: 'React blog page',
            link: 'https://i1-kmv.github.io/React-Blog/',
            style: {backgroundImage: `url(${blogImg})`}
        },
        {
            name: 'Work with GOT Api',
            link: 'https://i1-kmv.github.io/React-GotApp/',
            style: {backgroundImage: `url(${gotImg})`}
        },
        {name: 'ART', link: 'https://i1-kmv.github.io/Art/', style: {backgroundImage: `url(${artImg})`}},
        {
            name: 'Window shop',
            link: 'https://i1-kmv.github.io/windowMarketIrvas/',
            style: {backgroundImage: `url(${windowsImg})`}
        },
        {
            name: 'Pulse',
            link: 'https://i1-kmv.github.io/HeartMonitorDIst/',
            style: {backgroundImage: `url(${pulseImg})`}
        },
        {name: 'Taxi', link: 'https://i1-kmv.github.io/uber777/', style: {backgroundImage: `url(${taxiImg})`}},
        {
            name: 'StarWars DataBase',
            link: 'https://i1-kmv.github.io/starDB/',
            style: {backgroundImage: `url(${starWarsImg})`}
        },
    ]


    let projectsItems = projects.map((project, index) => {
            return <ProjectsItem style={project.style} link={project.link} projectName={project.name} key={index}/>
        }
    )

    return (
        <div className={styles.works}>
            <div className={styles.container} id={'projects'}>
                <Title name={props.name} runame={props.runame} language={props.language}/>

                <div className={styles.works__items}>
                    {projectsItems}
                </div>

            </div>

        </div>
    );
}

export default Projects;
