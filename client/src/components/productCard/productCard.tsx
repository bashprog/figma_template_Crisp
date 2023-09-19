import React from "react";

import s from './productCard.module.scss';

import { ProductInterface } from "./productCard.interface";

import Image from "next/image";
import { oswald } from "@/app/fonts";

const ProductCard: React.FC<ProductInterface> = ({images, category, brand, name, price, salePrice, tags}) => {
    return (
        <div className={s.productBox}>
            <div className={s.sliderContainer}>
                <Image src={images[0].src} alt={name} width={345} height={450}/>
                <Image src={images[0].src} alt={name} width={345} height={450}/>
                <Image src={images[0].src} alt={name} width={345} height={450}/>
            </div>
            <div className={s.textInfo}>
                <span className={oswald.className}>{category}</span>
                <p>{name}</p>
            </div>
        </div>
    )
};

export default ProductCard;