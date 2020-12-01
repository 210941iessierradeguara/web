/* let i = 0;
let conjunto = [10,23,"juan",false];
 */
/* 
while (i < conjunto.length) {
    alert("La posición "+i+" es "+conjunto[i]);
    i=i+1
};
alert("Hemos acabado");
 */


/* let numeros = [3,4,5,6,3,5,75,7,6];
i=0;

while (i < numeros.length) {
    /* numeros[i]=numeros[i]+ 1;
    numeros[i]++;
    i++;
}

console.log(numeros); */

let lista = document.getElementById("lista");
let i = 0;

while (i < lista.children.length) {
    let hijo =lista.children[i];
    hijo.innerHTML = hijo.innerHTML+"."

    i++;
};

/* for (let i = 0; i < ls.children.length; i++) {
    ls.children[i].innerHTML += ".";
} */

for (let i = 0; i < lista.children.length; i++) {
    if (i == 1 || i == 3) {
        lista.children[i].style.color="red";    
    }
}

let artistas = ["Amaral", "Estopa", "El canto del loco", "Vetusta Morla", "Tatchenko", "Pecker", "Mago de Oz", "Heroes del silencio", "La polla records"];
for (let i = 0; i < artistas.length; i++) {
    const element = artistas[i];
    
    artistas = document.createElement("tr");
    artistas = document.createElement("td");
}