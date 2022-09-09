import React from 'react';
import s from './Skills.module.css'
import container from '../StylesCSS/Container.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${container.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'React'}
                           description={'scacas sm msm kdsm kmm dskm ksdmkmsdkmk msdkmkmkmkmkm dsmk msdkm ksdm '}/>
                    <Skill title={'JavaSctips'} description={'scacas sm msm kdsm kmm dskm ksdmkmsdkmk '}/>
                    <Skill title={'TypeSctips'} description={'scacas sm msm kdsm kmm dkmkmkm dsmk msdkm ksdm '}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;