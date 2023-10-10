//FETCH - Es un recurso que se puede usar del lado del front o back, recurso por excelencia para trabajar con APIS , para programar consumo de APIS. 
// Comportamiento asincrónico => vas a una base de datos y le pides datos, uno no sabe cuando le va a mandar, se hace una petición pero no se sabe cuando los va a devolver. Cuando tiene la respuesta se procesan.
// UNA PROMESA => es una petición que no sabes cuando te va a responder.
// API => Lo que está detrás es una base de datos. Se genera con ella un endpoint o una URL que me va a devolver esos datos, me los devuelve en un archivo en formato JSON
// Plugging => es una funcionalidad específica que se incorpora a tu proyecto, una extensión. Bloque de código que hace una tarea específica ej un Calendario, un carrito de compras. SMS ej: Wordpress.

// Capturar el elemento UL 
let productosHTML = document.querySelector(".productos");


// Leer el archivo en formato JSON

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <article class="productos col-12 col-md-6 col-lg-3">
            <img class="w-100 card" src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <h4>${producto.precio}</h4>
            <a href="./detalle.html?codigo=${producto.codigo}" style="text-transform: uppercase;" class="btn btn-outline-danger d-block">${producto.boton}</a>
        </article>`
    });
    
})
.catch((error)=>{
    console.log('Ha ocurrido un error'+ error)
})




