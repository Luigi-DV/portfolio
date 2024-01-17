import experienceData from '@/data/experience.json';

export const getExperienceData = async () => {
    try {
        return experienceData;
    } catch (error) {
        console.error('There was a problem fetching the experience data:', error);
    }
};