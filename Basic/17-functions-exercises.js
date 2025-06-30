/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a+b
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function maximo(arr){
    let max = arr[0]
    for (let i=1;i<arr.length;i++){
        if (arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let vocales = ['a', 'e', 'i', 'o', 'u'];
const contadorVocales = (cadena) => {
    let contador = 0
    for (let caracter of cadena){
        if (vocales.includes(caracter.toLowerCase())){
            contador++
        }
    }
    return contador
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const convertirAMayusculas = function (arr){
    let nuevoArray=[]
    for (let i=0; i<arr.length; i++){
        nuevoArray.push(arr[i].toUpperCase());
    }
    return nuevoArray
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const esPrimo = (numero) => {
    for(let i=2;i<=Math.round(numero/2);i++){
        if(numero % i == 0){
            return false; // No es primo
        }
    }
    return true;
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const elementosComunes = (arr1,arr2) => {
    let newArr = []
    for (let i=0; i<arr1.length; i++){
        if (arr2.includes(arr1[i])){
            newArr.push(arr1[i])
        }
    }
    return newArr
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumaPares = (arr) => {
    let suma = 0
    for(let valor of arr){
        if (valor %2 == 0){
            suma+=valor
        }
    }
    return suma
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const elevacionNumeros = function(arr){
    let newArr = []
    for (let valor of arr){
        newArr.push(valor ** 2)
    }
    return newArr
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirCadena(cadena){
    let reversa = "" 
    for(let i=0; i<cadena.length; i++){
        reversa+=cadena[cadena.length - 1 - i];
    }
    return reversa;
}

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero){
    if(numero == 0){
        return 1
    }
    else if (numero == 1){
        return 1
    }
    return numero * factorial(numero - 1);
}