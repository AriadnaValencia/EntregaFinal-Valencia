//SEGUNDA PREENTREGA


  class Producto {
    constructor(nombre, precio, cantidad, categoria, id) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.categoria = categoria;
      this.id = id;
    }
  }

  //ARRAY VACÍO
  const productos = [];

let producto1 = new Producto ('Esmaltes', 1800, 80, 'Manicuria', 1);
let producto2 = new Producto ('Repujadores', 1100, 50, 'Herramientas', 2);
let producto3 = new Producto ('Limas', 400, 150, 'Herramientas', 3);
let producto4 = new Producto ('Shampoo', 1650, 15, 'Peluquería', 4);
let producto5 = new Producto ('Acondicionador', 1800, 30, 'Peluquería', 5);

agregarProducto(producto1)
agregarProducto(producto2)
agregarProducto(producto3)
agregarProducto(producto4)
agregarProducto(producto5)

  let productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

//PROCEDIMIENTO DE COMPRA

const seleccionDeProducto = prompt('Hola! Para realizar su compra, puede elegir entre los siguientes productos: esmaltes, repujadores, limas, shampoo y acondicionadores');


const productoSeleccionado = productos.find((producto) => producto.nombre === productoSeleccionado);


function comprarProducto(nombreProducto) {
  const productoEncontrado = productos.find((producto) => producto.nombre === nombreProducto);
  if (productoEncontrado) {
    const precioProducto = productoEncontrado.precio;
    alert(
      `El producto "${productoEncontrado.nombre}" está preparado para ir a tu domicilio.` +
      `Costo: $${precioProducto}` +
      `¡Gracias por tu compra! Vuelva prontos`
    );
  } else {
    alert('El producto seleccionado no está disponible en nuestra tienda.');
  }
}




