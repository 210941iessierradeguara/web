const express = require('express');
const app = express();
const puerto = 3000;

app.get('/saluda/:nombre', function (req, res) {
    let nom = req.params.nombre;
    res.send('Hola '+nom);
})

app.get('/despide/:nombre', function (req, res) {
    let nom = req.params.nombre;
    res.send('Adios '+nom);
})


app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log('Servidor en http://localhost:'+puerto)
}