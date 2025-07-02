/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Estudiante{
    constructor(nombres,apellidos,edad){
        this.nombres = nombres
        this.apellidos = apellidos
        this.edad=edad
    }
}

// 2. Añade un método a la clase que utilice las propiedades
Estudiante.prototype.presentarse= function(){
    console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos}`)
}

// 3. Muestra los valores de las propiedades e invoca a la función
let estudiante = new Estudiante("Kevin Matías","Morocho Sani",21)
console.log(estudiante.nombres)
console.log(estudiante.apellidos)
estudiante.presentarse()

// 4. Añade un método estático a la primera clase
Estudiante.calcularAñoNacimiento = function(edad) {
    const currentYear = new Date().getFullYear()
    return currentYear - edad
}

// 5. Haz uso del método estático
console.log(`Año de nacimiento: ${Estudiante.calcularAñoNacimiento(estudiante.edad)}`)

// 6. Crea una clase que haga uso de herencia
// 10. Sobrescribe un método de una clase que utilice herencia 
class Materia{
    constructor(nombre, creditos) {
        this.nombre = nombre
        this.creditos = creditos
    }
    mostrarInformacion() {
        console.log(`Materia: ${this.nombre}, Créditos: ${this.creditos}`)
    }
}

class MateriaDificil extends Materia{
    constructor(nombre, creditos, dificultad) {
        super(nombre, creditos)
        this.dificultad = dificultad
    }
    justificacion(){
        console.log(`El grado de dificultad de la materia ${this.nombre} es ${this.dificultad}`)
    }
    mostrarInformacion() {
        super.mostrarInformacion()
        console.log(`Dificultad: ${this.dificultad}`)
    }
}


// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Mascota{
    #precio
    #tamaño
    
    constructor(nombre, especie, precio, tamaño) {
        this.nombre = nombre
        this.especie = especie
        this.#precio = precio
        this.#tamaño = tamaño
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }
    get especie() {
        return this._especie
    }
    set especie(nuevaEspecie) {
        this._especie = nuevaEspecie
    }

}

// 9. Utiliza los get y set y muestra sus valores
let mascota = new Mascota("Firulais", "Perro", 300, "Mediano")
console.log(`Nombre: ${mascota.nombre}, Especie: ${mascota.especie}`)
mascota.nombre("Max")
mascota.especie("Gato")
console.log(`Nombre: ${mascota.nombre}, Especie: ${mascota.especie}`)
