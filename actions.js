let seleccion= [true,false,false];
let pov = [document.getElementById("pinturas"),document.getElementById("plumilla"),document.getElementById("bio")];
let imgRoutes = ["imgs/pinturas.jpg","imgs/plumilla.png","imgs/bio.png" ];
habilitar(seleccion, pov);
function change(n,toot) {
    for (let j=0; j< seleccion.length; j++) {
        if (toot==pov[j].id) {
            pov[j].className = "activo";
            seleccion[j] = true;
            document.getElementById("muestra").src = imgRoutes[j];
        }
        else {
            pov[j].className = "";
            seleccion[j] = false;
        }
    }
    habilitar(seleccion,pov);
}
function habilitar(guide,elementos) {
    for (let k=0; k< guide.length; k++) {
        if (guide[k]) {
            elementos[k].removeEventListener("click", () => {
                change(k, pov[k].id);
            });
        }
        else {
            elementos[k].addEventListener("click", () => {
                change(k, pov[k].id);
            });
        }
    }
}
