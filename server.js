<!-- node.js configuration -->

<!-- get an express server instance -->
var express = require('express');
var router = express.Router();

<!-- routing -->
var https = require('https');
router.get('/find/:bibkey', function(req,res) {
	// res.send({"ISBN:0385472579": {"subtitle": "shouts of nothingness", "title": "Zen speaks", "url": "https://openlibrary.org/books/OL1397864M/Zen_speaks", "number_of_pages": 159},
	//  "LCCN:62019420":{"title": "The adventures of Tom Sawyer", "url": "https://openlibrary.org/books/OL5857365M/The_adventures_of_Tom_Sawyer", "number_of_pages":297}})
	console.log('https://openlibrary.org/api/books?format=json&jscmd=data&bibkeys=' + req.params.bibkey);
	var options = {
		'host': 'openlibrary.org',
		'path': '/api/books?format=json&jscmd=data&bibkeys=' + req.params.bibkey,
		'port': 443
	}
	https.get(options, function(re) {
		var response = '';
		re.on('data', function(data) {
			response += data;
		}).on('error', function(err) {
			console.log('Error in server.js: '); console.log(err);
			res.status(500).send('Error: ' + err.code);  // next(err);
		}).on('end', function() {
			res.send(response);
		})
	}).on('error', function(err) {
		console.log('Error in server.js: '); console.log(err);
		res.status(500).send('Error: ' + err.code); // next(err);
	}).end();
});
router.use('/js', express.static(__dirname + '/js'));
router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var app = express();
app.use('/', router);
app.listen(3000);
console.log('App listening port 3000');
