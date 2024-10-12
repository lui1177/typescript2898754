import { Estudiante } from "./Estudiante";

export type tipo={
    nombre : string
}

const recorrerEstudiantes = function (arregloEstudiantes : Estudiante[]){
    arregloEstudiantes.forEach(function(elemento){

        console.log(elemento);
        console.log("------")
    } );
}

export default recorrerEstudiantes;