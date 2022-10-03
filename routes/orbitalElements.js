const { Router } = require('express');
const router = Router();

const {
  fetchAll,
  updateRecord,
  createRecord,
} = require('../controllers/orbitalElements');

router.get('/fetch-all', fetchAll);

router.post('/update-record', updateRecord);

router.post('/create-record', createRecord);

module.exports = router;
