const express = require('express');
const app = express();
const path = require('path');
const puerto = 3001;

app.get('/', function (req, res) {
    res.send("Hola Mundo")
    res.sendFile(__dirname+"/imagen/img1.png")
    res.sendFile(__dirname+"/tab/tabla.html")
});


app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}