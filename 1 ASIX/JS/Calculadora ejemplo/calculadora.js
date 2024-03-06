
function cuadrado(){
    let x = document.getElementById('cuadrado').value
    squaredNumber = x * x;
    document.getElementById('solucion').innerHTML = 'El cuadrado de ' + x + ' es: ' + squaredNumber
}
document.getElementById("boton_cuadrado").addEventListener("click", cuadrado,false);


function mitad() {
    let x = document.getElementById('mitad').value
    var mitad = x / 2;
    document.getElementById('solucion').innerHTML = 'La mitad de ' + x + ' es: ' + mitad
}
document.getElementById("boton_mitad").addEventListener("click", mitad,false);


function porcentaje() {
    let x = document.getElementById('porcentaje1').value   
    let y = document.getElementById('porcentaje2').value
    var percent = (x/y) * 100;
    document.getElementById('solucion').innerHTML = x + ' es el ' + Math.round(percent) +'% de ' +y
}

document.getElementById("boton_porcentaje").addEventListener("click", porcentaje,false);


function area() {
    let x = document.getElementById('radio').value  
    var area = Math.PI * x * x;
    document.getElementById('solucion').innerHTML = 'El área de un círculo con radio '+ x + ' es ' + Math.round(area)
}
document.getElementById("boton_area").addEventListener("click", area,false);

 


