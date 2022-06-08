let esMatrizCuadrada = (matriz) => {

let respuesta = "";

    for (i = 0; i < matriz.length; i++) {

        if (matriz[0].length === matriz[i].length){

            respuesta = "Es cuadrada";

        } else {

            respuesta = "No es cuadrada";

        }
    }

return respuesta;    
};

console.log(esMatrizCuadrada([[4,5,7],[1,0,1],[2,2]])); 