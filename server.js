const express = require('express');
const hbs = require('hbs');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//Helper

require('./helpers');

app.get('/', function(req, res) {


    res.render('home', {

        nombre: "Pantaleon"

    });

})

app.listen(port);