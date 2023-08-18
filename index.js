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


let producto1 = new Producto("Pinceles", 500, "Pinceles para nail art", "1.png");
let producto2 = new Producto("Top coat", 2.000, "Top coat no cleanse. Elimina el pulido. Acabado espejo.", "2.png");
let producto3 = new Producto("Pestañas", 1.800, "Set de pestañas para pxp.", "3.png");
let producto4 = new Producto("Film", 1.100, "Film para servicios de pestañas.", "4.png");
let producto5 = new Producto("Vaso dappen", 800, "Vaso para humedecer pinceles para nail art y distintos usos en manicuria.", "5.png");
let producto6 = new Producto("Cepillo", 1.000, "Cepillo para limpieza de polvo, luego del limado.", "6.png");
let producto7 = new Producto("Aceite", 2.100, "Aceite para cutículas. Restaurador.", "7.png");
let producto8 = new Producto("Aceite IBD", 1.800, "Aceite de lavanda para humectar cutículas.", "8.png");
let producto9 = new Producto("Polygel", 2.500, "Polygel para construccion de esculpidas.", "9.png");
let producto10 = new Producto("Henna", 1.800, "Henna. Ideal para sombreado de cejas.", "10.png");



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

function agregarAlCarrito(productos) {
    localStorage.setItem()
}

generarTarjetas(productos);