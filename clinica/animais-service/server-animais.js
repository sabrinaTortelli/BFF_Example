const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Animais = require('./Animais.js');


mongoose.connect('mongodb+srv://XXX:XXXX@cluster0.sj09p.mongodb.net/clinicaVeterinaria?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(err){
    console.log(err.message);
})

app.engine('html', require('ejs').renderFile); //vai renderizar o html
app.set('view engine', 'html');//setar a view para ser o html
app.use('/public', express.static(path.join(__dirname, 'public')));//diretório estático na pasta public para buscar a public
app.set('views', path.join(__dirname, '/views'));//está dizendo onde está a path da view
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/animais', (req, res)=>{

    if(req.query.busca == null){
        Animais.find({}).exec(function(err, animais){
            res.render('animais', {animais: animais});
        })
    } else {
        res.render('animais', {});
    }
});

app.listen(7000, ()=>{
    console.log("Porta 7000 - Server rodando!");
});