const productosContainer = document.getElementById("productos-container");

//PRODUCTOS
class Producto {
    constructor(nombre, precio, descripcion, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

let listaDeProductos = [];

const productos = [
    new Producto("Pinceles", 500, "Pinceles para nail art", "./assets/productos/1.png"),
    new Producto("Top coat", 2000, "Top coat no cleanse. Elimina el pulido. Acabado espejo.", "./assets/productos/2.png"),
    new Producto("Pestañas", 1800, "Set de pestañas para pxp.", "./assets/productos/3.png"),
    new Producto("Film", 1100, "Film para servicios de pestañas.", "./assets/productos/4.png"),
    new Producto("Vaso dappen", 800, "Vaso para humedecer pinceles para nail art y distintos usos en manicuria.", "./assets/productos/5.png"),
    new Producto("Cepillo", 1000, "Cepillo para limpieza de polvo, luego del limado.", "./assets/productos/6.png"),
    new Producto("Aceite", 2100, "Aceite para cutículas. Restaurador.", "./assets/productos/7.png"),
    new Producto("Aceite IBD", 1800, "Aceite de lavanda para humectar cutículas.", "./assets/productos/8.png"),
    new Producto("Polygel", 2500, "Polygel para construccion de esculpidas.", "./assets/productos/9.png"),
    new Producto("Henna", 1800, "Henna. Ideal para sombreado de cejas.", "./assets/productos/10.png"),
]

//TARJETAS DE PRODUCTOS
productos.forEach(producto => {
    const productoCard = document.createElement("div");
    productoCard.className = "producto-card";

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    productoCard.appendChild(imagen);
    productoCard.appendChild(nombre);
    productoCard.appendChild(precio);

    productosContainer.appendChild(productoCard);
});

//FUNCION PARA AGREGAR AL CARRITO
function generarTarjetas(productos) {
    const productosHTML = productos.reduce((acumulador, producto) => {
        const productoCard = document.createElement("div");
        productoCard.className = "producto-card";

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const nombre = document.createElement("h2");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio.toFixed(2)}`;

        const botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Agregar al Carrito";
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto);
        });

        productoCard.appendChild(imagen);
        productoCard.appendChild(nombre);
        productoCard.appendChild(precio);
        productoCard.appendChild(botonAgregar);

        return acumulador + productoCard.outerHTML;
    }, "");

    productosContainer.innerHTML = productosHTML;
}

function agregarAlCarrito(producto) {
    localStorage.setItem()
}

generarTarjetas(productos);