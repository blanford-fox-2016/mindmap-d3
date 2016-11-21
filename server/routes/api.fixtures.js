const express = require('express');
const router = express.Router();
const controller = require('api.fixtures')

router.get('/', controller.getData);

module.exports = router;
