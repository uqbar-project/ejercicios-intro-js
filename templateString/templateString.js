console.log('Bienvenido al repaso de string template')

const nombre = 'Gonzalo'
// La manera de concatenar string con variables en js es con el operador +
console.log('hola ' + nombre)

// Pero se podria usar una comilla especial que nos permite interpolar sin tener que andar abriendo y cerarando los strings, que se llama template string
console.log(`hola ${nombre}, con string template`)

const apellido = 'Gras Cantou'
const edad = 99
const calle = 'calle siempre viva 123'


// String comun con enter y uso de variables
console.log('hola ' + nombre + ' ' + apellido
    + '\nedad: ' + edad
    + '\ncalle: ' + calle
)

// Template String <3
console.log(`hola ${nombre} ${apellido} edad: ${11 + 11} calle ${calle}`)
