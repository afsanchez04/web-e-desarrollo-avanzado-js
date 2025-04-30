
//Ejemplo de funcionamiento del call stack
/* function multiplicar (x,y){
    return x*y
}

function mostrarCuadrado(x){
    let r = multiplicar(x,x)
    console.log(r)
}

mostrarCuadrado(5) */

//Error: Stack overflow
/* function h (){
    h()
}

h() */

//Ejemplo código asincrono con uso de web API del navegador

/* console.log('Inicio');

setTimeout(() => {
  console.log('Tarea asincrónica completada');
}, 2000);

console.log('Fin'); */

//promise
/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida'), 1000);
});

promesa.then(resultado => console.log(resultado)); */

//async await
/* async function obtenerDatos() {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos(); */

fetch('https://rickandmortyapi.com/api/character/?page=19')

    .then(response => response.json())

    .then(data => console.log(data));