import express from 'express';
import * as vaccineTestingController from '../controllers/vaccineTesting.controller';

const router = express.Router();

//route to get all data
router.get('', vaccineTestingController.getAllData);

export default router;
