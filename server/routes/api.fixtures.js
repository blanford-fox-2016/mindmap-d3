const express = require('express');
const router = express.Router();
const controller = require('../controllers/api.fixtures')

router.get('/', controller.getData);

module.exports = router;
