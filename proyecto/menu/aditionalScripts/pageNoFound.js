/*VARIABLES*/
let title = $("<h1></h1>").text("PAGINA AUN NO DESARROLLADA");
let subtitle = $("<h2></h2>").text("disculpen las molestias");
let hint = $("<h3></h3>").text("PARA VOLVER PULSE CUALQUIER TECLA");
let draw = $("<p></p>");
let dibujo = WizardSleepI();
let indicador = 0;
/*FUNCIONES*/
function changeFrame(option) {
    draw.html("");
    switch (option) {
        case 0:
            dibujo = WizardSleepI();
            for (let i in dibujo) {
                draw.html(draw.html() + dibujo[i] + "<br>");
            }
            option++;
            break;
        case 1:
            dibujo = WizardSleepII();
            for (let i in dibujo) {
                draw.html(draw.html() + dibujo[i] + "<br>");
            }
            option++;
            break;
        case 2:
            dibujo = WizardWake();
            for (let i in dibujo) {
                draw.html(draw.html() + dibujo[i] + "<br>");
            }
            option = 0;
            break;
    }
    return option;
}
/*CÓDIGO SUELTO*/
$("body").append(title, subtitle, hint, draw);
for (let i in dibujo) {
    draw.html(draw.html() + dibujo[i] + "<br>");
}
window.setInterval (
    function() {
        indicador = changeFrame(indicador)
    }, 500
);

$("body").on("keydown",() => {
        window.location.replace("../index.html");
})