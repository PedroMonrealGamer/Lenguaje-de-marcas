var datos = {
    "carCollection": "Enthusiastas de Autos Últimos",
    "location": "Ciudad Veloz",
    "founded": 2018,
    "headquarters": "Plaza Velocidad",
    "active": true,
    "cars": [
        {
            "brand": "Ferrari",
            "model": "488 GTB",
            "year": 2022,
            "color": "Rojo",
            "fuelType": "Gasolina",
            "transmission": "Automática",
            "horsepower": 670
        },
        {
            "brand": "Tesla",
            "model": "Model S Plaid",
            "year": 2023,
            "color": "Azul",
            "fuelType": "Eléctrico",
            "transmission": "Dual Motor",
            "horsepower": 1020
        },
        {
            "brand": "Toyota",
            "model": "Prius",
            "year": 2021,
            "color": "Verde",
            "fuelType": "Híbrido",
            "transmission": "CVT",
            "horsepower": 121
        }]
  }


document.getElementById("boton1").addEventListener("click", BOTON1);
var posicion = 0;
function BOTON1(){
var h1 = document.createElement("h1");
h1.textContent = " Marca: " + datos.cars[posicion].brand + " Modelo: " + datos.cars[posicion].model;
var midiv = document.getElementById("datos")
midiv.appendChild(h1);
posicion++;
}