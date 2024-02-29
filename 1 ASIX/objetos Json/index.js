function ej1(){
    var usuario = {name:"Pedro", surname:"Monreal", age:"19"}
    document.getElementById('pej1').textContent = (usuario)
}

function ej2(){
    var usuario = {name:"Pedro", surname:"Monreal", age:"19"}
    document.getElementById('pej2').textContent = (usuario.name + ',' + usuario.surname + ',' + usuario.age)
}

function ej3(){
    var usuario = {name:"Pedro", surname:"Monreal", age:"19"}
    var x, txt = ""
     for (x in usuario) {
        txt += usuario[x];
        if(x != "age"){
            txt += ", ";}
            else
            {}
    };
    document.getElementById('pej3').textContent = (txt)
}

function ej4(){
    var usuario = {name:"Pedro", surname:"Monreal", age:"19"}
    var usuarioarray
    usuarioarray = (Object.values(usuario))
    document.getElementById('pej4').textContent = (usuarioarray)
}


function ej5(){
    const miObj = {
    nombre: "Gus",
    edad: 47,
    novias: {
    novia1: "Esther",
    novia2: "Úrsula",
    novia3: "Xisca"
     }
  }
document.getElementById('pej5').textContent = (miObj.novias.novia3)
}

function ej6(){
    const miObj = {
        nombre: "Gus",
        edad: 46,
        bandas: [
            {name:"Pixies", songs:["Wave of Mutilation", "Where is my mind", "Tame"]},
            {name:"The Strokes", songs:["Last Nite, You only live once", "Someday"]},
            {name:"Morcheeba", songs:["Part of the process", "Otherwise"]}
             ]
            }
            for (i = 0; i < 3; i++){
                var p = document.createElement("p");
                p.textContent = (miObj.bandas[i].name + ": " + miObj.bandas[i].songs)
                document.getElementById("div6").appendChild(p)
            }
        }

function ej7(){
const ciclista ={
    nombre: "Primoz",
    apellido: "Roglic",
    altura: "180cm",
    peso: "60kg",
    nombreEntero : function() {
        return this.nombre + " " + this.apellido + " mide " + this.altura + " y pesa " + this.peso;
        
    }
}
document.getElementById('pej7').textContent = (ciclista.nombreEntero())
}


function ej8() {
    const ciclista = {
        nombre: "Primoz",
        apellido: "Roglic",
        altura: "180cm",
        peso: "60kg",
    }

    document.getElementById('pej8').textContent = JSON.stringify(ciclista);
}
