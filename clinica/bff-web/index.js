const httpProxy = require('express-http-proxy');
const express = require('express');
const path = require('path');
const app = express();
var logger = require('morgan');
const bodyParser = require('body-parser');
 
app.use(logger('dev'));
app.engine('html', require('ejs').renderFile); //vai renderizar o html
app.set('view engine', 'html');//setar a view para ser o html
app.use('/public', express.static(path.join(__dirname, 'public')));//diretório estático na pasta public para buscar a public
app.set('views', path.join(__dirname, '/views'));//está dizendo onde está a path da view
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
function selectProxyHost(req) {
    if (req.path === '/clientes'){
        return 'http://localhost:5000/clientes';
    } else if (req.path === '/animais'){
        return 'http://localhost:7000/animais';
    } else if (req.path === '/funcionarios'){
        return 'http://localhost:8000/funcionarios';
    }
}

app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});
 
app.listen(10000, () => {
    console.log('BFF Web Running!');
});