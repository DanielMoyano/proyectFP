/*CÓDIGO SUELTO*/
let seleccion= [true,false,false];
let pov = [document.getElementById("pinturas"),document.getElementById("plumilla"),document.getElementById("bio")];
let selected = ["Pinturas","Plumilla","Bio"];
let imgRoutes = ["#f00","#0f0","#00f" ];
habilitar(seleccion, pov);
$(document).on("keydown",(tecla) => {
    if (tecla.keyCode == 08 ) {
        window.location.replace("../index.html");
    }
})
document.getElementById("l").addEventListener("click", () => {
    optionLeft();
});
document.getElementById("r").addEventListener("click", () => {
    optionRight();
});
/*FUNCIONES*/
function optionLeft() {
    let i=0;
    for (SW = false; i< seleccion.length && SW == false;i++) {
        if (seleccion[i]) {
            if (i==0) {
                i= seleccion.length -1;
            }
            else {
                i--;
            }
            SW = true;
        }
    }
    change(seleccion[i-1],pov[i-1].id);
}
function optionRight(arraySeleccionador, clases) {
    let i= 0;
    for (SW = false; i < seleccion.length && SW == false;i++) {
        if (seleccion[i]) {
            if (i==seleccion.length-1) {
                i= 0;
            }
            else {
                i++;
            }
            SW = true;
        }
    }
    change(seleccion[i-1],pov[i-1].id);
}
function change(n,toot) {
    for (let j=0; j< seleccion.length; j++) {
        if (toot==pov[j].id) {
            pov[j].className = "activo";
            seleccion[j] = true;
            document.getElementById("muestra").style.backgroundColor= imgRoutes[j];
            document.getElementById("cartel").innerHTML = selected[j];
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
