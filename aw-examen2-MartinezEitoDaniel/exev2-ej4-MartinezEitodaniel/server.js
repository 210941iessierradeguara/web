const express = require('express');
const app = express();
const path = require('path');
const puerto = 3003;


let datos = {
    "prop1": "Monday",
    "prop2": "Tuesday",
    "prop3": "wednesday",
}

app.get('/prop/:dat', function (req, res) {
    let u = "prop"+req.params.usr;
    res.send(datos[u]);
})

app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}