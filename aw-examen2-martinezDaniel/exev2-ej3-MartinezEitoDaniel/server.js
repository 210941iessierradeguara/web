const express = require('express');
const app = express();
const path = require('path');
const puerto = 3002;

app.get('/2/mas/3', function (req, res) {
    
})

app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}