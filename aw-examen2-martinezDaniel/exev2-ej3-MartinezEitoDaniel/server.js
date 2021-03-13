const express = require('express');
const app = express();
const path = require('path');
const puerto = 3002;

app.get('/2/mas/3', function (req, res) {
    res.send('5');
})

app.get('/:num1/mas/:num2', function (req,res) {
    let n1 = req.params.num1
    let n2 = req.params.num2
    res.send(n1+n2);
})

app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}