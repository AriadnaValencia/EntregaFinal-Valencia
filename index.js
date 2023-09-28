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

async function cargarProductos() {
    try {
      const response = await fetch('productos.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      return [];
    }
  }

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
let cart = [];

if (productToAdd) {
    const existingProduct = cart.find(product => product.nombre === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            id: productToAdd.nombre,
            name: productToAdd.nombre,
            price: productToAdd.precio,
            quantity: 1
        });
    }

    console.log(`Se ha agregado "${productToAdd.nombre}" al carrito.`);
    displayCart();
    saveCartToLocalStorage();

    swal("¡Agregado al carrito!", `Se ha agregado "${productToAdd.nombre}" al carrito.`, "success");
}

//VACIAR EL CARRITO
function clearCart() {
    cart = [];
    console.log('El carrito se ha vaciado.');
    displayCart();
    saveCartToLocalStorage();

    swal("Carrito vaciado", "El carrito se ha vaciado correctamente.", "success");
}

// CARGAR EL CARRITO EN EL LOCALSTORAGE
function loadCartFromLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
        cart = savedCart;
        displayCart();
    }
}

//GUARDAR EL CARRITO EN EL LOCALSTORAGE
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// MOSTRAR EL CARRITO AL INICIAR LA PAG
function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Limpia el contenido previo del carrito

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        // Crear una lista desordenada (ul) para mostrar los productos
        const productList = document.createElement('ul');
        
        cart.forEach(product => {
            // Crear un elemento de lista (li) para cada producto en el carrito
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - Cantidad: ${product.quantity}`;
            
            // Agregar el elemento de lista al contenedor de productos
            productList.appendChild(listItem);
        });
        
        // Agregar la lista de productos al contenedor del carrito
        cartContainer.appendChild(productList);
    }
}


//VACIAR CARRITO 
const clearCartButton = document.getElementById('clear-cart-button');
clearCartButton.addEventListener('click', clearCart);


//EVENTO PARA HACER CLICK EN TODOS LOS BOTONES
const addToCartButtons = document.querySelectorAll('.buttons button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.parentElement.querySelector('.descripcion p:first-child').textContent;
        addToCart(productName);
    });
});
