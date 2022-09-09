import React from 'react';
import s from './Contacts.module.css'
import container from '../StylesCSS/Container.module.css'
import Form from "./Form/Form";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${container.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <Form/>
                <button>Отправиль</button>
            </div>
        </div>
    );
};

export default Contacts;