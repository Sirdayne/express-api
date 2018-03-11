let express = require('express');
let app = express();
let mongoose = require('mongoose')
let bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let articles = [
  {
    title: 'title',
    body: 'text',
    likes: 51
  },
  {
    title: 'second',
    body: 'areas',
    likes: 12
  },
]

app.get('/', function (req, res) {
	res.send('Hello World! Hi!');
});

app.get('/articles', function(req, res){
  res.send(articles)
})

app.post('/articles', function(req, res){
  articles.push({
    title: req.body.title,
    body: req.body.body,
    likes: req.body.likes
  })
  res.send('OK')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});