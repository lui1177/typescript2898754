"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarEstudiantes = exports.actualizarEstudiantes = exports.insertarEstudiante = void 0;
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
    arregloEstudiantes.push(estudiante);
};
exports.insertarEstudiante = insertarEstudiante;
const actualizarEstudiantes = function (indice, listaEstudiante, nombre, apellido) {
    // //Intrucciones para actualizar el estudiante 
    // que se encuentre en el indice 
    // indicado en el parametro
};
exports.actualizarEstudiantes = actualizarEstudiantes;
const borrarEstudiantes = function (indice, listaEstudiantes) {
    listaEstudiantes.splice(indice, 1);
};
exports.borrarEstudiantes = borrarEstudiantes;
