var temp = document.getElementById('temporada');
const d = new Date();
let mes = d.getMonth();
/* mes =+9;  cambio mes para que vean cómo cambian los contenidos*/
if (mes==11 || mes<=1){
    document.body.style.backgroundImage = "url('winter.jpg')";
    temp.innerHTML = "Invierno";
}else if(mes>=2 && mes<=4){
    document.body.style.backgroundImage = "url('spring.jpg')";
    temp.innerHTML = "Primavera";
}else if(mes>=5 && mes<=7){
    document.body.style.backgroundImage = "url('summer.jpg')";
    temp.innerHTML = "Verano";
}else if(mes>=8 && mes<=10){
    document.body.style.backgroundImage = "url('autumn.jpg')";
    temp.innerHTML = "Otoño";
}