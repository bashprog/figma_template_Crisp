import React from "react";

import s from './TilesGroup.module.scss';

import tile_1 from '@/assets/img/tiles/tile_1.png';
import tile_2 from '@/assets/img/tiles/tile_2.png';
import tile_3 from '@/assets/img/tiles/tile_3.png';
import { oswald } from "@/app/fonts";
import Button from "../button/Button";

const TilesGroup: React.FC = () => {
    return (
        <div className="container">
            <div className={s.contentBox}>
                <div className={s.leftSide}>
                    <div style={{background: `url(${tile_1.src})`, backgroundSize: 'cover'}}>
                        <div className={s.tileText1}>
                            <h5 className={oswald.className}>Chose <br /> your look</h5>
                            <p>See our clothing collections</p>
                            <Button title="see offers" style="black" transparent small/>
                        </div>
                    </div>
                    <div style={{background: `url(${tile_2.src})`, backgroundSize: 'cover'}}>
                        <div className={s.tileText2}>
                            <h5 className={oswald.className}>Brand new style</h5>
                            <p>Popular clothing brand</p>
                            <Button title="see offers" style="black" transparent small/>
                        </div>
                    </div>
                </div>
                <div className={s.rightSide}>
                    <div style={{background: `url(${tile_3.src})`, backgroundSize: 'cover'}}>
                        <div className={s.tileText3}>
                            <h5 className={oswald.className}>Up to <br /> 40% off</h5>
                            <p>Special offers and great deals</p>
                            <Button title="shop now" style="black" transparent small/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TilesGroup;