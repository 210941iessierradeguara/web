const express = require('express');
const app = express();
const path = require('path');
const { send } = require('process');
const puerto = 3001;

app.get('/', function (req, res) {
    res.send("Hola Clase")
})

app.get('/:imagen', function (req, res) {
    res.sendFile(__dirname+"/imagen/img1.png")
})

app.get('/:html', function (req, res) {
    res.sendFile(__dirname+"/html/htmll.html")
})



app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}