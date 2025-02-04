import workData from '@/data/work.json';

export const getWorkData = async () => {
    try {
        return workData;
    } catch (error) {
        console.error('There was a problem fetching the work data:', error);
    }
};