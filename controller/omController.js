var db = require('../config/db_config.js');


// função de de listar-----------------------------------------------
exports.list = function(callback){

db.OM.find({}, function(error, om) {

      if(error) {

          callback({error: 'Não foi possivel retornar o Orgão Militar'});

      } else {

          callback({om});
      }

   });

};

//--------------------------------------------------------------------


// função de selecionar
exports.rota = function(idOm, callback){

     db.OM.findById(idPa, function(error, om) {

        if(error) {
            callback({error: 'Não foi possivel retornar o Orgão Militar'});
        } else {
            callback(om);
        }

    });

};
//---------------------------------------------------------------------


// função de salvar----------------------------------------------------
exports.save = function(idOm, nome, sigla, callback){

new db.OM({

  'idOm': idOm,
  'nome': nome,
  'sigla': sigla,
  created_at: new Date
    }).save(function(error, rota) {

        if(error) {
            callback({error: 'Não foi possivel retornar o Orgão Militar'});
        } else {
            callback(rota);
        }
    });
};
//---------------------------------------------------------------------


// função de atualizar ------------------------------------------------
exports.update = function(idOm, nome, sigla, callback){

    db.OM.findById(id, function(error, om) {

        if(idOm) distancia.idOm = idOm;
        if(nome) idManancial.nome = nome;
        if(sigla) idPa.sigla = sigla;

        rota.save(function(error, om) {

        if(error){
            callback({error: 'Não foi possivel retornar o Orgam Militar'});
        } else {
            callback(om);
            }
        });

    })

};
//---------------------------------------------------------------------


// função de deletar --------------------------------------------------
exports.delete = function(id, callback){

    db.OM.findById(id, function(error, om) {

        if(!error) {
            rota.remove(function(error) {
                if(!error) {
                    callback({error: 'Orgão  Militar ' +id+ ' excluido com sucesso' });
                }
            });
        } else if(error == null) {

            callback({error: 'Orgão  Militar ' +id+ ' não encontrado' });
        }
    });
};
//----------------------------------------------------------------------
