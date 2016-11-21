const Map = require('../fixtures/data.json')

module.exports = {
    getAllMap: (req, res) => {
        res.json(Map)
    }
}