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


  //5 OBJETOS

const producto1 = new Producto('Esmaltes', 1800, 80, 'Manicuria', 1);
const producto2 = new Producto('Repujadores', 1100, 50, 'Herramientas', 2);
const producto3 = new Producto('Limas', 400, 150, 'Herramientas', 3);
const producto4 = new Producto('Shampoo', 1650, 15, 'Peluquería', 4);
const producto5 = new Producto('Acondicionador', 1800, 30, 'Peluquería', 5);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);


productos.sort((a, b) => a.nombre.localeCompare(b.nombre));


console.log(productos);

//PROCEDIMIENTO DE COMPRA

const seleccionDeProducto = prompt('Hola! Para realizar su compra, puede elegir entre los siguientes productos:');


const productoSeleccionado = productos.find((producto) => producto.nombre === productoSeleccionado);


if (productoSeleccionado) {
  alert(
    `El producto "${productoSeleccionado.nombre}" está preparado para ir a tu domicilio.` +
    `Costo: $${productoSeleccionado.precio}` +
    `¡Gracias por tu compra! Vuelva prontos`
  );

} else {
  alert('El producto seleccionado no está disponible en nuestra tienda.');
}




