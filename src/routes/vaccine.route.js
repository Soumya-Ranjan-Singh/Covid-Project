import express from 'express';
import * as vaccineController from '../controllers/vaccine.controller';

const router = express.Router();

//route to get all data
router.get('', vaccineController.getAllData);

export default router;
