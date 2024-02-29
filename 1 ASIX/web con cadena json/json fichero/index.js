var datos;
fetch('data.json') 
 .then(response => response.json())
 .then(data => muestradatos(data))

function muestradatos(hola) {
  var divprincipal = document.getElementById("div1");

  hola.cars.forEach(car => {

    var div = document.createElement("div");

    div.classList.add("divnuevo");

    var elementoMarca = document.createElement("p");
    elementoMarca.textContent = "Marca: " + car.brand;
    div.appendChild(elementoMarca);

    var elementoModelo = document.createElement("p");
    elementoModelo.textContent = "Modelo: " + car.model;
    div.appendChild(elementoModelo);

    var elementoaño = document.createElement("p");
    elementoaño.textContent = "Año: " + car.year;
    div.appendChild(elementoaño);

    var elementocolor = document.createElement("p");
    elementocolor.textContent = "Color: " + car.color;
    div.appendChild(elementocolor);

    var elementocombustible = document.createElement("p");
    elementocombustible.textContent = "Combustible: " + car.fuelType;
    div.appendChild(elementocombustible);
    
    var elementotransmision = document.createElement("p");
    elementotransmision.textContent = "Transmisión: " + car.transmission;
    div.appendChild(elementotransmision);

    var elementocaballos = document.createElement("p");
    elementocaballos.textContent = "Caballos de potencia: " + car.horsepower;
    div.appendChild(elementocaballos);


    divprincipal.appendChild(div);
  });
}

