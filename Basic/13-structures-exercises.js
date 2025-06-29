/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let arreglo = ["Perro", "Gato", "Elefante", "Tigre", "León"]

// 2. Añade dos más. Uno al principio y otro al final
arreglo.unshift("Lobo")
arreglo.push("Jirafa")

// 3. Elimina el que se encuentra en tercera posición
arreglo.splice(2, 1)

// 4. Crea un set que almacene cinco libros
let mySet = new Set([
    "Cien años de soledad",
    "El amor en los tiempos del cólera",
    "Crónica de una muerte anunciada",
    "El otoño del patriarca",
    "El general en su laberinto"
])


// 5. Añade dos más. Uno de ellos repetido
mySet.add("El amor en los tiempos del cólera")
mySet.add("El túnel")

// 6. Elimina uno concreto a tu elección
mySet.delete("El túnel")

// 7. Crea un mapa que asocie el número del mes a su nombre
let calendario = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (calendario.has(5)) {
    console.log(`El mes número 5 es: ${calendario.get(5)}`)
}
else {
    console.log("El mes número 5 no existe en el calendario.")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
calendario.set("Verano", ["Junio", "Julio", "Agosto"])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arr = ["JavaScript", "Python", "Java", "C++", "JavaScript"];
let conjunto = new Set(arr);
let mapConjunto = new Map([["Lenguajes", conjunto]]);
console.log(mapConjunto);