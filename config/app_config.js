var express = require('express'); // Utilizando o express REQUIRE

var app = module.exports = express(); // Atribuindo a variável app o a funcionalidade o EXPRESS

var bodyParser = require('body-parser'); // Definindo a variável bodyParser com o REQUIRE

var allowCors = function(req, res, next) {
 
 res.header('Access-Control-Allow-Origin', 'http://519785ec.ngrok.io', '127.0.0.1:5000');
 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 res.header('Access-Control-Allow-Credentials', 'true');
 
 next();
 
}

//---------------------Definindo minha configurações da aplicação - PORTA, PARSER, URL----------------------------------------
app.listen(5000); // Definindo minha porta para a aplicação

app.use(bodyParser.json()); // Arquivo a utilizar no PARSER
 
app.use(bodyParser.urlencoded({extended: true})); // Definição da URL a ser utilizada no PARSER

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX