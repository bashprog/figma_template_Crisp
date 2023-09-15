'use client'
import React, { useState } from "react"

import s from './Slider.module.scss';

import { SliderInterface } from "./Slider.interface";

import SliderItem from "./SliderItem/SliderItem";

const Slider: React.FC<SliderInterface> = ({data}) => {
    const [activeSlide, changeActiveSlide] = useState(0);

    const totalSlides = data.length - 1;

    const nextSlide = () => {
        activeSlide === totalSlides ? 
        changeActiveSlide(0) : changeActiveSlide(activeSlide + 1);
    }

    const prevSlide = () => {
        activeSlide === 0 ? 
        changeActiveSlide(totalSlides) : changeActiveSlide(activeSlide - 1);
    }

    const setActive = (n: number) => {
        changeActiveSlide(n);
    }

    return(
        <>
            <div className="container">
                <div className={s.sliderBox}>
                    <div className={s.sliderContent} style={{transform: `translateX(-${1850*activeSlide}px)`}}>
                        {data.map((el, key) => (
                            <SliderItem el={el} key={key}/>
                        ))}
                    </div>
                    <div className={s.buttonsGroup}>
                        <div onClick={prevSlide}>
                           <span> &#8249;</span>
                        </div>
                        <div onClick={nextSlide}>
                            <span>&#8250; </span>
                        </div>
                    </div>
                    <div className={s.dots}>
                        {new Array(totalSlides + 1).fill(undefined).map((e, k) => (
                            <span key={k} className={k === activeSlide ? s.active : ''} onClick={() => setActive(k)}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Slider;