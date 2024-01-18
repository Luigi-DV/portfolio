import React from "react";

// Components
import { ArrowDownIcon} from "@/components/icons/ArrowDownIcon";
import { Experience } from "@/components/Experience";

// Services
import {getExperienceData} from "@/services/experienceService";

// Fancy Text
import FancyText from "@carefully-coded/react-text-gradient";
import {HomeHeader} from "@/components/HomeHeader";
import {Person} from "@/components/Person";
import {getProfileData} from "@/services/profileService";

const Home = async() => {
    const experienceData = await getExperienceData();
    const profileData = await getProfileData();
    return (
        <div>
            <div className="h-screen flex flex-col items-center justify-center">
                <HomeHeader />
            </div>
            <div className="h-screen flex flex-col items-center justify-center">
                {profileData && <Person person={
                    {
                        name: profileData.name,
                        bio: profileData.bio,
                        imageUrl: profileData.image
                    }
                }/>}
            </div>
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
