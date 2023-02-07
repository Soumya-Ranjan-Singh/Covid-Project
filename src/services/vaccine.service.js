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

  // --- Total Doses Administered of individual Vaccine in particular Date range for a specific States---
  // const data = await Vaccine.aggregate([
  //   { $match: { $and: [{ State: "Assam" }, { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } }] } },
  //   { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  // ]);

  // --- Sorting Total Doses Administered of individual Vaccine in particular Date range for all States---
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