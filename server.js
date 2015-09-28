// server.js

// BASE SETUP
// =============================================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//ROUTES FOR OUR API

var router = express.Router();
router.get('/', function(req, res) {
	res.json({ message: 'congrats! welcome to NCAA players!'});
});

//REGISTER OUR ROUTES HERE
// ALL OF OUR ROUTES WILL HAVE A PREFIX WITH /API
app.use('/api', router);

//START THE server
//===============================================================
app.listen(port);
console.log('Magic happens on port ' + port);