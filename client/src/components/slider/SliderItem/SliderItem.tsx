import React from "react";
import { SliderItemInterface } from "./SliderItem.interface";

const SliderItem: React.FC<SliderItemInterface> = ({el}) => {
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${el.background.src})`,
        width: '1850px',
        height: '800px',
        transition: '.3s'
    }

    return(
        <>
            <div style={containerStyle}>
                
            </div>
        </>
    )
};

export default SliderItem;