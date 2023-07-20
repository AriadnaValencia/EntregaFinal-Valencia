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