import express from 'express';
import * as mapReduceController from '../controllers/mapReducePractice.controller';

const router = express.Router();

//route to get all data
router.get('', mapReduceController.getAllData);

//route to get map data
router.get('/map', mapReduceController.getMapData);

//route to get reduce data
router.get('/reduce', mapReduceController.getReduceData);

//route to get mapReduce data
router.get('/mapReduce', mapReduceController.getmapReduceData);

//route to get filter, map & reduce data
router.get('/filterMapReduce', mapReduceController.getFilterMapReduceData);

export default router;