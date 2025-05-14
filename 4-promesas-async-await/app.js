
//Promesas

// relación de tiempo de ejecución y proceso
// Encadenamiento de promesas
// Manejo de errores
// Finally

//En cuántos pasos preparo una hamburguesa
//1. Reunir los ingredientes (3seg)
//2. Cocinar la carne (2seg)
//3. Calentar el pan (1seg)
//4. Armar (2seg)
//5. Servir (1seg)

/* let tiendaAbierta = true

let pedido = (tiempo, proceso) => {
    return new Promise( (resolve, reject) => {
        if(tiendaAbierta){
            setTimeout( () => {
                resolve( proceso() )
            }, tiempo  ) 
            
        }else{
            reject( console.log( "Tienda cerrada" ) )
        }
    } )
}

pedido( 3000, () => console.log("Ingredientes reunidos correctamente") )
.then( () => {
    return pedido(0000, () => console.log("Hamburguesa en preparación"))
} )
.then( () => {
    return pedido(2000, () => console.log("La carne ha sido cocinada"))
} )
.then( () => {
    return pedido(1000, () => console.log("El pan se calentó correctamente"))
} )
.then( () => {
    return pedido(2000, () => console.log("La hamburguesa se ha armado"))
} )
.then( () => {
    return pedido(1000, () => console.log("Hamburguesa servida, disfrutala! 🍔"))
} )
.catch( () => {
    console.log( "El cliente se ha ido" )
} )
.finally( () => {
    console.log("Jornada finalizada, la tienda ha cerrado")
} ) */



// Async Await

//try, catch, finally
//async y await

/* let tiendaAbierta = true

async function pedido () {
    try{
        await fakeFunction
    }
    catch(error){
        console.log("fakeFunction no existe",error)
    }
    finally{
        console.log("Código que siempre se ejecuta")
    }
}

pedido ()
.then( () => {
    console.log("Texto después del async await")
} )
 */


/* // Simulando una solicitud asíncrona con promesas
function obtenerDatosDeUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: 'Juan' });
      } else {
        reject('Usuario no encontrado');
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
}

// Usando async/await
async function mostrarDatosDeUsuario(id) {
  try {
    const usuario = await obtenerDatosDeUsuario(id); // Espera a que la promesa se resuelva
    console.log(usuario); // Muestra los datos del usuario
  } catch (error) {
    console.log(error); // Maneja el error si la promesa es rechazada
  }
}

// Uso:
mostrarDatosDeUsuario(1); // Muestra los datos del usuario con id 1 */