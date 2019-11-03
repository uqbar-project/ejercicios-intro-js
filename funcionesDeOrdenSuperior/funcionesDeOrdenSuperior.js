
console.log('Bienvenido al repaso de funciones de orden superior')


// wihRouter es una funcion de orden superior que recibe un componente por parametro
// le inyecta la propiedades de donde estamos parados en la navegacion
// y nos devuelve el componente listo para usar pero con esas propiedades ya inyectadas 
const withRouter = (componente) => {
    // Estas son las props que nos inyecta la funcion
    const datosDeRouter = {
        link: '/home'
    }
    // Devolvemos una funcion, que ya seria el componente listo para usarse
    return (props) => {
        // Aca devolvemos el componente con los 2 datos mezclados (las props y los datos del ruting)
        return componente({ ...datosDeRouter, ...props })
    }
}
// componente de la home
const componenteHome = (props) => {
    console.log('mis props son', props)
}
// estas son las props que alguien le estaria pasando a componente home
const props = {
    saludo: 'hola soy una prop'
}

withRouter(componenteHome) // hasta aca tenemos el componente listo para usarlo con los datos de ruting inyectados
    (props) // y aca simulamos que alguien lo esta invocando con ciertas props