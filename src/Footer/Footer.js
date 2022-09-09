import React from 'react';
import s from './Footer.module.css'
import Socials from "./Socials/Socials";
import container from '../StylesCSS/Container.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${container.container} ${s.containerFooter}`}>
                <h3 className={s.title}>Siarhei Drobysh</h3>
                <Socials/>
                <h4>©All rights reserved</h4>
            </div>
        </div>
    );
};

export default Footer;