/*FUNCIONES*/
function intervalos(elemento, tiempo) {
    window.setInterval (
        function() {
            parpadeo(elemento)
        }, tiempo
    );
}
function parpadeo (elemento) {
    let marcador = document.getElementById(elemento);
    if (marcador.style.display == "none") {
        marcador.style.display = "block";
    }
    else {
        marcador.style.display = "none";
    } 
}