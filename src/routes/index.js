import express from 'express';
const router = express.Router();

import vaccineRoute from './vaccine.route';
import vaccineTestingRoute from './vaccineTesting.route';
import covidIndiaRoute from './covidIndia.route';
import mapReduceRoute from './mapReducePractice.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/vaccine', vaccineRoute);
  router.use('/vaccineTesting', vaccineTestingRoute);
  router.use('/covidIndia', covidIndiaRoute);
  router.use('/mapReducePractice', mapReduceRoute);

  return router;
};

export default routes;
