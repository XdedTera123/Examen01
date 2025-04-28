const btnMostrarOcultar = document.getElementById("myc")
const btonAñadir = document.getElementById("botonañadir")
const listaDeso = document.getElementById("listadeso")
const textoAñadido = document.getElementById("texto")

function parrafoMostarOcultar() {
    if (listaDeso.style.display === "block") {
        listaDeso.style.display = "none";
    } else {
        listaDeso.style.display = "none";
        listaDeso.style.display = "block";
    }
}


function añadirElemento(){
    const agregarli = document.createElement("li");
    agregarli.textContent = textoAñadido.value;
    listaDeso.appendChild(agregarli);
}

btonAñadir.addEventListener("click",añadirElemento)
btnMostrarOcultar.addEventListener("click",parrafoMostarOcultar)  