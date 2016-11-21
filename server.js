var express        = require('express'),
	app            = express(),
	port           = process.env.PORT || 80,
	bodyParser     = require('body-parser'),
	expressLayouts = require('express-ejs-layouts'),
	cors           = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static(__dirname + '/public'))

require('./app/routes.js')(app)

app.listen(port)
console.log('ya udah jalan di port ' + port)