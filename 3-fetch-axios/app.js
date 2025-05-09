

//Fetch

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => {

        if (!respuesta.ok) {
            throw new Error(`Error HTTP Status: ${respuesta.status}`)
        }

        return respuesta.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error("El error es: ", error)) */

//APIs 📝
//https://dog.ceo/dog-api/
//https://rickandmortyapi.com/

/* fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP Status: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then((data) => console.log(data.results))
  .catch((error) => console.error("El error es: ", error)); */

/* fetch("https://www.swapi.tech/api/people/10")
    .then((res) => res.json())
    .then((data) => console.log(data.result.properties.name))
    .catch((err) => console.error(err)); */

//✍🏻 fetch con async await

/* async function mostrarDatos() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!respuesta.ok) {
            throw new Error(`Error HTTP Status: ${respuesta.status}`);
        }

        const data = await respuesta.json()
        console.log(data)

    } catch (error) {
        console.error(`Hay un error ${error}`)
    }
}
mostrarDatos() */


//SOLICITUD POST

/* fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: "admin",
        correo: "a@correo.com"
    })
})
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos)) */


    //---------------------------------------
    //AXIOS
    //---------------------------------------

/* axios.get("https://jsonplaceholder.typicode.com/user")
    .then( respuesta => {
        console.log(respuesta.data)
    } )
    .catch( err => {
        console.error(`Error: ${err}`)
    } ) */

//Axios GET con async await
/* async function mostrarUsuarios () {
    try {
        const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(respuesta.data)
    } catch (error) {
        console.error(`Error: ${err}`)
    }
}
mostrarUsuarios () */


// Petición AXIOS con POST

/* axios.post("https://jsonplaceholder.typicode.com/users",{
    nombre: "admin",
    correo: "admin@correo.com"
})
.then( respuesta => {
    console.log(respuesta.data)
} )
.catch (error => {
        console.error(`Error: ${error}`)
    })  */