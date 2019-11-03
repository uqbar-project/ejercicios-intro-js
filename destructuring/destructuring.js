console.log('Bienvenido al repaso de destructuring')


const aula = {
    nombre: 'aula 17',
    cantidadSillas: 40,
    tieneAires: false,
    tipoDePizarron: 'con marcador'
}


// Para no tener que hacer esto
const nombreAMano = aula.nombre

// Js nos provee esta manera de poder obtener variables desde un objeto
const { nombre, cantidadSillas } = aula

// De esta manera lo que nos quedarian 2 variables (nombre, cantidadSillas)
// y las podemos acceder directamente

console.log("nombre", nombre)
console.log("cantidadSillas", cantidadSillas)

// Esto tambien funciona para las listas

const listaDeNumeros = [5, 2, 3, 4, 5]

// para no hacer el uso de la posicion de la lista

const primeraPosicionAMano = listaDeNumeros[0]
const segundaPosicionAMano = listaDeNumeros[1]

// Podemos destructurar una lista de esta manera
const [primeraPosicion, segundaPosicion] = listaDeNumeros

console.log('primer : ', primeraPosicion)
console.log('segundaPosicion :', segundaPosicion)

// fuente : https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment