import express from 'express';
import * as mapReduceController from '../controllers/mapReducePractice.controller';

const router = express.Router();

//route to get all data
router.get('', mapReduceController.getAllData);

export default router;