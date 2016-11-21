const mainController = require('./main.controller')

module.exports = function(app, passport) {

    // ===========================
    // USER REGISTRATION AND HOME
    // ===========================
    app.get('/', mainController.showIndex)
    app.get('/mindmap', mainController.showMindmap)
    app.get('/api/maps', mainController.getMindmapData)

}
