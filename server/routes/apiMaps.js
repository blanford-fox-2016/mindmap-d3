'use strict'
const express = require('express');
const router = express.Router();
const data = require('../fixtures/data.json')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).json(data)
});

module.exports = router;
