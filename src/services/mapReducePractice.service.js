import MapReducePractice from '../models/mapReducePractice.model';
import Vaccine from '../models/vaccine.model';

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

//get mapReduce data
export const getmapReduceData = async () => {
    const data = await Vaccine.mapReduce(
        function () {
            emit(this.States, this.Sessions);
        },
        function (key, totalSessions) {
            return Array.sum(totalSessions);
        },
        { out: "NewMapReduceCollection" }
    );

    if (data != null) {
        return data;
    } else {
        throw new Error('No data available');
    }
};

//get filter, map & reduce data
export const getFilterMapReduceData = async () => {
    const data = await Vaccine.aggregate(
        [
            {
                $group: {
                    _id: "$State",
                    "Array": { $push: "$Sites" }
                }
            },
            {
                $project: {
                    "lessThan50Sites": {
                        $filter: {
                            input: "$Array",
                            as: "value",
                            cond: { $lt: ["$$value", 50] }
                        }
                    },
                    "multiplySites": {
                        $map: {
                            input: "$Array",
                            as: "value",
                            in: { $multiply: ["$$value", 2] }
                        }
                    },
                    "totalSites": {
                        $reduce: {
                            input: "$Array",
                            initialValue: 0,
                            in: { $add: ["$$value", "$$this"] }
                        }
                    }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]
    );

    if (data != null) {
        return data;
    } else {
        throw new Error('No data available');
    }
};