const express = require('express');
const path = require('path');
const app = express();
const puerto = 3012;

const rutaPublic = path.join(__dirname, '..' ,'public');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'plantillas'));

app.use(express.static(rutaPublic));

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/pagina2', function (req, res) {
    res.render('secundaria');
})

//Crear plantilla ruta /pagina2 que devuelva una plantilla llamada secundaria

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log('iniciado');
}