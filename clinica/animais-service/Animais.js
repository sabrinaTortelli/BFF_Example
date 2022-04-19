var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animaisSchema = new Schema({
    nome: String,
    cliente: Number,
    raca: String
}, {collection: 'animais'});

var Animais = mongoose.model("Animais", animaisSchema);

module.exports = Animais;