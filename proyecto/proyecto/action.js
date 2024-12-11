/*animación pantalla de inicio: VARIABLES*/
let tiempos=[];
let numerillos = (elemento) => {
    tiempos[elemento]= Math.floor(Math.random() * (1000 - 500) + 500);
    intervalos(elemento,tiempos[elemento]);
};
let tamano = document.getElementById("modelo").innerHTML.replace(/\s/g, '').length;
/*FUNCIONES*/
function intervalos(elemento,tiempo) {
    window.setInterval (
        function() {
            parpadeo(elemento)
        }, tiempo);
}
function parpadeo (elemento) {
    let marcador = document.getElementsByClassName(elemento);
    for (let i=0;i< marcador.length;i++ ) {
        if (marcador[i].style.color == "rgb(255, 255, 255)") {
            marcador[i].style.color = "rgb(0, 0, 0)";
        }
        else {
            marcador[i].style.color = "rgb(255, 255, 255)"
        }
    }
}
/*CÓDIGO SUELTO*/
/*agregar event listener al body*/
document.body.addEventListener("keydown",function () {
    window.location.replace("menu/index.html");
})
for (let n = 0; n<tamano;n++) {
    numerillos(n);
}