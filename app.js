var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
   res.send("<html><body>Portal de noticias</body></html>"); 
});

app.get('/Tecnologia', function(req, res){
    res.send("<html><body>Noticias de Tecnologia</body></html>"); 
 });

app.get('/Moda', function(req, res){
    res.send("<html><body>Noticias de Moda</body></html>"); 
 });

app.get('/Beleza', function(req, res){
    res.send("<html><body>Noticias de Beleza</body></html>"); 
 });

app.listen(3000, function(){
    console.log("Servidor rodando com Express"); 
 });