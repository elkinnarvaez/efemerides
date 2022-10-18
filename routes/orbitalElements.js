const { Router } = require('express');
const router = Router();

const {
  fetchAll,
  fetchByPlanet,
  updateRecord,
  createRecord,
} = require('../controllers/orbitalElements');

router.get('/fetch-all', fetchAll);

router.get('/fetch-by-planet/:planetName', fetchByPlanet);

router.post('/update-record', updateRecord);

router.post('/create-record', createRecord);

module.exports = router;
