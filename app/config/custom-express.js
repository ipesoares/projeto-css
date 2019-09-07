var bodyParser = require('body-parser')
var express = require('express');
var path = require('path')


module.exports = function(){

var app = express()

app.use(express.static('app/'));
console.log(path.join('app/'));

app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs
app.set('views', path.join(__dirname, './../views/'));
console.log(path.join(__dirname + './../views'));
app.use(bodyParser.urlencoded({ extended: true })); // Com essa configuração, vamos conseguir parsear o corpo das requisições

//renderização das paginas
app.get('/', (req, res) => {
    res.render('produtos')
  })

  app.get('/lanches', (req, res) => {
    res.render('lanches')
  })

  app.get('/drink', (req, res) => {
    res.render('drink')
  })

  app.get('/pizzas', (req, res) => {
    res.render('pizzas')
  })

  app.get('/combos', (req, res) => {
    res.render('combos')
  })


return app;
}