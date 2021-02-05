//Cargar la libreria express para ser un servidor web
const express = require('express');
const app = express();

//req = petición (Rquest), res = respuesta (Response)
app.get('/', function (req, res) {
    console.log("Un cliente ha conectado: "+req.ip);
    res.send("Hola, tu ip es: "+req.ip);
})

const puerto = 3000;
app.listen(puerto, servidor() );

function servidor() {
    console.log('Servidor iniciado')
}