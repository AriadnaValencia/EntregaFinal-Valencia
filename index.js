//EJERCICIO 1

//PEDIDO DE MAIL
var email = prompt("Ingrese tu correo electrónico:");

//VALIDAR MAIL
//IDENTIFICAR SI EL MAIL CONTIENE UNA @ PARA SER VALIDO
function validarEmail(email) {

  for (var i = 0; i < email.length; i++) {

    if (email[i] === "@") {

      return true;
    }
  }

  return false;
}


if (validarEmail(email)) {
  alert("Es válido.");
} else {
  alert("Es inválido.");
}


//EJERCICIO 2

//AVISO PARA INGRESAR NRO DE CELULAR
var telefono = prompt("Ingrese su número de celular:");


var contadorCaracteres = 0;


for (var i = 0; i < telefono.length; i++) {
  contadorCaracteres++;
}

//VALIDAR SI EL NRO TIENE 10 CARACTERES PARA QUE SEA VÁLIDO
if (contadorCaracteres === 10) {

  alert("Su teléfono ingresado es válido.");
} else {

  alert("Su teléfono ingresado es inválido.");
}


//EJERCICIO 3

function sumarNumerosParesEImpares() {
    let numeroMinimo = Number(prompt("Ingrese un número mínimo:"));
    let numeroMaximo = Number(prompt("Ingrese un número máximo:"));
  
    let sumaPares = 0;
    let sumaImpares = 0;
  
    for (let i = numeroMinimo; i <= numeroMaximo; i++) {
      if (i % 2 === 0) {
        // Número par
        sumaPares += i;
      } else {
        // Número impar
        sumaImpares += i;
      }
    }
  
    alert("La suma de todos los números pares da " + sumaPares + " número");
    alert("La suma de todos los números impares da " + sumaImpares + " número");
  }

  sumarNumerosParesEImpares();


//EJERCICIO 4

function NumerosParesEImpares() {
    for (let i = 100; i <= 250; i++) {

      if (i % 2 === 0) {

        const raizCuadrada = Math.sqrt(i);

        console.log(`La raíz cuadrada de ${i} es ${raizCuadrada}`);

      }
    }
  }

  NumerosParesEImpares();



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



  function agregarProducto(nombre, precio, categoria, stock) {
    const producto = new Producto(nombre, precio, categoria, id);
    productos.push(producto);
  }


  function ordenarProductosPorNombre() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }


  //MIS PRODUCTOS

nuevosProductos ('Esmaltes', 1800, 80, 'Manicuria', 1);
nuevosProductos ('Repujadores', 1100, 50, 'Herramientas', 2);
nuevosProductos ('Limas', 400, 150, 'Herramientas', 3);
nuevosProductos ('Shampoo', 1650, 15, 'Peluquería', 4);
nuevosProductos ('Acondicionador', 1800, 30, 'Peluquería', 5);


ordenarProductosPorNombre();


//PROCEDIMIENTO DE COMPRA

const seleccionDeProducto = prompt('Hola! Para realizar su compra, puede elegir entre los siguientes productos:');


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




