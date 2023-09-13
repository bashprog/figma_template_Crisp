'use client'
import React from 'react';
import { InputInterface } from './Input.interface';

import s from './Input.module.scss';
import { roboto } from '@/app/fonts';

const Input: React.FC<InputInterface> = ({value, handler, placeholder}) => {
    const styles = {

    };

    return(
        <div className={`${roboto.className} ${s.inputBox}`}>
            <input className={s.input} value={value} onChange={(e) => handler(e)}/>
            <span className={value ? s.hidden : ''}>{placeholder}</span>   
        </div>
    )
};

export default Input;