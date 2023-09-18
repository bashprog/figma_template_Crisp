import React from "react";

import s from './choseBrand.module.scss';

import { oswald } from "@/app/fonts";

import { mockBrands } from "@/assets/mockedData";
import Image from "next/image";

const ChoseBrand: React.FC = () => {
    return(
        <div className="container">
            <div className={s.box}>
                <h5 className={`${oswald.className} ${s.header}`}>Choose your brand</h5>
                {mockBrands.map((el, key) => (
                    <div className={s.imageContainer}>
                        {/* Надо добавить хэндлер для выбора активного бренд аи в стейт его, либо просто переход на страницу магазина с активной категорией бренда */}
                        <Image key={key} width={155} src={el.image} alt={`${el.name} logotype`}/>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ChoseBrand