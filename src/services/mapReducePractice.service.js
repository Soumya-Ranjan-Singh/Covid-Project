import MapReducePractice from '../models/mapReducePractice.model';

//get all data
export const getAllData = async () => {
    const data = await MapReducePractice.find();
    if (data != null) {
        return data;
    } else {
        throw new Error('No data available');
    }
};