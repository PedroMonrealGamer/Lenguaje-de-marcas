const grupos = {
  nombre: "Gus",
  edad: 47,
  bandas: [
    { name: "Pixies", songs: ["Wave of Mutilation", "Where is my mind", "Tame"] },
    { name: "The Strokes", songs: ["Last Nite", "You only live once", "Someday"] },
    { name: "Morcheeba", songs: ["Part of the process", "Otherwise"] }
  ]
}

document.getElementById("cajashow").addEventListener("mouseover", mostrar);

var pos = 0;
var veces = 0;

function mostrar() {
    var textoinicio = document.getElementById("datosiniciales")
    textoinicio.textContent= " ";
  // Obtener el div cajadatos fuera del bucle
  var divcajadatos = document.getElementById("divcajadatos");
    divcajadatos = document.createElement("div");
    divcajadatos.classList.add("divcajadatos");
    var divexterior = document.getElementById("cajadatos")
    divexterior.appendChild(divcajadatos);

  // Para cada grupo ejecutamos la función
  for (posgrupo = 0; posgrupo < grupos.bandas.length; posgrupo++) {
    // Añadimos nombre y div donde irá el resto
    var nombreprincipal = document.createElement("h1");

    divcajadatos.appendChild(nombreprincipal);

    // Creamos div para las canciones
    var divsecundario = document.createElement("div");
    divsecundario.classList.add("divsecundario");
    var name = document.createElement("h2");
    name.textContent = grupos.bandas[pos].name;
    divsecundario.appendChild(name);

    divcajadatos.appendChild(divsecundario);

    for (cancion = 0; cancion < grupos.bandas[pos].songs.length; cancion++) {
      // Bucle para cada canción
      var divsong = document.createElement("div");
      divsong.classList.add("divsong");

      divsecundario.appendChild(divsong);

      var nombretit1 = document.createElement("h3");
      nombretit1.textContent = grupos.bandas[pos].songs[cancion];
      divsong.appendChild(nombretit1);
    }
    pos++;
  }
}
