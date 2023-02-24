import express from 'express';
import * as vaccineController from '../controllers/vaccine.controller';

const router = express.Router();

//route to get all data
router.get('', vaccineController.getAllData);

//route to get Total Doses Administered per Month
router.get('/PerMonth', vaccineController.getDataPerMonth);

//route to get sorted data of Total Doses Administered of individual Vaccine in particular Date range for all States
router.get('/InDateRange', vaccineController.getDataInDateRange);

//route to get Total Doses Administered of individual Vaccine in particular Date range for a specific State
router.get('/StatewiseInDateRange', vaccineController.getDataStatewiseInDateRange);

//route to get Total Doses Administered in specific State
router.get('/SpecificState', vaccineController.getDataSpecificState);

//route to get Total Doses Administered of individual Vaccine in particular State
router.get('/IndividualVaccine', vaccineController.getDataIndividualVaccine);

//route to get Total Doses Administered in specific State Genderwise
router.get('/GenderwiseVaccine', vaccineController.getDataGenderwiseVaccine);

//route to get State, Sites, First & Second Doses Administered from the database in sorted manner of State
router.get('/SpecificSortedData', vaccineController.getSpecificSortedData);

//route to get data after using two skips
router.get('/SkipData', vaccineController.getSkipData);

//route to get data after using two limits
router.get('/LimitData', vaccineController.getLimitData);

//route to get data after using two match
router.get('/MatchData', vaccineController.getMatchData);

//route to get data documents within a given index range(i.e. 5 - 10)
router.get('/WithinIndexRange', vaccineController.getDataWithinIndexRange);

//route to get data after adding a new custom field
router.get('/AddField', vaccineController.getDataAddField);

//route to get data from different collections
router.get('/Lookup', vaccineController.getDataLookup);

//route to get unwind data (Deconstructs an array field from the input documents to output a document for each element.)
router.get('/Unwind', vaccineController.getUnwindData);

//route to get redact data(if condition is matched)
router.get('/Redact', vaccineController.getRedactData);

//route to get union data of two collections
router.get('/UnionWith', vaccineController.getUnionData);

//route to get unset data (Removes/excludes fields from documents)
router.get('/Unset', vaccineController.getUnsetData);

//route to get sortByCount data
router.get('/SortByCount', vaccineController.getSortData);

//route to get data and send that to a new collection
router.get('/Out', vaccineController.getDataAndAddIntoNewCollection);

export default router;
