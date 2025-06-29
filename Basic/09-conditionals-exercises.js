/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Matías"
if(name == "Matías"){
    console.log("Mi nombre es " + name)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin"
let contraseña = "1234"
if(usuario == "admin" && contraseña == "1234"){
    console.log("Acceso concedido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 8
if(numero>0){
    console.log("El numero es positivo")
}
else if(numero==0){
    console.log("El numero es cero")
}
else{
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 20
if(edad>=18){
    console.log("Puede votar")
}
else{
    console.log("No puede votar, le faltan " + (18 - edad) + " años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let valor = edad >= 18 ? "adulto" : "menor"

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 3
if (mes == 12 || mes == 1 || mes == 2) {
    console.log("Estamos en invierno")
}
else if (mes >= 3 && mes <= 5) {
    console.log("Estamos en primavera")
}
else if (mes >= 6 && mes <= 8) {
    console.log("Estamos en verano")
}
else if (mes >= 9 && mes <= 11) {
    console.log("Estamos en otoño")
}
else {
    console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log("El mes tiene 31 días")
}
else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("El mes tiene 30 días")
}
else if (mes == 2) {
    console.log("El mes tiene 28 días, o 29 si es bisiesto")
}
else {
    console.log("Mes no válido")
}

// switch


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español"
switch (idioma){
    case "español":
        console.log("¡Hola!")
        break
    case "inglés":
        console.log("Hello!")
        break
    case "francés":
        console.log("Bonjour!")
        break
    case "alemán":
        console.log("Hallo!")
        break
    case "italiano":
        console.log("Ciao!")
        break
    default:
        console.log("Idioma no reconocido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesSwitch = 3
switch (mesSwitch) {
    case 12:
    case 1:
    case 2:
        console.log("Estamos en invierno")
        break
    case 3:
    case 4:
    case 5:
        console.log("Estamos en primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Estamos en verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Estamos en otoño")
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mesSwitchDias = 3
switch (mesSwitchDias) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("El mes tiene 31 días")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("El mes tiene 30 días")
        break
    case 2:
        console.log("El mes tiene 28 días, o 29 si es bisiesto")
        break
    default:
        console.log("Mes no válido")
}