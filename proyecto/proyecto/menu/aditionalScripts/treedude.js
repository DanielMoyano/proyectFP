/*VARIABLES*/
let intervalo;
let musica;
let nxtLvlPtos=11
songAlive();
musica = window.setInterval (
    songAlive, 1000*9.25
);
/*FUNCIONES*/
function generarNuevo0() {
    let cadena = [];
    let rama = Math.floor(Math.random() * 100 + 1);
    if (rama < 45) {
        cadena = [1,0];
    }
    else if (rama < 91) {
        cadena = [0,1];
    }
    else  {
        cadena = [0,0]
    }
    return cadena;
}
function talar(bidimensional, pos) {
    //BAJAMOS TODOS LOS ELEMENTOS UNA POSICIÓN
    let i = bidimensional.length - 1;
    aux = bidimensional[i];
    for (; i>0; i--) {
        bidimensional[i] = bidimensional[i - 1];
    }
    //GENERAMOS NUEVA "COPA"
    bidimensional[0] = generarNuevo0();
    //ACTUALIZAMOS MODELO VISUAL
    pintarArbol(bidimensional);
    //COMPROBAR SI EL LEÑADOR ESTÁ EN UNA MISMA CASILLA QUE UNA RAMA
    let interruptor = false;
    i = bidimensional.length - 1;
    for (let j = 0; j < pos.length && interruptor == false; j++) {
        if (bidimensional[i][j] == 1 && pos[j] == 1) {
            interruptor = true;
            if (j == 0) {
                selection = $("#c");
                selection.html("");
                selection = $("#a");
                selection.html("");
                dibujo = tomb();
                for (let i in dibujo) {
                    selection.html(selection.html() + dibujo[i] + "<br>")
                }
            }
            else {
                selection = $("#a");
                selection.html("");
                selection = $("#c");
                selection.html("");
                dibujo = tomb();
                for (let i in dibujo) {
                    selection.html(selection.html() + dibujo[i] + "<br>");
                }
            }
            die();
            bidimensional[i] = [0, 0];
            pintarArbol(bidimensional);
            ded = true;
        }
        else if (j == 1){
            getEnergy();
            puntos++;
            if (puntos == nxtLvlPtos) {
                //ACTUALIZACIÓN NUEVA PUNTUACIÓN A SUPERAR
                try {
                    let strPtos = nxtLvlPtos.toString();
                    let long = strPtos.length;
                    let cifras=[];
                    if (long > 2) {
                        cifras[1] = parseInt(strPtos[strPtos.length-1]) + 1;
                        cifras[0] = parseInt(strPtos/10)+cifras[1];
                    } else {
                        cifras[strPtos.length-1] = parseInt(strPtos[strPtos.length-1]) + 1;
                        cifras[0] = parseInt(strPtos[0]) + parseInt(cifras[1]);
                    }
                    nxtLvlPtos = 0;
                    // //cambiarlos de sitio
                    for (let i=0;i<cifras.length-1;i++) {
                        aux = cifras[i];
                        cifras[i] = cifras[i+1];
                        cifras[i+1] = aux;
                    }
                    for (let i= 0; i< cifras.length; i++) {
                        nxtLvlPtos += parseInt(cifras[i])*(10**i);
                    }
                } catch (e) {
                    console.log("QUÉ CONIO.h HAS TOCADO?!: " + e);
                }
                clearInterval(intervalo);
                lvlUp();
                startTime(tempo-=200);
                document.getElementById("msg").innerHTML = levelup();
                blinking("msg");
            }
        }
    }
    document.getElementById("points").innerHTML = puntos;
}

function startTime(tiempo) {
    intervalo = window.setInterval (
        loseEnergy, tiempo
    );
}
function loseEnergy() {
    let energia = $("#Contenedorlife");
    energia.width(energia.width() - 9.8);
    if (energia.width() == 0) {
        die();
    }
}
function getEnergy() {
    let energia = $("#Contenedorlife");
    if (energia.width() + 11.76 > 196) {
        energia.width(196); 
    }
    else  {
        energia.width(energia.width() + 11.76);
    }
}
function die() {
    if (posTalador[0] == 1) {
        selection = $("#c");
        selection.html("");
        selection = $("#a");
        selection.html("");
        dibujo = tomb();
        for (let i in dibujo) {
            selection.html(selection.html() + dibujo[i] + "<br>")
        }
    }
    else {
        selection = $("#a");
        selection.html("");
        selection = $("#c");
        selection.html("");
        dibujo = tomb();
        for (let i in dibujo) {
            selection.html(selection.html() + dibujo[i] + "<br>");
        }
    }
    clearInterval(intervalo);
    clearInterval(musica);
    ded = true;
    intervalos("retryHint", 1000);
    songDead();
    musica = window.setInterval (
    songDead, 1000*9.25
);
    setTimeout(() => comparePoints(puntos), 50);
}
function chgVol() {
    if (mute) {
        mute = false;
    }
    else {
        mute = true;
    }
    if (mute) {
        selection = $("#icon");
        selection.html("");
        selection.html('<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>');
    }
    else {
        selection = $("#icon");
        selection.html("");
        selection.html('<path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11M12.025 8a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>');

    }
}
function levelup() {
    let fullWord="";
    let n = Math.floor(Math.random() * 6 );
    
    // selection.html(writeChar(honk));
    switch (n) {
        case 0:
            fullWord = "faster  ";
            break;
        case 1:
            fullWord = "level up  ";
            break;
        case 2:
            fullWord = "tick tock  ";
            break;
        case 3:
            fullWord = "chop chop  ";
            break;
        case 4:
            fullWord = "speed up  ";
            break;
        default:
            fullWord = "honk  ";
            break;
    }
    
    let letterEsq = [[]];
    let total="";
    for (let i = 0; i< fullWord.length; i++) {
        letterEsq[i] = invokeLetter(fullWord[i]);
    }
    // total = totalLength(letterEsq);
    total = writeWord(letterEsq); 
    return total;
}
//subida de nivel en las puntuaciones:
//10, 30, 60, 100, 160, 220?