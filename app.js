var express = require('express'); //Importamos la dependencia
var app = express(); //Declaramos una App de Express

var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public')); //Esta linea espicifica como se llama el directorio virtual, y a donde sera mapeado

//Usar app.use() para debuggear:
app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

//primera ruta (está al nivel de la raíz /), Hello World!
app.get('/', function (req, res){ //Agregamos el link de referencia a donde se encuetra localizado la carpeta de estilo
    res.render('index');
});

//Tercera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
    res.render('person', {ID: req.params.id });
});

app.listen(port); //Levantar el server y ponerlo a la escucha