
//✍🏻 Tema: Callbacks

//Ejemplo básico de callback
/* function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse); */


//Función que opera dos números (sin callback)

/* function calular (num1, num2, tipoCalculo){

    if(tipoCalculo === "suma"){
        return num1 + num2
    }else if(tipoCalculo === "multiplicacion"){
        return num1 * num2
    }

}
console.log( calular(3,2,"multiplicacion") )  */

//Función que opera dos números (con callback)
/* function sumar (a,b){
    return a+b
}
function multip (a,b){
    return a*b
}
function mensaje (a,b) {
    console.log(`Tus números son: ${a} y ${b}`)
}
function calcular (num1, num2, callback){
    if(typeof callback === "function"){
        return callback(num1,num2)
    }
}
console.log( calcular(2,3, (a,b) => {
    return "result: " + (a*b)
} ) ) */

//Callback Hell
/* setTimeout(() => {

    console.log('Primera tarea completada');

    setTimeout(() => {

        console.log('Segunda tarea completada');

        setTimeout(() => {

            console.log('Tercera tarea completada');

        }, 1000);

    }, 1000);

}, 1000); */


//Solución con promise

/* function tarea(ms, mensaje){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(mensaje)
            resolve()
        }, ms )
    } )
}
tarea(1000, "Primera tarea completada")
.then( () => tarea(1000, "Segunda tarea completada") )
.then( () => tarea(1000, "Tercera tarea completada") ) */


//✍🏻 Tema: JSON y manejo de datos

//Convertir un objeto JSON a javascript

/* const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';

const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // "Carlos"

console.log(objeto.edad);   // 25

console.log(typeof jsonData) */

//Convertir un objeto de JavaScript a JSON

/* const estudiante = {
    nombre: "Ana",
    edad: 22,
    esEstudiante: true,
    materias: ["Historia", "Inglés", "Literatura"]
  };
  
  const jsonString = JSON.stringify(estudiante);
  
  console.log(typeof jsonString); */

//Ejemplo de Jesús

/* const formData = {
    nombre: freshForm.nombre.value,
    apellido_paterno: freshForm.apellido_paterno.value,
    apellido_materno: freshForm.apellido_materno?.value || '',
    edad: freshForm.edad.value,
    correo: freshForm.correo.value,
    contrasena: freshForm.contrasena.value,
    rol: freshForm.rol.value
};
const response = await fetch('/Project-Manager/api/usuarios.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
}); */

const usuario = {
    nombre: "Lucía",
    edad: 30,
    color: "blanco"
};
  
//Registra los datos en localstorage
localStorage.setItem('usuario', JSON.stringify(usuario));
  

// Recuperar datos de localStorage
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
  
console.log(usuarioGuardado.nombre);  



