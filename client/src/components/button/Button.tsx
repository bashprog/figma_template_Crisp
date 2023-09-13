'use client'
import React from "react"

import s from './Button.module.scss';
import { ButtonInterface } from "./Button.interface";
import { oswald } from "@/app/fonts";

const Button: React.FC<ButtonInterface> = ({title, style, disabled, transparent, small}) => {
    const classNames = `${s.button} ${oswald.className} 
                        ${style === 'black' ? s.black : s.white} 
                        ${disabled ? s.disabled : ''}
                        ${transparent ? s.transparent : ''}`;

    return(
        <div className={classNames} style={small ? {width: 175, height: 56} : {}}>
            {title}
        </div>
    )
};

export default Button;