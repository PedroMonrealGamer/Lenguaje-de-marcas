function montar_frase() {
  var minombre = document.getElementById("minombre").value;
  var miedad = document.getElementById("miedad").value;
  var nombreamigo = document.getElementById("nombreamigo").value;
  var edadamigo = document.getElementById("edadamigo").value;
  var divresultado = document.getElementById("resultado");
  
  divresultado.innerHTML = minombre + " tiene " + miedad + " años y " + nombreamigo + " tiene " + edadamigo + " años, ¿quién es mayor?";
}

var boton = document.getElementById('crear');
boton.addEventListener('click', montar_frase);
