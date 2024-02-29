function array1() {
    document.getElementById('arrayp0').textContent = arrayvar[0];
    document.getElementById('arrayp1').textContent = arrayvar[1];
    document.getElementById('arrayp2').textContent = arrayvar[2];
    document.getElementById('arrayp3').textContent = arrayvar[3];

}

var arrayvar = [
    '1',
    '2',
    '3',
    '4'
];


function consultar(){
    document.getElementById('longitud').textContent = arrayvar.length;
}


function  extremos(){
    var num = arrayvar.length;
    document.getElementById('primerelemento').textContent = arrayvar[0];
    document.getElementById('ultimoelemento').textContent = arrayvar[num - 1];
}

function recorrer(){
    valores = arrayvar[0]
   for(var i = 1; i < arrayvar.length; i++){
    valores += arrayvar[i];
}
document.getElementById('valores').textContent = valores;
}

function foreach() {
    var valores = "";

    arrayvar.forEach(function (element) {
        valores += element;
    });

    document.getElementById('res').textContent = valores;
}

function recorrergenerar(){
    arrayvar.forEach(function(valor) {
    var nuevop = document.createElement("p");
    nuevop.textContent = valor;
    document.getElementById("div1").appendChild(nuevop); /* con getelementbyid consigo que se añada en el div */
      });
}

function createTextNode() {
    var boton = document.createElement("button");
    boton.textContent = "Nuevo botón añadido con appendChild";
    document.getElementById("div2").appendChild(boton);
}
function append() {
    var boton = document.createElement("button");
    boton.textContent = "Nuevo botón añadido con appendChild";
    document.getElementById("div3").appendChild(boton);
}



