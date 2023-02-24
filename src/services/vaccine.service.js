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

//get Total Doses Administered per Month
export const getDataPerMonth = async () => {
  const data = await Vaccine.aggregate([
    { $group: { _id: { Month: { $month: "$Updated On" } }, Total: { $sum: "$Total Doses Administered" } } },
    { $sort: { "_id.Month": 1 } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get sorted data of Total Doses Administered of individual Vaccine in particular Date range for all States
export const getDataInDateRange = async () => {
  const data = await Vaccine.aggregate([
    { $match: { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } } },
    { $group: { _id: "$State", TotalDosage: { $sum: "$Total Doses Administered" } } },
    { $sort: { TotalDosage: 1 } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get Total Doses Administered of individual Vaccine in particular Date range for a specific State
export const getDataStatewiseInDateRange = async () => {
  const data = await Vaccine.aggregate([
    { $match: { $and: [{ State: "Assam" }, { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } }] } },
    { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get Total Doses Administered in specific State
export const getDataSpecificState = async () => {
  const data = await Vaccine.aggregate([
    { $match: { State: "Assam" } },
    { $group: { _id: "$State", TotalDosage: { $sum: "$Total Doses Administered" } } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get Total Doses Administered of individual Vaccine in particular State
export const getDataIndividualVaccine = async () => {
  const data = await Vaccine.aggregate([
    { $match: { State: "Assam" } },
    { $group: { _id: "$State", Covaxin: { $sum: "$Covaxin (Doses Administered)" }, CoviShield: { $sum: "$CoviShield (Doses Administered)" }, SputnikV: { $sum: "$Sputnik V (Doses Administered)" } } },
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get Total Doses Administered in specific State Genderwise
export const getDataGenderwiseVaccine = async () => {
  const data = await Vaccine.aggregate([
    { $match: { State: "Assam" } },
    { $group: { _id: "$State", Male: { $sum: "$Male (Doses Administered)" }, Female: { $sum: "$Female (Doses Administered)" }, Transgender: { $sum: "$Transgender (Doses Administered)" } } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get State, Sites, First & Second Doses Administered from the database in sorted manner of State
export const getSpecificSortedData = async () => {
  const data = await Vaccine.aggregate([
    { $sort: { State: 1 } },
    { $project: { State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data after using two skips
export const getSkipData = async () => {
  const data = await Vaccine.aggregate([
    { $sort: { State: 1 } },
    { $skip: 5000 },
    { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
    { $skip: 2840 }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data after using two skips
export const getLimitData = async () => {
  const data = await Vaccine.aggregate([
    { $sort: { State: 1 } },
    { $limit: 50 },
    { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
    { $limit: 5 }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data after using two match
export const getMatchData = async () => {
  const data = await Vaccine.aggregate([
    { $match: { State: "Assam" } },
    { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
    { $match: { "Updated On": new Date("2021-02-01") } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get documents within a given index range(i.e. 5 - 10)
export const getDataWithinIndexRange = async () => {
  const data = await Vaccine.aggregate([
    { $project: { "Updated On": 1, State: 1, "Total Doses Administered": 1 } },
    { $limit: 10 },
    { $skip: 5 },
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data after adding a new custom field
export const getDataAddField = async () => {
  const data = await Vaccine.aggregate([
    { $addFields: { "Male+Female": { $add: ["$Male (Doses Administered)", "$Female (Doses Administered)"] } } },
    { $project: { State: 1, Sites: 1, "Male+Female": 1, "Total Doses Administered": 1 } },
    { $match: { State: "Assam", Sites: { $gt: 20, $lt: 100 } } },
    { $sort: { Sites: 1 } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data after adding a new custom field
export const getDataLookup = async () => {
  const data = await Vaccine.aggregate([
    {
      $lookup:
      {
        from: "StatewiseTestingDetails",
        localField: "State",
        foreignField: "State",
        as: "state_docs"
      }
    },
    { $match: { State: "Assam" } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data after adding a new custom field
export const getUnwindData = async () => {
  const data = await Vaccine.aggregate([
    {
      $lookup:
      {
        from: "StatewiseTestingDetails",
        localField: "State",
        foreignField: "State",
        as: "state_docs"
      }
    },
    { $match: { State: "Goa" } },
    { $unwind: { path: "$state_docs", preserveNullAndEmptyArrays: false } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data after adding a new custom field
export const getRedactData = async () => {
  const data = await Vaccine.aggregate([
    {
      $lookup:
      {
        from: "StatewiseTestingDetails",
        localField: "State",
        foreignField: "State",
        as: "state_docs"
      }
    },
    { $match: { State: "Assam" } },
    {
      $redact: {
        $cond: {
          if: { $eq: ["$Updated On", new Date("2021-02-01")] },
          then: "$$PRUNE",
          else: "$$KEEP"
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

//get data union of two collections 
export const getUnionData = async () => {
  const data = await Vaccine.aggregate([
    { $project: { State: 1, "Updated On": 1 } },
    { $unionWith: { coll: "StatewiseTestingDetails", pipeline: [{ $project: { Date: 1, TotalSamples: 1 } }] } },
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data union of two collections 
export const getUnsetData = async () => {
  const data = await Vaccine.aggregate([
    { $unset: ["AEFI", "Updated On"] }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get sortByCount data
export const getSortData = async () => {
  const data = await Vaccine.aggregate([
    { $sortByCount: "$State" }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get data and send that to a new collection
export const getDataAndAddIntoNewCollection = async () => {
  const data = await Vaccine.aggregate([
    { $group: { _id: "$State", totalDoses: { $sum: "$Total Doses Administered" } } },
    { $sort: { _id: 1 } },
    { $out: { db: "COVID", coll: "TotalDosesInStates" } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};