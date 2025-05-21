import z from 'https://cdn.jsdelivr.net/npm/zod@3.25.11/+esm'

//Ejemplo 1 

/* //1. Crear el equema de validación
const nombreSchema = z.string()
const edadSchema = z.number()
const booleanSchema = z.boolean()

//2. Pasar la info
const userEdad = 24

//3. Validación
const mensaje = edadSchema.parse(userEdad)
console.log(mensaje) */

//------------------------------------//

//Esquema basado en objeto 

/* //1. Crear el equema de validación
const userSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email(),
    phone: z.number().min(1, "El número debe ser mayor a 0").int().positive("La edad debe ser un número positivo")
})

//2. Pasar la info
const userData = {
    nombre: "Pepe",
    email: "pepe@correo.com",
    phone: "38236132"
}

//3. Validación
const mensaje = userSchema.safeParse(userData)
console.log(mensaje.error) */


// Arrays en Zod

/* //1. Crear el equema de validación
const textoArraySchema = z.array(z.string())

//2. Pasar la info 
textoArraySchema.parse(["1",2,"3"]) */

// Si se quisiera validar un array de objetos como ej. un array de usuarios

//1.
const userSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email(),
    phone: z.number().min(1, "El número debe ser mayor a 0").int().positive("La edad debe ser un número positivo")
})

const usersSchema = z.array(userSchema)

//2. 
const userData = [
    {
        nombre: "Pepe",
        email: "pepe@correo.com",
        phone: 38236132
    },
    {
        nombre: "Pepe",
        email: "pepe@correo.com",
        phone: 38236132
    }
]

//3. 
const mensaje = usersSchema.safeParse(userData)
console.log(mensaje)