var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var funcionariosSchema = new Schema({
    nome: String,
    status: Boolean,
    data_contratacao: Date,
    data_demissao: Date,
    cargo: String
}, {collection: 'funcionarios'});

var Funcionarios = mongoose.model("Funcionarios", funcionariosSchema);

module.exports = Funcionarios;