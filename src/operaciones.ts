import { Estudiante } from './Estudiante';
export const insertarEstudiante = function(estudiante: Estudiante,  arregloEstudiantes: Estudiante[]){
             arregloEstudiantes.push(estudiante);
}


export const actualizarEstudiantes = function (
    indice: number, 
    listaEstudiante: Estudiante[], 
    nombre: string, 
    apellido: string
  ) {
      // Verificar que el índice sea válido dentro de la lista
      if (indice >= 0 && indice < listaEstudiante.length) {
          // Actualizar el nombre y apellido del estudiante en el índice especificado
          listaEstudiante[indice].nombre = nombre;
          listaEstudiante[indice].apellido = apellido;
      } 
  };
  

export const borrarEstudiantes = function(indice: number, listaEstudiantes: Estudiante[]) {
        listaEstudiantes.splice(indice, 1);
};