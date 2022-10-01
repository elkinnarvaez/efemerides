const { Router } = require('express');
const router = Router();

const { fetchAll } = require('../controllers/orbitalElements');

router.get('/fetch-all', fetchAll);

module.exports = router;
