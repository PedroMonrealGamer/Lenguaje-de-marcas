
function KB(){
    let x = document.getElementById('KB').value
    resultadoKB = x * 1000;
    document.getElementById('solucion').innerHTML = x + ' MB son: ' + resultadoKB + 'KB'
}
document.getElementById("boton_KB").addEventListener("click", KB,false);



function GB(){
    let x = document.getElementById('GB').value
    resultadoGB = x / 1000;
    document.getElementById('solucion').innerHTML = x + ' MB son: ' + resultadoGB + 'GB'
}
document.getElementById("boton_GB").addEventListener("click", GB,false);


function TB(){
    let x = document.getElementById('TB').value
    resultadoTB = x / 1000000;
    document.getElementById('solucion').innerHTML = x + ' MB son: ' + resultadoTB + 'TB'
}
document.getElementById("boton_TB").addEventListener("click", TB,false);