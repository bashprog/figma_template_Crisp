import React from "react";

import Slider from "@/components/slider/Slider";

import { mockSlider } from "@/assets/mockedData";

const HomePage: React.FC = () => {
    return(
        <main>
            <Slider data={mockSlider}/>
        </main>
    )
}

export default HomePage;