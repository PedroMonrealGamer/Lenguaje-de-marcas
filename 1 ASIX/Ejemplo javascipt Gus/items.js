function grow(event) {
    tercerdiv.style.flexGrow = "5";
}

function reorder(event) {
    console.log('reordeno');
    primerdiv.style.order = '8';
    segundodiv.style.order = '6';
    tercerdiv.style.order = '2';
    cuartodiv.style.order = '1';
    quintodiv.style.order = '3';
    sextodiv.style.order = '5';
    septimodiv.style.order = '9';
    octavodiv.style.order = '4';
    novenodiv.style.order = '7';
}

function shrink(event) {
    let miarraydedivs = document.getElementById('container').querySelectorAll('div');
    segundodiv.style.flexShrink = '0';
    for (let i = 0; i < 9; i++) {
        console.log(i);
        console.log(miarraydedivs[i]);
        miarraydedivs[i].style.width = '250px';
    }
}

function basis(event) {
    cuartodiv.style.flexBasis = '400px';
}

function alignself(event) {
    contenedor = document.getElementById('container');
    contenedor.style.height = '300px';
    quintodiv.style.alignSelf = 'center';
}

const primerdiv = document.getElementById('primero');
const segundodiv = document.getElementById('segundo');
const tercerdiv = document.getElementById('tercero');
const cuartodiv = document.getElementById('cuarto');
const quintodiv = document.getElementById('quinto');
const sextodiv = document.getElementById('sexto');
const septimodiv = document.getElementById('septimo');
const octavodiv = document.getElementById('octavo');
const novenodiv = document.getElementById('noveno');
const botongrow = document.getElementById('flexgrow');
const botonorder = document.getElementById('flexorder');
const botonshrink = document.getElementById('flexshrink');
const botonbasis = document.getElementById('flexbasis');
const botonalignself = document.getElementById('alignself');
botongrow.addEventListener('click', grow);
botonorder.addEventListener('click', reorder);
botonshrink.addEventListener('click', shrink);
botonbasis.addEventListener('click', basis);
botonalignself.addEventListener('click', alignself);
