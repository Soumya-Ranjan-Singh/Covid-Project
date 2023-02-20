import VaccineTesting from '../models/vaccineTesting.model';

//get all users
export const getAllData = async () => {
    const data = await VaccineTesting.find();
    if (data.length != 0) {
        return data;
    } else {
        throw new Error('No data available');
    }
};