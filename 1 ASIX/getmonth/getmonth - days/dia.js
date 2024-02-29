var fecha_actual = new Date();
var dia = fecha_actual.getDay();
console.log("Número del día de la semana:", dia);
var arrayvar = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];
document.getElementById('nombre').textContent = arrayvar[dia - 1];
