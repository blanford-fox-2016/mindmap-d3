var data = require('../fixtures/data.json')

module.exports = {
    showIndex: showIndex,
    showMindmap: showMindmap,
    getMindmapData: getMindmapData
}

function showIndex(req, res) {
    res.render('pages/index')
}

function showMindmap(req, res) {
    res.render('pages/mindmap')
}

function getMindmapData(req, res) {
    res.json(data)
}
