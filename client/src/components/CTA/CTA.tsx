import React from "react";

import s from './CTA.module.scss'

import { CTAInterface } from "./CTA.interface";
import { oswald } from "@/app/fonts";
import Button from "../button/Button";
import Image from "next/image";

const CTA: React.FC<CTAInterface> = ({header, text, href, background, textPosition, fullWidth}) => {
    let marginLeft, marginRight;
    switch (textPosition) {
        case "left":
            marginLeft = 250, marginRight = 0;
            break;
        case "right":
            marginLeft = 'auto', marginRight = 250;
            break;
        case "maxLeft":
            marginLeft = 100, marginRight = 0;
            break;
        case "maxRight":
            marginLeft = 'auto', marginRight = 100;
    }

    const textStyles: React.CSSProperties = {
        marginLeft: marginLeft,
        marginRight: marginRight
    };

    return(
        <div className={fullWidth ? 'containerFluid m20' : 'container m20'}>
            <div className={s.contentBox} style={{background: background}}>
                <div className={s.textBlock} style={textStyles}>
                        <h4 className={oswald.className}>{header}</h4>
                        <p>{text}</p>
                        <Button title="shop now" style="black" small transparent/>
                </div>
            </div>
        </div>
    )
};

export default CTA;