// Hacer el GET request desde el cliente
fetch('http://localhost:9000/api/equipos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    mostrar(data);
  })
  .catch(error => {
    console.error('Error al hacer el GET request:', error);
  });


  function mostrar(data) {

    var datos = document.getElementById("datos");

    for(i = 0; i < data.length; i++){
  var boton = document.createElement("button");
  boton.id = i;
  boton.classList.add("actualizarButton");
  boton.textContent="Eliminar";
  var equipo = document.createElement("div");
  var dat = document.createElement("div");
  equipo.classList.add("equipoExistente");
  dat.classList.add("datosEquipo");
  var imageUrl = data[i].fotoEscudo;
  equipo.style.backgroundImage = "url('" + imageUrl + "')";
  
  var nombreEquipo = document.createElement("h1");
  nombreEquipo.textContent = "Nombre equipo: " + data[i].nombreEquipo;
  var nombreEstadio = document.createElement("h1");
  nombreEstadio.textContent = "Nombre estadio: " + data[i].nombreEstadio;
  var capacidadEstadio = document.createElement("h1");
  capacidadEstadio.textContent = "Capacidad estadio: " + data[i].capacidadEstadio;
  var fotoEstadio = document.createElement("img");
  fotoEstadio.src = data[i].fotoEstadio;
  fotoEstadio.classList.add("fotoEstadio");

  datos.appendChild(equipo);
  equipo.appendChild(dat);
  dat.appendChild(boton);
  dat.appendChild(nombreEquipo);
  dat.appendChild(nombreEstadio);
  dat.appendChild(capacidadEstadio);
  dat.appendChild(fotoEstadio);

  boton.addEventListener('click', function(event) {
    var idElemento = event.target.id;
    console.log("El ID del elemento es: " + idElemento);
    var ID = document.getElementById("inputID");
    ID.value=data[idElemento]._id;

    window.scrollTo({
      top: 0,});


});

    }
}
