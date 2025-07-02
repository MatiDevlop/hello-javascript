/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let materia = {
    nombre: "Ingles V",
    profesor: "Alan Dorado",
    creditos: 2
}

// 2. Accede y muestra su valor
console.log(materia.nombre)
console.log(materia.profesor)
console.log(materia.creditos)

// 3. Agrega una nueva propiedad
materia["modalidad"]="presencial"

// 4. Elimina una de las 3 primeras propiedades
delete materia.creditos

// 5. Agrega una función e invócala
materia["mostrarDescripcion"] = () => {
    console.log(`La materia ${materia.nombre} es impartida por ${materia.profesor} y es de modalidad ${materia.modalidad}.`)
}
materia.mostrarDescripcion()

// 6. Itera las propiedades del objeto
for (let key in materia) {
    console.log(`${key}: ${materia[key]}`);
}

// 7. Crea un objeto anidado
materia["temas"]={
    tema1: "Presentaciones",
    tema2: "Vocabulario básico",
    tema3: "Gramática",
    tema4: "Listening"
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(materia.temas.tema1)
console.log(materia.temas.tema2)
console.log(materia.temas.tema3)
console.log(materia.temas.tema4)

// 9. Comprueba si los dos objetos creados son iguales
console.log(materia === materia.temas)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(materia.nombre === materia.temas.tema1)