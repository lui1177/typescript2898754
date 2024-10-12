"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones_1 = require("./operaciones");
const recorrerEstudiantes_1 = __importDefault(require("./recorrerEstudiantes"));
// Definiendo objetos (literal) estudiante 
const estudiante1 = {
    nombre: "Luisa",
    apellido: "Ortega",
    edad: 18,
    tipoIden: "CC",
    numeroIden: 1031806843
};
const estudiante2 = {
    nombre: "Felipe",
    apellido: "Suarez",
    edad: 19,
    tipoIden: "CC",
    numeroIden: 1031806843
};
const estudiante3 = {
    nombre: "Laura",
    apellido: "Martínez", // Agregué un apellido
    edad: 24,
    tipoIden: "CC",
    numeroIden: 1031806843
};
// Crear arreglo de estudiantes 
const listaEstudiantes = [estudiante1, estudiante2, estudiante3];

// Recorrer el arreglo
(0, recorrerEstudiantes_1.default)(listaEstudiantes);

// OPERACIONES CON ARREGLOS
console.log("-----");
console.log("Antes de insertar");

// Inserta un estudiante (esto puede ser duplicado si usas el mismo objeto)
(0, operaciones_1.insertarEstudiante)(estudiante1, listaEstudiantes);
console.log("-----");
console.log("Después de insertar");
console.log(listaEstudiantes);

// Actualiza un estudiante
(0, operaciones_1.actualizarEstudiantes)(1, listaEstudiantes, "Luisa", "Ortiz"); // Asegúrate de que esta función esté definida
console.log(listaEstudiantes);

// Borra un estudiante
console.log("-----");
console.log("Antes de borrar");
console.log(listaEstudiantes);

(0, operaciones_1.borrarEstudiantes)(1, listaEstudiantes);
console.log("-----");
console.log("Después de borrar");
console.log(listaEstudiantes);
