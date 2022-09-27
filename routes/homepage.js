const { Router } = require('express');
const router = Router();

const { getPlanets } = require('../controllers/homepage');

router.get('/getplanets/:name', getPlanets);

module.exports = router;
