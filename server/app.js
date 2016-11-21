'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const port = 3000

// get the data
let data = fs.readFileSync('../fixtures/data.json', 'utf-8')

// express instance
const app = express()

// adding middleware to express
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// controller
app.get('/api/maps', (req, res) => {
  res.json(JSON.parse(data))
})

app.listen(port, () => {
  console.log('server is running on port ', port)
})
