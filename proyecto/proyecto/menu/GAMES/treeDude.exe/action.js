/*VARIABLES GLOBALES*/
var posTalador = [1, 0];
var mute = false;
var tempo = 1000;
/*VARIABLES LOCALES*/
let selection = $(document);
let dibujo;
let ded = false;
let modelo = [[]];
let puntos = document.getElementById("points").innerHTML;
let interruptor = false;
/*CÓDIGO SUELTO*/
selection = $(".col1");
for (let i = 1; i < 4; i++) {
    modelo[i] = ([0, 0]);
}
modelo[0] = generarNuevo0();
for (let i in dibujo) {
    selection.html(selection.html() + dibujo[i] + "<br>");
}
pintarArbol(modelo);
selection = $("#a");
dibujo = fellerIddleLeft();
for (let i in dibujo) {
    selection.html(selection.html() + dibujo[i] + "<br>")
}
document.body.click();
setTimeout(() => checkSession(),50);
selection = $("body");
selection.on("keydown", (event) => {
    if (event.key == "ArrowRight" && ded == false) {
        posTalador = [0, 1];
        selection = $("#a");
        selection.html("");
        selection = $("#c");
        selection.html("");
        dibujo = fellerCutingRight();
        for (let i in dibujo) {
            selection.html(selection.html() + dibujo[i] + "<br>");
        }
        hit("right",mute);
        talar(modelo, posTalador);
        if (interruptor == false) {
            startTime(1000);
            interruptor = true;
        }
    }
    else if (event.key == "ArrowLeft" && ded == false) {
        posTalador = [1, 0];
        selection = $("#c");
        selection.html("");
        selection = $("#a");
        selection.html("");
        dibujo = fellerCutingLeft();
        for (let i in dibujo) {
            selection.html(selection.html() + dibujo[i] + "<br>")
        }
        hit("left",mute);
        talar(modelo, posTalador);
        if (interruptor == false) {
            startTime(tempo);
            interruptor = true;
        }
    }
    else if (event.key == "Escape"){
        window.location = ("../index.html");
    }
    else if(event.key == "Enter" && ded == true) {
        window.location.reload();    
    }
    else if (event.key == "M" || event.key == "m") {
        chgVol();
    }
})
selection.on("keyup", (event) => {
    if (event.key == "ArrowRight" && ded == false) {
        selection = $("#a");
        selection.html("");
        selection = $("#c");
        selection.html("");
        dibujo = fellerIddleRight();
        for (let i in dibujo) {
            selection.html(selection.html() + dibujo[i] + "<br>");
        }
    }
    else if (event.key == "ArrowLeft" && ded == false) {
        selection = $("#c");
        selection.html("");
        selection = $("#a");
        selection.html("");
        dibujo = fellerIddleLeft();
        for (let i in dibujo) {
            selection.html(selection.html() + dibujo[i] + "<br>")
        }
    }
})
//PARA EL 3er trimestre intentar (aunque en teoría no se pude por lo que tampoco insistir demasiado) emular pulsada del espacio
// function to trigger the keypress
/*jQuery.fn.simulateKeyPress = function(character) {
    jQuery(this).trigger({
       type: 'keypress',
       which: character.charCodeAt(0)
    });
 };
 $("body").simulateKeyPress(' ');*/