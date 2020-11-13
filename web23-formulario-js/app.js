function saludar() {

    let campoInput = document.getElementById("idInput");


    if (campoInput.value != "") {
        alert("Hola "+campoInput.value);

        campoInput.value = null;
    };

};
