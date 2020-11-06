let incognita = 3; //numero a adivinar
let respuesta; //aquí se guarda lo producido por el usuario

respuesta = prompt("Escribe un numero del 1 al 10");

alert(respuesta);

if(respuesta == null){
    alert("fin del juego, has cancelado");
} else if (respuesta == incognita) {
    alert("Fin del juego, acertaste");
} else if (respuesta == "4") {
    alert("Uy! Dale a F% y prueba otra vez")
}

else{
    alert("Fin del juego, numero equivocado, presiona F5 para volver a empezar");
}