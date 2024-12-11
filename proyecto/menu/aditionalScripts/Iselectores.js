/*FUNCIONES*/
function optionUp(arraySeleccionador, clases) {
    let elementoTrue = findTrue(arraySeleccionador, clases.length);
    let interactua = $(document);
    let nombre = "." + arraySeleccionador[elementoTrue][0];
    interactua = $(nombre);
    interactua.removeClass("selected");
    if (elementoTrue == 0) {
        elementoTrue = clases.length;
    }
    elementoTrue--;
    for (let j=0; j < clases.length; j++) {
        if (elementoTrue == j) {
            arraySeleccionador[j][1] = true;
        }
        else {
            arraySeleccionador[j][1] = false;
        }
    }
    elementoTrue = findTrue(arraySeleccionador, clases.length);
    interactua = $("." + arraySeleccionador[elementoTrue][0]);
    interactua.addClass("selected");
    return arraySeleccionador;
}
function optionDown(arraySeleccionador, clases) {
    let elementoTrue = findTrue(arraySeleccionador, clases.length);
    let interactua = $(document);
    let nombre = "." + arraySeleccionador[elementoTrue][0];
    interactua = $(nombre);
    interactua.removeClass("selected");
    if (elementoTrue == clases.length-1) {
        elementoTrue = -1;
    }
    elementoTrue++;
    for (let j=0; j < clases.length; j++) {
        if (elementoTrue == j) {
            arraySeleccionador[j][1] = true;
        }
        else {
            arraySeleccionador[j][1] = false;
        }
    }
    elementoTrue = findTrue(arraySeleccionador, clases.length);
    interactua = $("." + arraySeleccionador[elementoTrue][0]);
    interactua.addClass("selected");
    return arraySeleccionador;
}
function findTrue(cadenaTetradimensional, cantidad) {
    let i = 0;
    let SW = false;
    while (SW == false && i < cantidad) {
        if (cadenaTetradimensional[i][1] == true) {
            SW = true;
        }
        else {
            i++;
        }
    }
    return i;
}
function Update3(cadenaTetradimensional, cantidad) {
    let elegido = findTrue(cadenaTetradimensional, cantidad);
    if (cadenaTetradimensional[elegido][2] == "/..") {
        return "<span>directory: GO UP</span>";
    }
    else if (cadenaTetradimensional[elegido][2] == "fichero"){
        return "<span class='flleft'>directory:" + cadenaTetradimensional[elegido][3] + "</span><span class='flright'>|FOLDER</span>";
    }
    else {
        return "<span class='flleft'>app: " + cadenaTetradimensional[elegido][3] + "</span><span class='flright'>|--FILE->#</span>";
    }
}
function navegation(cadenaTetradimensional, cantidad) {
    let elegido = findTrue(cadenaTetradimensional, cantidad);
    if (cadenaTetradimensional[elegido][2] == "/..") {
        return "..";
    }
    else {
        return cadenaTetradimensional[elegido][3];
    }
}