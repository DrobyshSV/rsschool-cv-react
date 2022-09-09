import React from 'react';
import s from './Form.module.css'

const Form = (props) => {
    return (
        <>
            <form className={s.form}>
                <input className={s.input} type="text"/>
                <input className={s.input} type="tel"/>
                <textarea className={s.input} cols="30" rows="10"></textarea>
            </form>
        </>
    );
};

export default Form;