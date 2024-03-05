var fecha_actual = new Date();
var dia = fecha_actual.getDay();
console.log(fecha_actual);
console.log(dia);
var nombreDia;

switch (dia) {
  case 1:
    nombreDia = 'Lunes';
    break;
  case 2:
    nombreDia = 'Martes';
    break;
  case 3:
    nombreDia = 'Miércoles';
    break;
  case 4:
    nombreDia = 'Jueves';
    break;
  case 5:
    nombreDia = 'Viernes';
    break;
  case 6:
    nombreDia = 'Sábado';
    break;
  case 0:
    nombreDia = 'Domingo';
    break;
  default:
    nombreDia = 'Día no válido';
}

document.getElementById('nombre').textContent = "Hoy es " + nombreDia;
