import profileData from '@/data/profile.json';

export const getProfileData = async () => {
    try {
        return profileData;
    } catch (error) {
        console.error('There was a problem fetching the profile data:', error);
    }
};