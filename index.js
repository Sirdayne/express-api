let express = require('express');
let app = express();
let mongoose = require('mongoose')

app.get('/', function (req, res) {
	res.send('Hello World! Hi!');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});