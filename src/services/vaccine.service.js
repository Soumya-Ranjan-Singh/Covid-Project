import Vaccine from '../models/vaccine.model';

//get all users
export const getAllData = async () => {
  // const data = await Vaccine.find();

  // ---Total Doses Administered in specific State---
  // const data = await Vaccine.aggregate([
  //   { $match: { State: "Assam" } },
  //   { $group: { _id: "$State", TotalDosage: { $sum: "$Total Doses Administered" } } }
  // ]);

  // ---Total Doses Administered of individual Vaccine in particular State---
  // const data = await Vaccine.aggregate([
  //   { $match: { State: "Assam" } },
  //   { $group: { _id: "$State", Covaxin: { $sum: "$Covaxin (Doses Administered)" }, CoviShield: { $sum: "$CoviShield (Doses Administered)" }, SputnikV: { $sum: "$Sputnik V (Doses Administered)" } } },
  // ]);

  // ---Total Doses Administered in specific State Genderwise---
  // const data = await Vaccine.aggregate([
  //   { $match: { State: "Assam" } },
  //   { $group: { _id: "$State", Male: { $sum: "$Male (Doses Administered)" }, Female: { $sum: "$Female (Doses Administered)" }, Transgender: { $sum: "$Transgender (Doses Administered)" } } }
  // ]);

  // ---Total Doses Administered per Month---
  // const data = await Vaccine.aggregate([
  //   { $group: { _id: { Month: { $month: "$Updated On" } }, Total: { $sum: "$Total Doses Administered" } } },
  //   { $sort: { "_id.Month": 1 } }
  // ]);

  // ---Total Doses Administered of individual Vaccine in particular Date range for a specific States---
  // const data = await Vaccine.aggregate([
  //   { $match: { $and: [{ State: "Assam" }, { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } }] } },
  //   { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  // ]);

  // ---Sorting Total Doses Administered of individual Vaccine in particular Date range for all States---
  // const data = await Vaccine.aggregate([
  //   { $match: { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } } },
  //   { $group: { _id: "$State", TotalDosage: { $sum: "$Total Doses Administered" } } },
  //   { $sort: { TotalDosage: 1 } }
  // ]);

  // ---Get State, Sites, First & Second Doses Administered from the database in sorted manner of State---
  // const data = await Vaccine.aggregate([
  //   { $sort: { State: 1 } },
  //   { $project: { State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } }
  // ]);

  // ---Pipeline Optimization--- (The two $skip stages can coalesce into a single $skip where the skip numbers is the sum of the two initial skip numbers.)
  // const data = await Vaccine.aggregate([
  //   { $sort: { State: 1 } },
  //   { $skip: 5000 },
  //   { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
  //   { $skip: 2840 }
  // ]);

  // (The two $limit stages can coalesce into a single $limit where the limit number is the smaller of the two initial limit numbers.)
  // const data = await Vaccine.aggregate([
  //   { $sort: { State: 1 } },
  //   { $limit: 50 },
  //   { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
  //   { $limit: 5 }
  // ]);

  // (The two $match stages can coalesce into a single $match combining the conditions with an $and.)
  // const data = await Vaccine.aggregate([
  //   { $match: { State: "Assam" } },
  //   { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
  //   { $match: { "Updated On": new Date("2021-02-01") } }
  // ]);

  // ---Get documents within a given range(i.e. 5 - 10)---
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