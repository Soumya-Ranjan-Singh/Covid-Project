import HttpStatus from 'http-status-codes';
import * as vaccineTestingService from '../services/vaccineTesting.service';
import logger from '../config/logger';

/**
 * Controller to get all data
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllData = async (req, res, next) => {
  try {
    const data = await vaccineTestingService.getAllData();
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
