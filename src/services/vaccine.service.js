import Vaccine from '../models/vaccine.model';

//get all users
export const getAllData = async () => {
  const data = await Vaccine.find();
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};