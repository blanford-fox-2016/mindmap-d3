var express = require('express');
var router = express.Router();

const mapController = require('../controllers/controllers.api.maps')

router.get('/', mapController.getAllMap)

module.exports = router;
