function montar_frase() {
    var divHistoria = document.getElementById("historia");
    var cosa = document.getElementById("cosa").value;
    alert(cosa)
    var adjetivo = document.getElementById("adjetivo").value;
    alert(adjetivo)
    var nombre = document.getElementById("persona").value;
    alert(nombre)
    divHistoria.innerHTML = nombre + " tiene un/una " + cosa + " muy " + adjetivo + "    K fort!";
  }
  
  var boton = document.getElementById('crear');
  boton.addEventListener('click', montar_frase);
  