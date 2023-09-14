'use client'
import React from "react"

import s from './Slider.module.scss';

import { SliderInterface } from "./Slider.interface";

import SliderItem from "./SliderItem/SliderItem";

const Slider: React.FC<SliderInterface> = ({data}) => {
    return(
        <>
            <div className="container">
                <div className={s.sliderBox}>
                    <div className={s.sliderContent}>
                        {data.map((el, key) => (
                            <SliderItem el={el} key={key}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Slider;