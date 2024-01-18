'use client';

import React from "react";

// Components
import { TextMatrix } from "@/components/TextMatrix";
// Icons
import {ArrowDownIcon} from "@/components/icons/ArrowDownIcon";
// Modules
import FancyText from "@carefully-coded/react-text-gradient";


export const HomeHeader = () => {
    return (
        <header>
            <FancyText
                gradient={{ from: '#02aabd', to: '#00cdac', type: 'linear' }}>
                <h1 className="text-center text-6xl lg:text-8xl font-bold mb-4">
                    Hello.
                    <br/>
                    I am Luigelo
                </h1>
            </FancyText>
            <TextMatrix primaryText={"Full Stack Developer"} />
            <ArrowDownIcon className="text-4xl animate-bounce mx-auto mt-32" />
        </header>
    )
}