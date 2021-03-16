const express = require('express');
const app = express();
const path = require('path');
const puerto = 3001;

app.get('/', function (req, res) {
    res.send("Hola Mundo")
});

app.get('/imagen', function (req, res) {
    res.sendFile( path.join(__dirname,'archivos','img1.png') )
});

app.get('/tab', function (req, res) {
    res.sendFile( path.join(__dirname,'archivos','tabla.html'))
});


app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}