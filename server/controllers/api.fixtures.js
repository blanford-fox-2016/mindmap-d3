'use strict'
const data = require('../fixtures/data.json')

let getData = (req, res) => {
  res.status(200).json(data)
}

module.exports = {
  getData
}
