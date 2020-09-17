
let trivia = () => {

    let trys = 3;
    const respuestaCorrecta = 'Cubo';
    let correct = false;
    
    
        while (trys > 0 && correct != true) {
            trys--;
            respuesta = prompt(" Figura geométrica \n Ingrese la respuesta");
            console.log(respuesta)
            if (respuesta === respuestaCorrecta) {
                alert( `La re pegaste!!!`);
                correct = true;
            } else if (trys == 2) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: Soy una figura`);
            } else if (trys == 1) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: Tengo 4 caras \n Ingrese la nueva respuesta:`);
            } else if (trys == 0) {
                alert(`Incorrecto, te queda ${trys} intento, pista: C...  \n Ingrese la nueva respuesta`);
            }
        }        
    }