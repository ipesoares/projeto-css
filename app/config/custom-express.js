var faker = require('faker')
var bodyParser = require('body-parser')
// var expressLayouts = require('express-ejs-layouts')
var express = require('express');
var path = require('path')


module.exports = function(){

var app = express()

app.use(express.static('app/'));
console.log(path.join('app/'));



app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs
app.set('views', path.join(__dirname, './../views/'));
console.log(path.join(__dirname + './../views'));
// app.use(express.json());


// app.use(expressLayouts)          // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded({ extended: true })); // Com essa configuração, vamos conseguir parsear o corpo das requisições


app.get('/', (req, res) => {
    res.render('produtos')
  })

  app.get('/lanches', (req, res) => {
    res.render('lanches')
  })


return app;
}