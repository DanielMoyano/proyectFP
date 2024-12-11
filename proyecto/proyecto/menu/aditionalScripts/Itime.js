/*FUNCIONES*/
function timePasses() {
    const hoy = new Date();
    let hora = hoy.getHours();
    let min = hoy.getMinutes();
    min = addCero(min);
    let time = hora + ":" + min;
    return time;
}
function addCero(n) {
    if (n < 10) {
        n = "0" + n;
    }
    return n;
}