let bola = document.getElementById("bola")
function moverBola(evento) {
    console.log(evento);
if (evento.key == "ArrowUp") {
    bola.style.top=y-1+"px";
}
else if (evento.key == "ArrowDown") {
    bola.style.top=y+1+"px";
}
else if (evento.key == "ArrowLeft") {
    bola.style.top=X-1+"px";
}
else if (evento.key == "ArrowLeft") {
    bola.style.top=X+1+"px";
}
}