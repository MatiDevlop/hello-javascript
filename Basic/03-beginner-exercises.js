/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//Pimer comentario en una línea

// 2. Escribe un comentario en varias líneas
/* Comentario largo 
de varias 
lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = "Hola mundo"
let numero = 789.147
let booleano = true
let indefinido
let nulo = null
let simbolo = Symbol("simbolo")
let enteroGrande = 157894568879876231899999999999n

// 4. Imprime por consola el valor de todas las variables
console.log(cadena)
console.log(numero)
console.log(booleano)
console.log(indefinido)
console.log(nulo)
console.log(simbolo)
console.log(enteroGrande)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof cadena)
console.log(typeof numero)
console.log(typeof booleano)
console.log(typeof indefinido)
console.log(typeof nulo)
console.log(typeof simbolo)
console.log(typeof enteroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
cadena = "Adiós mundo"
numero = 123.456
booleano = false
indefinido = undefined
nulo = null
simbolo = Symbol("nuevo simbolo")
enteroGrande = 987654321234567890123456789n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
cadena = 123
numero = 'Hola, soy yo'
booleano = null
indefinido = true
nulo = Symbol("symbolNull")
simbolo = undefined
enteroGrande = "3.879"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nCadena = "Hola Matias"
const nNumero = 456.789
const nBooleano = false
const nIndefinido = undefined
const nNulo = null
const nSimbolo = Symbol("nuevo simbolo constante")
const nEnteroGrande = 123456789012345678901234567890n

// 9. A continuación, modifica los valores de las constantes
/*nCadena = "Adios" 
nNumero = 987.654 
nBooleano = true 
nIndefinido = null 
nNulo = "No es nulo" 
nSimbolo = Symbol("otro simbolo") 
nEnteroGrande = 987654321098765432109876543210n */

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/* las variables con const no pueden ser re-asignadas
nCadena = "Adios" 
nNumero = 987.654 
nBooleano = true 
nIndefinido = null 
nNulo = "No es nulo" 
nSimbolo = Symbol("otro simbolo") 
nEnteroGrande = 987654321098765432109876543210n */