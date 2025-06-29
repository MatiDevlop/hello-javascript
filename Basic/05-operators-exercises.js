/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 1+2
let resta = 5-3
let multiplicacion = 4*2
let division = 8/2
let modulo = 10%3
let potencia = 2**3
let incremento = suma++
let decremento = resta--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let sumaAsig = suma+=5
let restaAsig = resta-=2
let multiplicacionAsig = multiplicacion*=3
let divisionAsig = division/=2
let moduloAsig = modulo%=2
let potenciaAsig = potencia**=2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 3)
console.log(10 < 15)
console.log(4 >= 4)
console.log(6 <= 7)
console.log(8 === 8)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5!=5)
console.log(10 > 15)
console.log(4 < 4)
console.log(6 > 7)
console.log(8 !== 8)

// 5. Utiliza el operador lógico and
let estaSoleado = true
let vaALlover = false
console.log(estaSoleado && !vaALlover)

// 6. Utiliza el operador lógico or
let tieneParaguas = false
let tieneSombrilla = true
console.log(tieneParaguas || tieneSombrilla)

// 7. Combina ambos operadores lógicos
console.log((estaSoleado && !vaALlover) || (tieneParaguas || tieneSombrilla))

// 8. Añade alguna negación
console.log(!(estaSoleado && !vaALlover) && !(tieneParaguas || tieneSombrilla))

// 9. Utiliza el operador ternario
(estaSoleado && !vaALlover) ? console.log("Es un buen día") : console.log("No es un buen día")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let valor1= 10**5
let valor2 = 5+10
let valor3 = 20/4
(valor1 > valor2 && valor3 < 10) ? console.log("La condición se cumple") : console.log("La condición no se cumple")