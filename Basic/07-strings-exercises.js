/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Hola";
let cadena2 = "Mundo";
console.log(cadena1 + " " + cadena2);

// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length);

// 3. Muestra el primer y último carácter de un string
console.log("Primer carácter:", cadena1[0]);
console.log("Último carácter:", cadena1[cadena1.length-1]);

// 4. Convierte a mayúsculas y minúsculas un string
let mayusculas = cadena1.toUpperCase();
let minusculas = cadena1.toLowerCase();

// 5. Crea una cadena de texto en varias líneas
let cadena3 = `esta es la cadena        
            de varias lineas`

// 6. Interpola el valor de una variable en un string
console.log(`Mi primera linea de codigo es: ${cadena1} ${cadena2}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena4 = "Hola me llamo Matias"
let reemplazo = cadena4.replace(/ /g,"-")
console.log(reemplazo);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena4.includes("Matias"));

// 9. Comprueba si dos strings son iguales
console.log(cadena1 === cadena2);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena1.length === cadena2.length);