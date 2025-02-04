import React from "react";


// Services
import {getWorkData} from "@/services/workService";

import {getProfileData} from "@/services/profileService";
import BlurFade from "@/components/ui/blur-fade";
import {ResumeCard} from "@/components/ResumeCard";
import {BLUR_FADE_DELAY} from "@/constants/ui";
import BlurFadeText from "@/components/ui/blur-fade-text";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Markdown from "react-markdown";

const Home = async() => {
    const workData = await getWorkData();
    const profileData = await getProfileData();
     return (
         <main className="flex flex-col min-h-[100dvh] space-y-10">
             <section id="hero">
                 <div className="mx-auto w-full max-w-2xl space-y-8">
                     <div className="gap-2 flex justify-between">
                         <div className="flex-col flex flex-1 space-y-1.5">
                             <BlurFadeText
                                 delay={BLUR_FADE_DELAY}
                                 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                 yOffset={8}
                                 text={`I'm ${profileData?.name.split(" ")[0]}`}
                             />
                             <BlurFadeText
                                 className="max-w-[600px] md:text-xl"
                                 delay={BLUR_FADE_DELAY}
                                 text={profileData?.description ?? "I'm a software engineer."}
                             />
                         </div>
                         <BlurFade delay={BLUR_FADE_DELAY}>
                             <Avatar className="size-28 border">
                                 <AvatarImage alt={profileData?.name} src={profileData?.avatarUrl}/>
                                 <AvatarFallback>{profileData?.initials}</AvatarFallback>
                             </Avatar>
                         </BlurFade>
                     </div>
                 </div>
             </section>
             <section id="about">
                 <BlurFade delay={BLUR_FADE_DELAY * 3}>
                     <h2 className="text-xl font-bold">About</h2>
                 </BlurFade>
                 <BlurFade delay={BLUR_FADE_DELAY * 4}>
                     <Markdown
                         className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                         {profileData?.summary}
                     </Markdown>
                 </BlurFade>
             </section>
             <section id="work">
                 <div className="flex min-h-0 flex-col gap-y-3">
                     <BlurFade delay={BLUR_FADE_DELAY * 5}>
                         <h2 className="text-xl font-bold">Work Experience</h2>
                     </BlurFade>
                     {workData?.work.map((work, id) => (
                         <BlurFade
                             key={work.company}
                             delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                         >
                             <ResumeCard
                                 key={work.company}
                                 logoUrl={work.logoUrl}
                                 altText={work.company}
                                 title={work.company}
                                 subtitle={work.title}
                                 href={work.href}
                                 badges={work.badges}
                                 period={`${work.start} - ${work.end ?? "Present"}`}
                                 description={work.description}
                             />
                         </BlurFade>
                     ))}
                 </div>
             </section>
         </main>
     )
}

export default Home;
