console.log('Bienvenido al repaso de Spread operator')

// Hacer ... genera un objeto o lista diferente !
const pepita = {
    energia: 20
}

const copiaDePepita = { ...pepita, edad: 280 }

console.log('pepita y pepita son iguales ? ', pepita === pepita)
console.log('pepita y copiaDePepita son iguales ? ', pepita === copiaDePepita)


const listaNumeros = [1, 2, 3, 4, 5, 6]

const copiaDeListaDeNumeros = { ...listaNumeros }

console.log('listaNumeros')
console.log('listaNumeros y listaNumeros son iguales ? ', listaNumeros === listaNumeros)
console.log('listaNumeros y copiaDeListaDeNumeros son iguales ? ', copiaDeListaDeNumeros)



// Para una clase el caso no es tan feliz, ya que ... solo tiene en cuante los atributos
class Pepita {
    constructor() {
        this.energia = 20
    }
    vola() {
        console.log('estoy volando')
    }
}

const pepitaConMetodos = new Pepita()

const copia = { ...pepitaConMetodos }

console.log('pepitaConMetodos.energia', pepitaConMetodos.energia)
console.log('pepitaConMetodos.vola', pepitaConMetodos.vola)
console.log('copia.energia', copia.energia)
console.log('copia.vola', copia.vola)

// Para mantener los metodos podemos hace un Object.assign
const manteniendoLosMetodos = Object.assign(new Pepita(), { ...copia })

console.log(manteniendoLosMetodos.vola)