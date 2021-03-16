const express = require('express');
const app = express();
const path = require('path');
const puerto = 3003;

app.set('view engine', 'ejs');

let rutaPlantillas = path.join(__dirname, 'plantillas');
app.set('views', rutaPlantillas);


app.get('/', function (req, res) {
    let datos = {
        "prop1": "Monday",
        "prop2": "Tuesday",
        "prop3": "wednesday",
    };
    res.render('index', datos);
});

app.listen(puerto, iniciaservidor)
function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}