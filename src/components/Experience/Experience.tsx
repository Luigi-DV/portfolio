import React from "react";

// Components
import {CircleIcon} from "@/components/icons/CircleIcon";

//Types
import { ExperienceProps} from "@/types/ExperienceProps";
import {parseDescription} from "@/utilities/parseText";

export const Experience = (props: ExperienceProps) => {

    const {
        startDate,
        endDate,
        company,
        title,
        description
    } = props;

    return(
        <div className="min-h-screen flex flex-col items-center justify-center mt-20 overflow-hidden">
            <div className="relative">
                <CircleIcon className="animate-pulse text-gray-600 text-xl lg:text-9xl mb-2"/>
                <div className="flex items-center">
                    <span className="text-6xl lg:text-9xl font-bold mr-4">{startDate.toLocaleString('default', { month: 'short' })}</span>
                    <span className="text-2xl lg:text-4xl font-bold">
                        {startDate.getFullYear()}
                      <br />
                        {company} | {title}
                    </span>
                </div>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
                {parseDescription(description)}
            </div>
    </div>
    )
}