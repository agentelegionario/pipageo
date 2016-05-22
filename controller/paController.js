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

     db.Pa.findById(placa, function(error, pa) {

        if(error) {

            callback({error: 'Não foi possivel retornar o Pa'});
        } else {
            callback(pa);
        }

    });

};
//---------------------------------------------------------------------


// função de salvar----------------------------------------------------
exports.save = function(placa, geolocaPA, geolocaPAGET, callback){

new db.Pa({

  'placa': placa,
  'geolocaPA': geolocaPA,
  'geolocaPAGET': geolocaPAGET,
   created_at: new Date
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
exports.update = function(id, placa, geolocaPA, geolocaPAGET, callback){

    db.Pa.findById(id, function(error, pa) {

        if(placa) {
            pa.placa = placa;

        }
        if(geolocaPA) {
            pa.geolocaPA = geolocaPA;

        }
        if(geolocaPAGET) {
            pa.geolocaPAGET = geolocaPAGET;
        }

        pa.save(function(error, pa) {


        if(error){

            callback({error: 'Não foi possivel retornar o Pa'});
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
