import HttpStatus from 'http-status-codes';
import * as vaccineService from '../services/vaccine.service';
import logger from '../config/logger';

/**
 * Controller to get all data
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllData = async (req, res, next) => {
  try {
    const data = await vaccineService.getAllData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get Total Doses Administered per Month
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataPerMonth = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataPerMonth();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get sorted data of Total Doses Administered of individual Vaccine in particular Date range for all States
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataInDateRange = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataInDateRange();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get Total Doses Administered of individual Vaccine in particular Date range for a specific State
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataStatewiseInDateRange = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataStatewiseInDateRange();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get Total Doses Administered in specific State
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataSpecificState = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataSpecificState();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get Total Doses Administered of individual Vaccine in particular State
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataIndividualVaccine = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataIndividualVaccine();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get Total Doses Administered in specific State Genderwise
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataGenderwiseVaccine = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataGenderwiseVaccine();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get State, Sites, First & Second Doses Administered from the database in sorted manner of State
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getSpecificSortedData = async (req, res, next) => {
  try {
    const data = await vaccineService.getSpecificSortedData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get data after using two skips
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getSkipData = async (req, res, next) => {
  try {
    const data = await vaccineService.getSkipData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get data after using two limits
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getLimitData = async (req, res, next) => {
  try {
    const data = await vaccineService.getLimitData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get data after using two match
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getMatchData = async (req, res, next) => {
  try {
    const data = await vaccineService.getMatchData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get documents within a given index range(i.e. 5 - 10)
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataWithinIndexRange = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataWithinIndexRange();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get data after adding a new custom field
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataAddField = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataAddField();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get data from different collections
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataLookup = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataLookup();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get data route to get unwind data 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUnwindData = async (req, res, next) => {
  try {
    const data = await vaccineService.getUnwindData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get redact data(if condition is matched) 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getRedactData = async (req, res, next) => {
  try {
    const data = await vaccineService.getRedactData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get union of two collections 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUnionData = async (req, res, next) => {
  try {
    const data = await vaccineService.getUnionData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get unset data (Removes/excludes fields from documents)
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUnsetData = async (req, res, next) => {
  try {
    const data = await vaccineService.getUnsetData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get sortByCount data
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getSortData = async (req, res, next) => {
  try {
    const data = await vaccineService.getSortData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};

/**
 * Controller to get data and send that to a new collection
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDataAndAddIntoNewCollection = async (req, res, next) => {
  try {
    const data = await vaccineService.getDataAndAddIntoNewCollection();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info('All data fetched successfully');
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    logger.error(error);
  }
};