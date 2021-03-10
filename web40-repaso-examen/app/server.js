const express = require('express');
const app = express();
const path =require('path');
const puerto = 3000;


//Decirle al servidor que use el motor de plantillas ejs
let rutaPlantillas = path.join(__dirname, 'plantillas');
//establecer la ruta principal de mis plantillas
app.set('view engine', 'ejs');
app.set('views', rutaPlantillas);

//Esta linea lo que dice a espress es que
//devuelva cualquier fichero contenido en la
//carpeta public que sea llamado en la
//URL.
let rutaPublic = path.join(__dirname,'public');
app.use(express.static(rutaPublic));


/* app.get('/', function (req, res) {
    res.sendFile(__dirname+"/public/index.html")
});
 */

app.get('/app1', function (req, res) {
    let respu = "Respuesta: ";
    let dias = ['Lunes', 'Martes', 'Miercoles'];
    for (const dia of dias) {
        respu=respu+" "+dia;
    }
    res.send(respu);
});


app.get('/diaSemana/:numero', function (req, res) {
    let num = req.params.numero;
    if (num == 1) {
        res.send('Lunes')
    } else {
        res.send('No es Lunes')
    }
});

let usuarios = {
    "user1" : "juanito",
    "user2" : "juanín",
    "user3" : "juanillo"
}

app.get('/usuario/:usr', function (req, res) {
    let u = "user"+req.params.usr;
    res.send(usuarios[u]);
})

app.get('/usuarioPlantilla/:num', function (req, res) {
    let u = "user"+req.params.num;
    let objetoPlantilla = { "dato": usuarios[u]};
    res.render("usuario", objetoPlantilla);
})


app.listen(puerto, iniciaservidor());

function iniciaservidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}
