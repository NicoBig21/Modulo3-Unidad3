/* Ejercicio 1 */

/* let mediosDeTransporte = [
    { transporte: 'pie', recorrido: { min: 0, max: 1000 } },
    { transporte: 'bicicleta', recorrido: { min: 1000, max: 10000 } },
    { transporte: 'colectivo', recorrido: { min: 10000, max: 30000 } },
    { transporte: 'auto', recorrido: { min: 30000, max: 100000 } },
    { transporte: 'avion', recorrido: { min: 100000, max: Infinity } }
]; */

/* let metros = parseInt(prompt('Ingrese los metros de su recorrido: '));

if (metros >= 0 && metros <= 1000) {
    document.write('Tu método de transporte es a pie');
} else if (metros > 1000 && metros <= 10000) {
    document.write('Tu método de transporte es bicicleta');
} else if (metros > 10000 && metros <= 30000) {
    document.write('Tu método de transporte es colectivo');
} else if (metros > 30000 && metros <= 100000) {
    document.write('Tu método de transporte es auto');
} else if (metros > 100000) {
    document.write('Tu método de transporte es avión');
} else {
    document.write('Distancia no válida');
} */

/* MISMO EJERCICIO UTILIZANDO RETURN Y FUNCTION */

/* function elegirTransporte(metros) {
    if (metros >= 0 && metros <= 1000) {
        return 'pie';
    } else if (metros > 1000 && metros <= 10000) {
        return 'bicicleta';
    } else if (metros > 10000 && metros <= 30000) {
        return 'colectivo';
    } else if (metros > 30000 && metros <= 100000) {
        return 'auto';
    } else if (metros > 100000) {
        return 'avion';
    } else {
        return 'Distancia no válida';
    }
}

let metros = parseInt(prompt('Ingrese los metros de su recorrido: '));
let transporte = elegirTransporte(metros);

document.write(`Tu método de transporte es ${transporte}`); */

/* EJERCICIO 2 */

/* let numeros = [1, 2, 32, 23, 5, 78];
let mayor= numeroMayor(numeros)
document.write(`El número mayor es ${mayor}`);

function numeroMayor(numeros) {
    return Math.max(...numeros);
} */

/* UNIDAD 4 */

/* EJERCICIO 1 */

/* function cambiarColor(color) {
    document.body.style.backgroundColor = color;
} */

/* EJERCICIO 2 */

/* function contadorCaracteres() {
    const texto = document.getElementById('texto').value;
    const contador = texto.length;
    document.getElementById('contador').innerText = `${contador} caracteres`;
} */

/* EJERCICIO 3 */

var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

const aprobados= alumnos.filter(alumno => alumno.nota >= 7)

const mensaje = aprobados.map(alumno => `${alumno.nombre} Aprobado`)

console.log(mensaje)