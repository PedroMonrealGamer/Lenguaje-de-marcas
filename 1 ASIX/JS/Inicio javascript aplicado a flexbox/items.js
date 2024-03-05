function grow(event) {
    tercerdiv.style.flexGrow = "5";
}

function reorder(event) {
    console.log('cambio el orden');
    primerdiv.style.order = '3';
    segundodiv.style.order = '1';
    tercerdiv.style.order = '9';
    cuartodiv.style.order = '5';
    quintodiv.style.order = '7';
    sextodiv.style.order = '2';
    septimodiv.style.order = '4';
    octavodiv.style.order = '8';
    novenodiv.style.order = '6';
    
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

function color(event) {
    cuartodiv.style.backgroundColor = 'red';
}

function alignself(event) {
    contenedor = document.getElementById('container');
    contenedor.style.height = '300px';
    quintodiv.style.alignSelf = 'center';
}
function text(event) {
    novenodiv.style.fontSize = '50px';

}

function tcolor(event) {
    sextodiv.style.color = 'blue';
    sextodiv.style.fontSize = '80px';

    

}

const primerdiv = document.getElementById('1');
const segundodiv = document.getElementById('2');
const tercerdiv = document.getElementById('3');
const cuartodiv = document.getElementById('4');
const quintodiv = document.getElementById('5');
const sextodiv = document.getElementById('6');
const septimodiv = document.getElementById('7');
const octavodiv = document.getElementById('8');
const novenodiv = document.getElementById('9');
const botongrow = document.getElementById('flexgrow');
const botonorder = document.getElementById('flexorder');
const botonshrink = document.getElementById('flexshrink');
const botoncolor = document.getElementById('color');
const botonalignself = document.getElementById('alignself');
const botontext = document.getElementById('text');
const botontcolor = document.getElementById('tcolor');

botongrow.addEventListener('click', grow);
botonorder.addEventListener('click', reorder);
botonshrink.addEventListener('click', shrink);
botoncolor.addEventListener('click', color);
botonalignself.addEventListener('click', alignself);
botontext.addEventListener('click', text);
botontcolor.addEventListener('click', tcolor);
