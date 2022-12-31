var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.all('/', function(req, res) {
  res.render('home.ejs', {name: "Web Development using Nodejs"});
});

// about page
app.get('/about', function(req, res) {
  res.render('about.ejs', {name: "About Us"});
});

app.get('/services', function(req, res) {
    res.render('services.ejs', {name: "Services"});
});

app.get('/portfolio', function(req, res) {
  res.render('portfolio.ejs', {name: "Portfolio"});
});

app.get('/team', function(req, res) {
  res.render('team.ejs', {name: "Team"});
});

app.get('/contact', function(req, res) {
    res.render('contact.ejs', {name: "Contact Us"});
});

app.use((req, res, next) => {
  res.status(404).render(
      "404.ejs");
})

app.listen(8080);
console.log('Server is listening on port 8080');