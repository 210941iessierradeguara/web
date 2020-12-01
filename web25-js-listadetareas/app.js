function anyadirTarea() {
    //tomo el valor de input
    let eTarea = document.getElementById("idTarea");

    //compruebo si tiene algo de texto
    if (eTarea.value != "") {

        //si tiene texto, añado el elemento en la lista
        anyadirElemento(eTarea.value);
        //despues de añadir borro el elemento input
        eTarea.value = "";
    }
    //si no tiene texto, no hago nada
}

function anyadirElemento(textoTarea) {
    //cojo el elemtento de la lista
    let listaTareas = document.getElementById("listaTareas"); 
    //Le añado un elemento de lista con el texto del parámetro textoTarea
    liTarea = document.createElement("li");
    liTarea.innerHTML = textoTarea;
    listaTareas.appendChild(liTarea)
}

function borrarTarea() {
    let numTarea = prompt("Escribe el número de la tarea que quieres borrar")
    let lTareas =document.getElementById("listaTareas");
    if (numTarea >= 1 && numTarea <= lTareas.children.length) {
        let indice = numTarea - 1;

        let eTareaBorrar = lTareas.children[indice];
        lTareas.removeChild(eTareaBorrar);
    } else {
        alert("Número no válido");
    }
}