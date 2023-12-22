const express = require('express');
const router = express.Router();
const detectionController = require('../controllers/detectionController');

router.post('/detect-tb', detectionController.detectTB);
router.get('/results', detectionController.getResults);

module.exports = router;
