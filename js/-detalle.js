let urlParams = location.search; // acá cargo un string con todos los parametros que se enviaron en la URL del link detalle
console.log(urlParams);
let urlParamsObjet = new URLSearchParams(urlParams); // creo un objeto del tipo urlSerch params con los datos que recibí como parámetro
console.log(urlParamsObjet);
let codigoSeleccionado = urlParamsObjet.get('itemId');
console.log(codigoSeleccionado);
//Captura
let sectionProducto = document.querySelector('#producto');

fetch('../datos/productos.json')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((productos) => {
        console.log(productos) // [{}, {}, {}]
        // console.log(productos.codigo);

        for (let i = 0; i < productos.length; i++) {
            // i es un numero
            // console.log(productos[i].codigo);
            if (productos[i].codigo == codigoSeleccionado) {
                // console.log("ENTRE AL IF");
                // console.log(productos[i]);
                // console.log(productos[i].nombre);
                // console.log(productos[i].precio);
                // console.log(productos[i].imagen);
                const sectionDetalle = document.querySelector(".detalle")
                sectionDetalle.innerHTML += `
                <article class="producto" >
                <img class="w-95" src="${productos[i].imagen}" alt="${productos[i].nombre}">
                <div class="descripcionProducto">
                <h2 class="tituloProducto"">${productos[i].nombre}</h2>
                <h3> ${productos[i].precio}</h3>
                <img class="w-95" src="${productos[i].calificacion}" alt="${productos[i].calificacion}">
                <hr>
                <h5 class="detalle">${productos[i].detalle}</h3>
                <button style="margin-top: 5%" class="btn btn-outline-danger d-block">COMPRAR</button>
                </div>
                </article>
                `
            }
        };
    })
    .catch((error) => {
        console.log('Ufff ha ocurrido un error ' + error)
    })
 

