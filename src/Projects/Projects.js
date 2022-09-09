import React from 'react';
import s from './Projects.module.css'
import container from '../StylesCSS/Container.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${container.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'Shelter'}
                             description={'JS website for shelter'}/>
                    <Project title={'Portfolio'} description={'Photografer portfolio webpage '}/>
                    <Project title={'Jokes'} description={'Random jokes category "B"'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;