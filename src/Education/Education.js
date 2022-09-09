import React from 'react';
import s from './Education.module.css'
import container from '../StylesCSS/Container.module.css'



const Education = () => {
    return (
        <div className={s.educationBlock}>
            <div className={`${container.container} ${s.educationContainer}`}>
                <h2 className={s.title}>Education</h2>
                <div className={s.education}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;