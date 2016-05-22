var db = require('../config/db_config.js');


// função de de listar-----------------------------------------------
exports.list = function(callback){

db.Manancial.find({}, function(error, manancial) {

      if(error) {

          callback({error: 'Não foi possivel retornar o manancial'});

      } else {

          callback(manancial);
      }

   });

};

//--------------------------------------------------------------------


// função de selecionar
exports.manancial = function(id, callback){

     db.Manancial.findById(id, function(error, manancial) {

        if(error) {
            callback({error: 'Não foi possivel retornar o manancial'});
        } else {
            callback(manancial);
        }

    });

};
//---------------------------------------------------------------------


// função de salvar----------------------------------------------------
exports.save = function(codigo, latitude, longitude, capacidade, marcaCarro, modeloCarro, cidade,   callback){

new db.Manancial({

  'codigo': codigo,
  'latitude': latitude,
  'longitude': longitude,
  'nome': nome,
  'tipo': tipo,
  'cidade': cidade,
  created_at: new Date
    }).save(function(error, manancial) {

        if(error) {
            callback({error: 'Não foi possivel retornar o Manancial'});
        } else {
            callback(manancial);
        }
    });
};
//---------------------------------------------------------------------


// função de atualizar ------------------------------------------------
exports.update = function(codigo, latitude, longitude, capacidade, marcaCarro, modeloCarro, cidade,   callback){

    db.Manancial.findById(id, function(error, manancial) {

        if(placa) manancial.codigo = codigo;
        if(nomePipeiro) manancial.latitude = latitude;
        if(capacidade) manancial.longitude = longitude;
        if(marcaCarro) manancial.nome = nome;
        if(modeloCarro) manancial.tipo = tipo;
        if(cidade) manancial.cidade = cidade;

        pipeiro.save(function(error, manancial) {

        if(error){
            callback({error: 'Não foi possivel retornar o manancial'});
        } else {
            callback(manancial);
            }
        });

    })

};
//---------------------------------------------------------------------


// função de deletar --------------------------------------------------
exports.delete = function(id, callback){

    db.Manancial.findById(id, function(error, manancial) {

        if(!error) {
            manancial.remove(function(error) {
                if(!error) {
                    callback({error: 'Manancial ' +id+ ' excluido com sucesso' });
                }
            });
        } else if(error == null) {

            callback({error: 'Manancial' +id+ ' não encontrado' });
        }
    });
};
//----------------------------------------------------------------------
