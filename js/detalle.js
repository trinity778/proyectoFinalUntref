let urlParams = location.search; // acá cargo un string con todos los parametros que se enviaron en la URL del link detalle
console.log(urlParams);
let urlParamsObjet = new URLSearchParams(urlParams); // creo un objeto del tipo urlSerch params con los datos que recibí como parámetro
console.log(urlParamsObjet);
let codigoSeleccionado = urlParamsObjet.get('itemId');
console.log(codigoSeleccionado);
//Captura
let sectionProducto = document.querySelector('#producto');

let productoSeleccionado = JSON.parse(localStorage.getItem("productoSeleccionado"));

const sectionDetalle = document.querySelector(".detalle")
sectionDetalle.innerHTML = `
    <article class="producto" >
        <img class="w-95" src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}">
        <div class="descripcionProducto">
            <h2 class="tituloProducto"">${productoSeleccionado.nombre}</h2>
            <h3> ${productoSeleccionado.precio}</h3>
            <img class="w-95" src="${productoSeleccionado.calificacion}" alt="${productoSeleccionado.calificacion}">
            <hr>
            <h5 class="detalle">${productoSeleccionado.detalle}</h3>
            <button style="margin-top: 5%" class="btn btn-outline-danger d-block">COMPRAR</button>
        </div>
    </article>`
           
