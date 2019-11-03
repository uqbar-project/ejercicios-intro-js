console.log('Bienvenido al repaso de Promises')


/*
Queremos ejecutar este codigo : 

mandarAComprarAlKioscoA(dodino, 20)
    .then(hayCaramelos)
    .catch(noPudoComprar)

Para eso tenemos que escribir el siguiente codigo :    
*/

const gonza = {
    comer: (caramelos) => console.log(`que ricos ${caramelos}`),
    noHayCaramelos: (justificacion) => console.log(`no pude comprar por que ${justificacion} ufa u.u`)
}

const dodino = {}

// Creamos la funcion que nos devuelve la promesa con la logica de comprar en el kiosco
const mandarAComprarAlKioscoA = (alguien, plata) => {
    return new Promise(
        (resolver, rejectar) => {
            if (plata > 60) {
                resolver('caramelos de naranja')
            } else {
                rejectar('no me diste ni un dolar !')
            }

        })
}


const hayCaramelos = (caramelos) => {
    gonza.comer(caramelos)
}

const noPudoComprar = (justificacion) => {
    gonza.noHayCaramelos(justificacion)
}


// Version then-catch
// Aca no me va alcanzar la plata
mandarAComprarAlKioscoA(dodino, 20)
    .then(hayCaramelos)
    .catch(noPudoComprar)

// Aca puede comprar caramelos
mandarAComprarAlKioscoA(dodino, 120)
    .then(hayCaramelos)
    .catch(noPudoComprar)


// Version async await
const miFuncionAsync = async () => {
    try {
        const caramelos = await mandarAComprarAlKioscoA(dodino, 20)
        hayCaramelos(caramelos)
    } catch (justificacion) {
        noPudoComprar(justificacion)
    }
}

// ejecuccion :D
miFuncionAsync()













