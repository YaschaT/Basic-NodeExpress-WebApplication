const express = require ('express');
const path = require('path');
const app = express();
const port = 3000;
var open = require("open")

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/home', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/portfolio', function(req, res){
  res.render('portfolio');
});

// Lector M. Alem //
// app.listen(port, () => {console.log("I am listening on port 3000")});
app.listen(port, function(){
  console.log("I am listening on port 3000");
  open("http://localhost:3000/")
});
