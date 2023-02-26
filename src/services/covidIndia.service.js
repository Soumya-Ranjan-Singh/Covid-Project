import CovidIndia from '../models/covidIndia.model';

//get all users
export const getAllData = async () => {
    const data = await CovidIndia.find();
    if (data.length != 0) {
        return data;
    } else {
        throw new Error('No data available');
    }
};