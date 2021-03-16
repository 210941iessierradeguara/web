const express = require('express');
const app = express();
const path = require('path');
const { send } = require('process');
const puerto = 3002;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    let yo = {"nombre": "Daniel", "apellidos": "Martínez Eito"}

    res.render('index', yo);
});

app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}