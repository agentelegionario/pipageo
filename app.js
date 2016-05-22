//--------------------------------Definindo minhas variáveis a ser utilizadas-----------------------------------------------
var app = require('./config/app_config.js');

var paController = require('./controller/paController.js');

var validator = require('validator');


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



                    //Definindo meus METODOS para CONSUMO NO WEBSERVICE

//----------------------------ACESSO RAIZ DA APLICAÇÃO COM MÉTODO GET------------------------------------------------------------------------

app.get('/', function (req, res) {
   
   res.end('OK NO AR VAMOS COMEÇAR!');
    
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



//------------------------------------ACESSO AOS USUÁRIOS COM MÉTODO GET ------------------------------------------------------

app.get('/pa', function (req, res) {
   
   paController.list(function(resp) {
       res.jsonp(resp);
   });
    
});

//-----------------------------------------------------------------------------------------------------------------------------


//------------------------------------ACESSO AOS USUÁRIOS POR ID COM MÉTODO GET -----------------------------------------------

app.get('/pa/:placa', function (req, res) {
   
    var placa = validator.trim(validator.escape(req.param('placa')));
    
    paController.pa(placa, function(resp) {
        res.jsonp(resp);
    });
    
});


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



//------------------------------------ENVIANDO USUÁRIO COM MÉTODO POST -----------------------------------------------

app.post('/pa', function (req, res) {
   
    var placa = validator.trim(validator.escape(req.param('placa')));
    var geolocaPA = validator.trim(validator.escape(req.param('geolocaPA')));
    var geolocaPAGET = validator.trim(validator.escape(req.param('geolocaPAGET')));
    
    paController.save(placa, geolocaPA, geolocaPAGET, function(resp) {
        
        res.jsonp(resp);
    });
    
});


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




//------------------------------------ATUALIZANDO USUÁRIO COM MÉTODO PUT -----------------------------------------------

app.put('/pa', function (req, res) {
   
    var id = validator.trim(validator.escape(req.param('id')));
    var fullname = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));
    
    paController.update(id, fullname, email, password, function(resp) {
        res.jsonp(resp);
    });
});
//-------------------------------------------------------------------------------------------------------------------



//------------------------------------DELETANDO USUÁRIO COM MÉTODO DELETE -----------------------------------------------

app.delete('/pa/:id', function (req, res) {
   
    var id = validator.trim(validator.escape(req.param('id')));
    
    paController.delete(id, function(resp){
        res.jsonp(resp);
    });
    
    
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
