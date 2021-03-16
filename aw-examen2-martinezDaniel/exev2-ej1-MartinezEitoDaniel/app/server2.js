const express = require('express');
const app = express();
const path = require('path');
const { send } = require('process');
const puerto = 3000;

let rutaPublica = path.join(__dirname, 'publica')
app.use(express.static(rutaPublica))

app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}