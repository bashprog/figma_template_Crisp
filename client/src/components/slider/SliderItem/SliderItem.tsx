import React from "react";
import { SliderItemInterface } from "./SliderItem.interface";
import s from './SliderItem.module.scss';
import { oswald } from "@/app/fonts";
import Button from "@/components/button/Button";
import Image from "next/image";

const SliderItem: React.FC<SliderItemInterface> = ({el}) => {
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${el.background.src})`,
        width: '1850px',
        height: '800px',
        transition: '.3s',
        position: 'relative'
    }

    const textFirstPart = () => {
        return el.title.substring(0, el.title.indexOf(el.altColorTitle));
    }

    const textSecondPart = () => {
        return el.title.substring(el.title.indexOf(el.altColorTitle) + el.altColorTitle.length)
    }

    return(
        <>
            <div style={containerStyle}>
                <div className={`${s.textBox} ${oswald.className}`}>
                    {textFirstPart()}
                    <span>{el.altColorTitle}</span>
                    {textSecondPart()}
                </div>
                <div className={s.btnContainer}>
                    <Button style="black" transparent title={el.btnTitle} small/>
                </div>
                <div className={s.imgBox}>
                    {el.images.map((e, k) => (
                        <Image src={e.img} alt={e.alt} key={k}/>
                    ))}
                    
                </div>
            </div> 
        </>
    )
};

export default SliderItem;