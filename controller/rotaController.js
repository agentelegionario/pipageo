var db = require('../config/db_config.js');


// função de de listar-----------------------------------------------
exports.list = function(callback){

db.Manancial.find({}, function(error, rota) {

      if(error) {

          callback({error: 'Não foi possivel retornar o rota'});

      } else {

          callback(rota);
      }

   });

};

//--------------------------------------------------------------------


// função de selecionar
exports.rota = function(id, callback){

     db.Rota.findById(id, function(error, rota) {

        if(error) {
            callback({error: 'Não foi possivel retornar o rota'});
        } else {
            callback(manancial);
        }

    });

};
//---------------------------------------------------------------------


// função de salvar----------------------------------------------------
exports.save = function(distancia, idManancial, idPa, callback){

new db.Rota({

  'distancia': distancia,
  'idManancial': idManancial,
  'idPa': idPa,
  created_at: new Date
    }).save(function(error, rota) {

        if(error) {
            callback({error: 'Não foi possivel retornar a Rota'});
        } else {
            callback(rota);
        }
    });
};
//---------------------------------------------------------------------


// função de atualizar ------------------------------------------------
exports.update = function(distancia, idManancial, idPa, callback){

    db.Rota.findById(id, function(error, rota) {

        if(distancia) manancial.distancia = distancia;
        if(idManancial) manancial.idManancial = idManancial;
        if(idPa) manancial.idPa = idPa;

        pipeiro.save(function(error, rota) {

        if(error){
            callback({error: 'Não foi possivel retornar o rota'});
        } else {
            callback(rota);
            }
        });

    })

};
//---------------------------------------------------------------------


// função de deletar --------------------------------------------------
exports.delete = function(id, callback){

    db.Rota.findById(id, function(error, rota) {

        if(!error) {
            manancial.remove(function(error) {
                if(!error) {
                    callback({error: 'Rota ' +id+ ' excluido com sucesso' });
                }
            });
        } else if(error == null) {

            callback({error: 'Rota' +id+ ' não encontrado' });
        }
    });
};
//----------------------------------------------------------------------
