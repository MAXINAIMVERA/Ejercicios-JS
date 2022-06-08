const obtenerChatStatus = (usuarias) => {

    let respuesta = "";

    for (i = 0; i < usuarias.length; i++) {

        if (i < 1){
            respuesta = `${usuarias[0]} está conectada`;
        } else if (i < 2){
            respuesta = `${usuarias[0]} y ${usuarias[1]} estan conectadas`;
        } else {
            respuesta = `${usuarias[0]}, ${usuarias[1]} y ${usuarias.length-2} Personas más estan conectadas`;
        }

    }

    return respuesta;

}

console.log(obtenerChatStatus(["Maria", "Marta", "Juana", "Josefa", "Valentina", "Valeria" ]));