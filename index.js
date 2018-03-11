let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/nodedb');
let db = mongoose.connection;

db.once('open', function(){
  console.log('connected to mongodb')
})

db.on('error', function(err){
  console.log(err)
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//models
let Article = require('./models/article.js')

app.get('/', function (req, res) {
	res.send('Hello World! Hi!');
});

app.get('/articles', function(req, res){
  Article.find({}, function(err, articles){
    if (err){
      res.send(err)
    } else {
      res.send(articles)
    }
  });
})

app.get('/articles/:id', function(req, res){
  Article.findById(req.params.id , function(err, article){
    if (err){
      res.send(err)
    } else {
      res.send(article)
    }
  });
})

app.post('/articles', function(req, res){
  let article = new Article()

  article.title = req.body.title
  article.body = req.body.body
  article.likes = req.body.likes

  article.save(function(err){
    if (err){
      res.send(`Error - ${err}`)
    } else {
      res.send('OK')
    }
  })
})

app.listen(3000, function () {
	console.log('App listening on port 3000');
});