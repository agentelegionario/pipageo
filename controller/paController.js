var db = require('../config/db_config.js'); //Definição do CONTROLLER no BANCO


// função de de listar-----------------------------------------------
exports.list = function(callback){

db.Pa.find({}, function(error, pa) {

      if(error) {

          callback({error: 'Não foi possivel retornar o Pa'});

      } else {

          callback(pa);
      }

   });

};

//--------------------------------------------------------------------



// função de listar user----------------------------------------------
exports.pa = function(placa, callback){

     db.Pa.find({placa: placa}, function(error, pa) {

        if(error) {

            callback({error: 'Não foi possivel retornar o Pa'});
        } else {
            callback(pa);
        }

    });

};
//---------------------------------------------------------------------


// função de salvar----------------------------------------------------
exports.save = function(placa, latitudePA, LongetudePA,qtdePessoas, responsavel, capacidade, cidade,  callback){

new db.Pa({

    'placa': placa,
    'latitudePA': latitudePA,
    'LongetudePA': LongetudePA,
    'qtdePessoas': qtdePessoas,
    'responsavel': responsavel,
    'capacidade': capacidade,
    'cidade': cidade,
    'created_at': new Date

    }).save(function(error, pa) {

        if(error) {
            callback({error: 'Não foi possivel retornar o Pa'});
        } else {
            callback(pa);
        }
    });
};
//---------------------------------------------------------------------


// função de atualizar ------------------------------------------------
exports.update = function(id, codigo, latitudePA, LongetudePA,qtdePessoas, responsavel, capacidade, cidade,  callback){

    db.Pa.findById(id, function(error, pa) {

        if(placa) pa.codigo = codigo;
        if(geolocaPA) pa.latitudePA = LongetudePA;
        if(LongetudePA) pa.longetudePA = LongetudePA;
        if(qtdePessoas) pa.qtdePessoas = qtdePessoas;
        if(responsavel) pa.responsavel = responsavel;
        if(capacidade) pa.capacidade = capacidade;
        if(cidade) pa.cidade = cidade;

        pa.save(function(error, pa) {


        if(error){

            callback({error: 'Não foi possivel Atualizar o Pa'});
        } else {
            callback(pa);
            }
        });

    })

};
//---------------------------------------------------------------------


// função de deletar --------------------------------------------------
exports.delete = function(id, callback){

    db.Pa.findById(id, function(error, pa) {

        if(!error) {
            pa.remove(function(error) {
                if(!error) {
                    callback({error: 'PA ' +id+ ' excluido com sucesso' });
                }
            });
        } else if(error == null) {

            callback({error: 'PA' +id+ ' não encontrado' });
        }
    });
};
//----------------------------------------------------------------------
