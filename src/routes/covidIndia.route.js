import express from 'express';
import * as covidIndiaController from '../controllers/covidIndia.controller';

const router = express.Router();

//route to get all data
router.get('', covidIndiaController.getAllData);

export default router;
