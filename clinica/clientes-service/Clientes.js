var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientesSchema = new Schema({
    nome: String,
    cliente_id: Number,
    endereco: String,
    telefone: String
}, {collection: 'clientes'});

var Clientes = mongoose.model("Clientes", clientesSchema);

module.exports = Clientes;