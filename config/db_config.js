//---------------------------------- VARIAVEIS DE CONEXÃO DO BANCO DE DADOS--------------------------------------------------------------

var db_string = 'mongodb://127.0.0.1/pipageo'; //Variavel para receber a URL do banco com seu nome

var mongoose = require('mongoose').connect(db_string); // Require par ao modulo do MONGOOSE com sua conexão

var db = mongoose.connection; // Variavel para interagir com o banco de dados

//---------------------------------- CONEXÃO COM O BANCO DE DADOS--------------------------------------------------------------

db.on('erro', console.error.bind(console, 'Erro ao conectar ao banco')); //Apos conexão, trata o erro com a exceção...

db.once('open', function () { // Quando a conexão for aberta realizar a criação do SCHEMA >> COLUNAS DO BANCO E AS PROPRIEDADES (TIPOS)
   
    var paSchema = mongoose.Schema({
       
        placa: String,
        latitudePA: Number,
        longetudePA: Number,
        qtdePessoas: Number,
        responsavel: Number,
        capacidade: Number,
        cidade: String,
        created_at: Date

    });
    
    var pipeiroSchema = mongoose.Schema({

        placa: String,
        nomePipeiro: String,
        capacidade: Number,
        marcaCarro: String,
        modeloCarro: String,
        cidade: String,
        created_at: Date
    });

     var manancialSchema = mongoose.Schema({

        codigo: String,
        latitude: Number,
        longitude: Number,
        nome: String,
        tipo: String,
        cidade: String,
        created_at: Date
    });

    var rotaSchema = mongoose.Schema({

        distancia: Number,
        idManancial: String,
        idPa: String,
        created_at: Date
    });
    exports.Pa = mongoose.model('pa', paSchema); // Definição do Model para acessar o User na aplicação com as funções do MONGOOSE
    exports.Pipeiro = mongoose.model('pipeiro', pipeiroSchema);
    exports.Manancial = mongoose.model('manancial', manancialSchema);
    exports.Rota = mongoose.model('rot  a', rotaSchema);
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
