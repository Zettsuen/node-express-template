const express = require('express');
const hbs = require('hbs');
const app = express()
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

app.listen(3000);