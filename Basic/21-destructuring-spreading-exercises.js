/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let arreglo = [1,2,3]
let [primero, segundo] = arreglo

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [tercero, cuarto, quinto, sexto = 4] = arreglo

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let materia = {
    nombre: "Ingles V",
    profesor: "Alan Dorado",
    creditos: 2
}
let {nombre,profesor} = materia

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {nombre:nombreMateria,profesor:nombreProfesor} = materia

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
materia["temas"]={
    tema1: "Presentaciones",
    tema2: "Vocabulario básico",
    tema3: "Gramática",
    tema4: "Listening"
}
let {temas:{tema1,tema2}} = materia

// 6. Usa propagación para combinar dos arrays en uno nuevo
let arreglo2 = [4,5,6]
let nuevoArr = [...arreglo, ...arreglo2]

// 7. Usa propagación para crear una copia de un array
let otroArr = [...nuevoArr]

// 8. Usa propagación para combinar dos objetos en uno nuevo
let objetoNuevo = {...materia, ...materia.temas}

// 9. Usa propagación para crear una copia de un objeto
let copiaObjeto = {...materia}

// 10. Combina desestructuración y propagación
let finalArr = [...arreglo, ...arreglo2, ...[primero, segundo]]
console.log(finalArr); // [1, 2, 3, 4, 5, 6, 1, 2]