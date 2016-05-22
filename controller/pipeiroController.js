var db = require('../config/db_config.js');


// função de de listar-----------------------------------------------
exports.list = function(callback){

db.Pipeiro.find({}, function(error, pipeiro) {

      if(error) {

          callback({error: 'Não foi possivel retornar o Pipeiro'});

      } else {

          callback(pipeiro);
      }

   });

};

//--------------------------------------------------------------------


// função de selecionar
exports.pipeiro = function(placa, callback){

     db.Pipeiro.findById(placa, function(error, pipeiro) {

        if(error) {

            callback({error: 'Não foi possivel retornar o Pipeiro'});
        } else {
            callback(pipeiro);
        }

    });

};
//---------------------------------------------------------------------


// função de salvar----------------------------------------------------
exports.save = function(placa, nomePipeiro, capacidade, marcaCarro, modeloCarro, cidade,  callback){

new db.Pipeiro({

  'placa': placa,
  'nomePipeiro': nomePipeiro,
  'capacidade': capacidade,
  'marcaCarro': marcaCarro,
  'modeloCarro': modeloCarro,
  'cidade': cidade,
  created_at: new Date
    }).save(function(error, pipeiro) {

        if(error) {
            callback({error: 'Não foi possivel retornar o Pipeiro'});
        } else {
            callback(pipeiro);
        }
    });
};
//---------------------------------------------------------------------


// função de atualizar ------------------------------------------------
exports.update = function(placa, nomePipeiro, capacidade, marcaCarro, modeloCarro, cidade,  callback){

    db.Pipeiro.findById(id, function(error, pipeiro) {

        if(placa) pipeiro.placa = placa;
        if(nomePipeiro) pipeiro.nomePipeiro = nomePipeiro;
        if(capacidade) pipeiro.capacidade = capacidade;
        if(marcaCarro) pipeiro.marcaCarro = marcaCarro;
        if(modeloCarro) pipeiro.modeloCarro = modeloCarro;
        if(cidade) pipeiro.cidade = cidade;

        pipeiro.save(function(error, pipeiro) {

        if(error){
            callback({error: 'Não foi possivel retornar o Pipeiro'});
        } else {
            callback(pipeiro);
            }
        });

    })

};
//---------------------------------------------------------------------


// função de deletar --------------------------------------------------
exports.delete = function(id, callback){

    db.Pipeiro.findById(id, function(error, pipeiro) {

        if(!error) {
            pipeiro.remove(function(error) {
                if(!error) {
                    callback({error: 'Pipeiro ' +id+ ' excluido com sucesso' });
                }
            });
        } else if(error == null) {

            callback({error: 'Pipeiro' +id+ ' não encontrado' });
        }
    });
};
//----------------------------------------------------------------------
