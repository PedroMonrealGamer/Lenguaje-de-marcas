function cambia() {
    var num = Math.floor(Math.random() * fotos.length);
    document.getElementById('imagen').src = fotos[num];
    document.getElementById('demo').style.display = 'block';
}

var fotos = [
    'p1.png',
    'p2.png',
    'p3.png'
];

function colores() {
    var colorIndex = Math.floor(Math.random() * coloresArray.length);
    document.getElementById('colores').style.color = coloresArray[colorIndex];
}

var coloresArray = [
    'red',
    'blue',
    'black',
    'yellow',
    'purple',
];
