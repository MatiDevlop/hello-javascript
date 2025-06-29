/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let valor = 1; valor<=20; valor++){
    console.log(valor)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let contador = 0
for(let valor = 1; valor<=100; valor++){
    contador += valor
}
console.log("El total es "+contador)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let valor =1; valor<=50; valor++){
    if(valor % 2 == 0){
        console.log(valor)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let arreglo = ["Ana", "Luis", "Pedro", "María", "Juan"];
for (let nombre of arreglo){
    console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let arr = ["A", "E", "I", "O", "U"];
let cadena = "Hola, ¿cómo estás?";
let contadorVocales = 0;
for (let nombre of cadena) {
    if (arr.includes(nombre.toUpperCase())) {
        contadorVocales++;
    }
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let total = 1;
let numeros = [2, 3, 4, 5];
while(numeros.length !=0){
    total*=numeros.pop();
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i<=12; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let myString = "JavaScript";
let reversa = ""
for(let i=0; i<myString.length; i++){
    reversa+=myString[myString.length - 1 - i];
}
console.log(reversa);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0, b = 1;

for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosArray = [5, 12, 8, 20, 3, 15];
let mayoresA10 = [];
for (let numero of numerosArray) {
    if (numero > 10) {
        mayoresA10.push(numero);
    }
}