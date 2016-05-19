//---------------------------------- VARIAVEIS DE CONEXÃO DO BANCO DE DADOS--------------------------------------------------------------

var db_string = 'mongodb://127.0.0.1/pipageo'; //Variavel para receber a URL do banco com seu nome

var mongoose = require('mongoose').connect(db_string); // Require par ao modulo do MONGOOSE com sua conexão

var db = mongoose.connection; // Variavel para interagir com o banco de dados

//---------------------------------- CONEXÃO COM O BANCO DE DADOS--------------------------------------------------------------

db.on('erro', console.error.bind(console, 'Erro ao conectar ao banco')); //Apos conexão, trata o erro com a exceção...

db.once('open', function () { // Quando a conexão for aberta realizar a criação do SCHEMA >> COLUNAS DO BANCO E AS PROPRIEDADES (TIPOS)
   
    var userSchema = mongoose.Schema({
       
        placa: String,
        geolocaPA: String,
        geolocaPAGET: String,
        created_at: Date
        
        
    });
    
    exports.Pa = mongoose.model('User', userSchema); // Definição do Model para acessar o User na aplicação com as funções do MONGOOSE
    
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX