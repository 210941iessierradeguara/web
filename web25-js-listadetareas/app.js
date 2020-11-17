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
    listaTareas.innerHTML +="<li>"+textoTarea+"</li>"
}

