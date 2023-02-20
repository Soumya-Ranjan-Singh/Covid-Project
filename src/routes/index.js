import express from 'express';
const router = express.Router();

import vaccineRoute from './vaccine.route';
import vaccineTestingRoute from './vaccineTesting.route';
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

  return router;
};

export default routes;
