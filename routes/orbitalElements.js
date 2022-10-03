const { Router } = require('express');
const router = Router();

const { fetchAll, updateRecord } = require('../controllers/orbitalElements');

router.get('/fetch-all', fetchAll);

router.post('/update-record', updateRecord);

module.exports = router;
