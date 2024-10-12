import { Estudiante } from "./Estudiante"; 
import { actualizarEstudiantes, borrarEstudiantes, insertarEstudiante } from "./operaciones";
import recorrerEstudiantes from "./recorrerEstudiantes";

// Definiendo objetos (literal) estudiante 
const estudiante1: Estudiante = {
    nombre: "Luisa",
    apellido: "Ortega",
    edad: 18,
    tipoIden: "CC",
    numeroIden: 1031806843
};

const estudiante2: Estudiante = {
    nombre: "Felipe",
    apellido: "Suarez",
    edad: 19,
    tipoIden: "CC",
    numeroIden: 1031806843
};

const estudiante3: Estudiante = {
    nombre: "Laura",
    apellido: "Martínez", // Agregué un apellido
    edad: 24,
    tipoIden: "CC",
    numeroIden: 1031806843
};

// Crear arreglo de estudiantes 
const listaEstudiantes: Estudiante[] = [estudiante1, estudiante2, estudiante3];

// Recorrer el arreglo
recorrerEstudiantes(listaEstudiantes);

// OPERACIONES CON ARREGLOS
console.log("-----");
console.log("Antes de insertar");

// Inserta un estudiante (esto puede ser duplicado si usas el mismo objeto)
insertarEstudiante(estudiante1, listaEstudiantes);

console.log("-----");
console.log("Después de insertar");

console.log(listaEstudiantes);

// Actualiza un estudiante
actualizarEstudiantes(1, listaEstudiantes, "Luisa", "Ortiz"); // Asegúrate de que esta función esté definida
console.log(listaEstudiantes);

// Borra un estudiante
console.log("-----");
console.log("Antes de borrar");
console.log(listaEstudiantes)

borrarEstudiantes(1, listaEstudiantes);

console.log("-----");
console.log("Después de borrar");

console.log(listaEstudiantes);

