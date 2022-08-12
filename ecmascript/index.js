// function nombreConcatenado(nombre, apellido) {
//   var primerNombre = nombre || 'Escriba un nombre';
//   var primerApellido = apellido || 'Escriba un apellido';

//   return primerNombre +' '+primerApellido;
// }

// console.log(nombreConcatenado("Víctor", "Reyes"));

// function nombreConcatenado(
//   nombre = "Escriba un nombre",
//   apellido = "Escriba un apellido"
// ) {
//   return nombre + " " + apellido;
// }

// console.log(nombreConcatenado("Víctor", "Reyes"));

// var nombre = "Víctor";
// var apellido = "Reyes"

// console.log(nombre + " Manuel " + apellido + " Alvarenga")
// // ${variables}
// console.log(`${nombre} Manuel ${apellido} Alvarenga`)

// var textoLargo = "Hola mi nombre es Víctor y estoy aprendiendo a programar. \nY tengo 36 años"

// var textoLargo = `Hola mi nombre es Víctor y estoy aprendiendo a programar.
// Y tengo 36 años`

// console.log(textoLargo)

// var elemento = `
// <p>
//   Mi párrafo
// </p>
// `

// var var1 = {} // Object
// var var2 = [] // Array

// var diasDeLaSemana = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Jueves',
//   'Viernes',
// ]

// console.log(diasDeLaSemana[1])

// var tareas = {
//   lunes: {
//     finalizadas: false,
//     total: 20,
//   },
//   martes: {
//     finalizadas: false,
//     total: 20,
//   },
//   miercoles: {
//     finalizadas: false,
//     total: 20,
//   },
//   jueves: {
//     finalizadas: false,
//     total: 20,
//   },
//   viernes: {
//     finalizadas: false,
//     total: 20,
//   },
// };

// // console.log(tareas)
// // console.log(tareas.miercoles.total)
// // console.log(tareas['miercoles'].total)

// var { lunes, martes, miercoles, jueves, viernes } = tareas;

// console.log(jueves.finalizadas);
// console.log(viernes.finalizadas);

// var personaje = {
//   name: "Vegeta",
//   level: 8000,
//   breed: "saiyajin",
//   planet: "Vegeta",
// };

// // spread operator

// var vegeta = {
//   ...personaje,
//   season: [1,2,3,4,5]
// }

// console.log(personaje)
// console.log(vegeta)

// var array1 = [1, 2, 3, 4, 5];
// var array2 = ["a", "b", "c", "d"];

// // var arrayNuevo = array1 + array2 // Incorrecto

// var arrayNuevo = [...array1, ...array2]

// console.log(arrayNuevo)

// // Backstick con Alt+96

// {
//   // scope    
// }


// let a = 5
// function miFuncion() {
//   let a = 8
//   a = 90
//   const b = 67
//   b = 85

//   console.log(a)
//   console.log(b)
//   // scope  
// }

// console.log(a)
// miFuncion()

// function miFuncion () {
//   return 'Mi función'
// }

// const miFuncion = () => {}

// const miFuncion = () => {
//   return 'Mi función'
// }

// const miFuncion = () => ('Mi función')

// const miFuncion = (param) => {
//   return param
// }

// const miFuncion = param =>  param
  
// const miFuncion = (num1, num2) => {
//   let suma = num1 + num2
//   return suma
// }

// console.log(miFuncion(1, 2))