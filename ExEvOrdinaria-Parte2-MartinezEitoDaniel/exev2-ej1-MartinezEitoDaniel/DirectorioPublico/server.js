const express = require('express');
const app = express();
const path = require('path');
const { send } = require('process');
const puerto = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/Publico/index.html")
})

app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}