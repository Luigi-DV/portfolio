import React from "react";

// Components
import { ArrowDownIcon} from "@/components/icons/ArrowDownIcon";
import { Experience } from "@/components/Experience";

// Services
import {getExperienceData} from "@/services/experienceService";

const Home = async() => {
    const experienceData = await getExperienceData();
    return (
        <div>
            <header className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-center text-6xl lg:text-8xl font-bold mb-4">
                    Hello.
                    <br/>
                    I am Luigelo
                </h1>
                <p className="text-xl mt-4">
                Full Stack Developer
                </p>
                <ArrowDownIcon className="text-4xl animate-bounce mx-auto mt-32" />
            </header>
            {
                experienceData && experienceData.map(
                    e => (
                        <Experience
                            key={e.id}
                            startDate={new Date(e.startDate)}
                            endDate={new Date(e.endDate)}
                            company={e.company}
                            title={e.title}
                            description={e.description}/>
                    )
                )
            }
        </div>
    )
}

export default Home;
