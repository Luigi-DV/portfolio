// Icons
import {LinkedInIcon} from "@/components/icons/LinkedInIcon";

// Services
import {getProfileData} from "@/services/profileService";

const ContactPage = async() => {
    const profileData = await getProfileData();
    return (
        <div className="min-h-screen lg:flex lg:flex-col lg:justify-center">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
                <div className="divide-y-2 divide-gray-200">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-extrabold sm:text-3xl">Contact</h2>
                        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                            <div>
                                <h3 className="text-lg leading-6 font-medium">Get in touch</h3>
                                <dl className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>{profileData?.email}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium">Join my team</h3>
                                <dl className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>contact@ldvloper.com</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-extrabold sm:text-3xl">Social</h2>
                        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                            <div>
                                <h3 className="flex gap-x-2 text-lg leading-6 font-medium">
                                    <LinkedInIcon className="h-5 w-5" />
                                    LinkedIn
                                </h3>
                                <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    <a className="w-fit hover:font-bold flex gap-x-2" href={profileData?.linkedinUrl}>
                                        {profileData?.name}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium">Github</h3>
                                <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    <a className="w-fit hover:font-bold flex gap-x-2" href={profileData?.githubUrl}>
                                        <p>{profileData?.githubUsername}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage