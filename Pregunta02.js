const btnSumar = document.getElementById("suma")
const btnRestar = document.getElementById("resta")
const btnMulti = document.getElementById("multiplicacion")
const btnDivi = document.getElementById("division")
const nro1 = document.getElementById("nro1")
const nro2 = document.getElementById("nro2")
let resultado = document.getElementById("resul")

function sumarNumeros(){
    let numero1 = parseInt(nro1.value);
    let numero2 = parseInt(nro2.value);
    const suma = numero1 + numero2;
    resultado.value = suma;
}

function restarNumeros(){
    let numero1 = parseInt(nro1.value);
    let numero2 = parseInt(nro2.value);
    const resta = numero1 - numero2;
    resultado.value = resta;
}

function mulNumeros(){
    let numero1 = parseInt(nro1.value);
    let numero2 = parseInt(nro2.value);
    const multiplicacion = numero1 * numero2;
    resultado.value = multiplicacion;
}

function divNumeros(){
    let numero1 = parseInt(nro1.value);
    let numero2 = parseInt(nro2.value);
    const division = numero1 / numero2;
    resultado.value = division;
}

btnSumar.addEventListener("click",sumarNumeros)
btnRestar.addEventListener("click",restarNumeros)
btnMulti.addEventListener("click",mulNumeros)
btnDivi.addEventListener("click",divNumeros)