/*VARIABLES*/
let cookie;
/*FUNCIONES*/
function checkSession() {
    if (!checkCookie()) {
        cookie = confirm("Esta página usa el almacenamiento de datos mediante cookies como método de guardado de la información.\n\nSolo guardaremos su puntuación más elevada obtenida en el minijuego.\n\n¿Permite a la página guardar su mejor puntuación?\n\nLos datos de su partida serán guardados durante una semana.");
    }
    else {
        cookie = true;
    }
}

function comparePoints(points) {
    if (cookie) {
        if (checkCookie() < points) {
            doCookie(points);
            alert("PUNTUACIÓN " + points + "\n--NUEVO-RECORD!-")
        }
        else {
            alert("PUNTUACIÓN " + points + "\n--RECORD-ACTUAL-" + checkCookie() + "--");
        }
    }
}

function checkCookie(nombreCookie = "puntuacion") {
    let nombre = nombreCookie + "=";
    let migas = document.cookie.split(';');
    for (let i = 0;i < migas.length; i++) {
        let caracter = migas[i];
        while (caracter.charAt(0) == ' ') {
            caracter = caracter.substring(1);
        }
        if (caracter.indexOf(nombre) == 0) {
            return caracter.substring(nombre.length, caracter.length);
        }
    }
    return null;
}

function trashCookie(nombreCookie = "puntuacion") {
    document.cookie = nombreCookie+'=; expires=Thu, 01 Jan 1970 06:06:06 GMT;path=/';
}
function doCookie(valorCookie=0, nombreCookie="puntuacion", Dias=7) {
    let d = new Date();
    d.setTime(d.getTime() + (Dias*24*60*60*1000));
    let caducidad = "expires="+d.toUTCString();
    document.cookie = nombreCookie + "=" + valorCookie + ";" + caducidad + ";path=./";
}