var db = require('../config/db_config.js');


// função de de listar-----------------------------------------------
exports.list = function(callback){

db.Rota.find({}, function(error, rota) {

      if(error) {

          callback({error: 'Não foi possivel retornar o rota'});

      } else {

          callback({rota});
      }

   });

};

//--------------------------------------------------------------------


// função de selecionar
exports.rota = function(idPa, callback){

     db.Rota.findById(idPa, function(error, rota) {

        if(error) {
            callback({error: 'Não foi possivel retornar o rota'});
        } else {
            callback(rota);
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
exports.update = function(id, distancia, idManancial, idPa, callback){

    db.Rota.findById(id, function(error, rota) {

        if(distancia) distancia.distancia = distancia;
        if(idManancial) idManancial.idManancial = idManancial;
        if(idPa) idPa.idPa = idPa;

        rota.save(function(error, rota) {

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
            rota.remove(function(error) {
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
