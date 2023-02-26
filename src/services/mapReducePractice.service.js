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

//get map data
export const getMapData = async () => {
    const data = await MapReducePractice.aggregate([
        {
            $project: {
                city: "$city",
                integerValues: {
                    $map: {
                        input: "$distances",
                        as: "decimalValue",
                        in: { $trunc: "$$decimalValue" }
                    }
                }
            }
        }
    ]);

    if (data.length != 0) {
        return data;
    } else {
        throw new Error('No data available');
    }
};

//get reduce data
export const getReduceData = async () => {
    const data = await MapReducePractice.aggregate([
        {
            $project: {
                city: "$city",
                distances: {
                    $reduce: {
                        input: "$distances",
                        initialValue: { sum: 0, product: 1 },
                        in: {
                            sum: { $add: ["$$value.sum", "$$this"] },
                        }
                    }
                }
            }
        }
    ]);

    if (data.length != 0) {
        return data;
    } else {
        throw new Error('No data available');
    }
};