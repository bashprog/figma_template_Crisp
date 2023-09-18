import React from "react";

import Slider from "@/components/slider/Slider";

import CTAImg from '@/assets/img/ctaBlockMain.png';

import { mockSlider } from "@/assets/mockedData";
import CTA from "@/components/CTA/CTA";

const HomePage: React.FC = () => {
    return(
        <main>
            <Slider data={mockSlider}/>
            <CTA    header="shopping without limits." 
                    text="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!" 
                    href="/shop" background={`url(${CTAImg.src}) no-repeat`} textPosition="left"
                    />

        </main>
    )
}

export default HomePage;