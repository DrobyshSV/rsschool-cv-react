import React from 'react';
import s from './Main.module.css'
import  container from '../StylesCSS/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={container.container}>
                <div className={s.title}>
                    <span>Hello</span>
                    <h1>I am Siarhei Drobysh</h1>
                    <p>Junior Front-end developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};

export default Main;