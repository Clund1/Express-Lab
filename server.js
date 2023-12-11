//load express

const express = require('express');
const path = require('path');

//require game database
const gameDb = require('./data/games-db');

//Create express application
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Mount Middleware (app.use)

//Mount routes
//Define redirect "root" route directly on app
app.get('/', function(req,res) {
    res.redirect('/games');
});
//Mount Homepage
app.get('/home', function(req,res) {
    res.render('home');
});
//Mount Database
app.get('/games', function(req,res){
    const games = gameDb.getAll();
    res.render('games/index', { games });
});
//Set Host to localPort 3000
app.listen(3000, function() {
    console.log('Listening On Local Port:3000');
});