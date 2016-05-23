//--------------------------------Definindo minhas variáveis a ser utilizadas-----------------------------------------------
var app = require('./config/app_config.js');

var paController = require('./controller/paController.js');
var pipeiroController = require('./controller/pipeiroController.js');
var rotaController = require('./controller/rotaController.js');
var manancialController = require('./controller/manancialController.js');
var omController = require('./controller/omController.js');


var validator = require('validator');


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



                    //Definindo meus METODOS para CONSUMO NO WEBSERVICE



//----------------------------ACESSO RAIZ DA APLICAÇÃO COM MÉTODO GET------------------------------------------------------------------------

app.get('/', function (req, res) {
   
   res.end('OK NO AR VAMOS COMEÇAR!');
    
});
//-------------------------------------------------------------------------------------------------------------------


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//------------------------------------ACESSO AOS CONTEUDOS PRINCIPAIS COM MÉTODO GET ------------------------------------------------------

app.get('/pa', function (req, res) {
   
   paController.list(function(resp) {
       res.jsonp(resp);
   });
    
});

//-----------------------------------------------------------------------------------------------------------------------------


//------------------------------------ACESSO AOS METODOS POR ID COM MÉTODO GET -----------------------------------------------

app.get('/pa/:placa', function (req, res) {
   
    var placa = validator.trim(validator.escape(req.param('placa')));
    
    paController.pa(placa, function(resp) {
        res.jsonp(resp);
    });
    
});
//-------------------------------------------------------------------------------------------------------------------


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//------------------------------------ENVIANDO CAMPOS COM MÉTODO POST -----------------------------------------------

app.post('/pa', function (req, res) {
   
    var placa = validator.trim(validator.escape(req.param('placa')));
    var latitudePA = validator.trim(validator.escape(req.param('latitudePA')));
    var longetudePA = validator.trim(validator.escape(req.param('longetudePA')));
    var qtdePessoas = validator.trim(validator.escape(req.param('qtdePessoas')));
    var responsavel = validator.trim(validator.escape(req.param('responsavel')));
    var capacidade = validator.trim(validator.escape(req.param('capacidade')));
    var cidade = validator.trim(validator.escape(req.param('cidade')));
    
    paController.save(placa, latitudePA, longetudePA, qtdePessoas, responsavel, capacidade, cidade, function(resp) {
        
        res.jsonp(resp);
    });
    
});
//-------------------------------------------------------------------------------------------------------------------

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//------------------------------------ATUALIZANDO USUÁRIO COM MÉTODO PUT -----------------------------------------------

app.put('/pa', function (req, res) {
   
    var id = validator.trim(validator.escape(req.param('id')));
    var codigo = validator.trim(validator.escape(req.param('codigo')));
    var latitudePA = validator.trim(validator.escape(req.param('latitudePA')));
    var longetudePA = validator.trim(validator.escape(req.param('longetudePA')));
    var qtdePessoas = validator.trim(validator.escape(req.param('qtdePessoas')));
    var responsavel = validator.trim(validator.escape(req.param('responsavel')));
    var capacidade = validator.trim(validator.escape(req.param('capacidade')));
     var cidade = validator.trim(validator.escape(req.param('cidade')));
    
    paController.update(id, codigo, responsavel, capacidade, function(resp) {
        res.jsonp(resp);
    });
});
//-------------------------------------------------------------------------------------------------------------------


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//------------------------------------DELETANDO USUÁRIO COM MÉTODO DELETE -----------------------------------------------

app.delete('/pa/:id', function (req, res) {
   
    var id = validator.trim(validator.escape(req.param('id')));
    
    paController.delete(id, function(resp){
        res.jsonp(resp);
    });
    
    
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


app.get('/pipeiro', function (req, res) {

   pipeiroController.list(function(resp) {
       res.jsonp(resp);
   });

});

app.get('/pipeiro/:placa', function (req, res) {

    var placa = validator.trim(validator.escape(req.param('placa')));

    pipeiroController.pipeiro(placa, function(resp) {
        res.jsonp(resp);
    });

});

app.post('/pipeiro', function (req, res) {

    var placa = validator.trim(validator.escape(req.param('placa')));
    var nomePipeiro = validator.trim(validator.escape(req.param('nomePipeiro')));
    var capacidade = validator.trim(validator.escape(req.param('capacidade')));
    var marcaCarro = validator.trim(validator.escape(req.param('marcaCarro')));
    var modeloCarro = validator.trim(validator.escape(req.param('modeloCarro')));
    var cidade = validator.trim(validator.escape(req.param('cidade')));

    pipeiroController.save(placa, nomePipeiro, capacidade, marcaCarro, modeloCarro, cidade, function(resp) {

        res.jsonp(resp);
    });

});


app.delete('/pipeiro/:id', function (req, res) {

    var id = validator.trim(validator.escape(req.param('id')));

    pipeiroController.delete(id, function(resp){
        res.jsonp(resp);
    });
});


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

app.get('/rota', function (req, res) {

   rotaController.list(function(resp) {
       res.jsonp(resp);
   });

});

app.get('/rota/:id', function (req, res) {

    var idPa = validator.trim(validator.escape(req.param('id')));

    rotaController.list(idPa, function(resp) {
        res.jsonp(resp);
    });

});

app.post('/rota', function (req, res) {

    var distancia = validator.trim(validator.escape(req.param('distancia')));
    var idManancial = validator.trim(validator.escape(req.param('idManancial')));
    var idPa = validator.trim(validator.escape(req.param('idPa')));

    rotaController.save(distancia, idManancial, idPa, function(resp) {
        res.jsonp(resp);
    });

});


app.delete('/rota/:id', function (req, res) {

    var id = validator.trim(validator.escape(req.param('id')));

    rotaController.delete(id, function(resp){
        res.jsonp(resp);
    });
});


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

app.get('/manancial', function (req, res) {

   manancialController.list(function(resp) {
       res.jsonp(resp);
   });

});

app.get('/manancial/:id', function (req, res) {

    var id = validator.trim(validator.escape(req.param('id')));

    manancialController.manancial(id, function(resp) {
        res.jsonp(resp);
    });

});

app.post('/manancial', function (req, res) {

    var distancia = validator.trim(validator.escape(req.param('distancia')));
    var idManancial = validator.trim(validator.escape(req.param('idManancial')));
    var idPa = validator.trim(validator.escape(req.param('idPa')));

    rotaController.save(distancia, idPa, idManancial, function(resp) {
        res.jsonp(resp);
    });

});


app.delete('/manancial/:id', function (req, res) {

    var id = validator.trim(validator.escape(req.param('id')));

    rotaController.delete(id, function(resp){
        res.jsonp(resp);
    });
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
app.get('/om', function (req, res) {

   omController.list(function(resp) {
       res.jsonp(resp);
   });

});

app.get('/om/:id', function (req, res) {

    var id = validator.trim(validator.escape(req.param('id')));

    omController.om(id, function(resp) {
        res.jsonp(resp);
    });

});

app.post('/om', function (req, res) {

    var idOm = validator.trim(validator.escape(req.param('idOm')));
    var nome = validator.trim(validator.escape(req.param('nome')));
    var sigla = validator.trim(validator.escape(req.param('sigla')));

    omController.save(idOm, nome, sigla, function(resp) {
        res.jsonp(resp);
    });

});


app.delete('/manancial/:id', function (req, res) {

    var id = validator.trim(validator.escape(req.param('id')));

    omController.delete(id, function(resp){
        res.jsonp(resp);
    });
});
