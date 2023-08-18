//PRODUCTOS
const productos = [
    {
        nombre: "Producto 1",
        precio: 500,
        descripcion: "Pinceles para nail art.",
        imagen: "1.png"
    },
    {
        nombre: "Producto 2",
        precio: 2.000,
        descripcion: "Top coat no cleanse. Elimina el pulido. Acabado espejo.",
        imagen: "2.png"
    },
    {
        nombre: "Producto 3",
        precio: 1.800,
        descripcion: "Set de pestañas para pxp.",
        imagen: "3.png"
    },
    {
        nombre: "Producto 4",
        precio: 1.100,
        descripcion: "Film para servicios de pestañas.",
        imagen: "4.png"
    },
    {
        nombre: "Producto 5",
        precio: 800,
        descripcion: "Vaso para humedecer pinceles para nail art y distintos usos en manicuria.",
        imagen: "5.png"
    },
    {
        nombre: "Producto 6",
        precio: 1.000,
        descripcion: "Cepillo para limpieza de polvo, luego del limado.",
        imagen: "6.png"
    },
    {
        nombre: "Producto 7",
        precio: 2.100,
        descripcion: "Aceite para cutículas. Restaurador.",
        imagen: "7.png"
    },
    {
        nombre: "Producto 8",
        precio: 1.800,
        descripcion: "Aceite de lavanda para humectar cutículas.",
        imagen: "8.png"
    },
    {
        nombre: "Producto 9",
        precio: 2.500,
        descripcion: "Polygel para construccion de esculpidas.",
        imagen: "9.png"
    },
    {
        nombre: "Producto 10",
        precio: 1.800,
        descripcion: "Henna. Ideal para sombreado de cejas.",
        imagen: "10.png"
    }
];

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
        const productosContainer = document.getElementById("productos-container");
    
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
