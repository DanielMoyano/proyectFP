const fellerIddleLeft = () =>{
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;###&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]#####",
        "&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;_|&nbsp;-&nbsp;&nbsp;-&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "&nbsp;&nbsp;&nbsp;&nbsp;|/&nbsp;&nbsp;&nbsp;\\__/&nbsp;&nbsp;&nbsp;&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;||_______|",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___||___|"
    ];
        //"      ###",
        //"[   ]#####",
        //"  | _|- -|_",
        //"  |/ \__/  \",
        //"  ||_______|",
        //"   |___|___|"
    return dibujo;
}
const fellerIddleRight = () => {
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;###",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]",        
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;-&nbsp;&nbsp;-&nbsp;|_&nbsp;&nbsp;|",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;\\__/&nbsp;&nbsp;&nbsp;&nbsp;\\|",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_______||",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___||___|"
    ];
        // "   ###",
        // "  #####[     ]",
        // " _|- -|_  |",
        // "/  \__/  \|",
        // "|_______| |",
        // "|___|___|"
        return dibujo;
}
const fellerCutingLeft = () => {
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;###",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####",        
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;o&nbsp;&nbsp;o&nbsp;|_",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;\\__/&nbsp;&nbsp;&nbsp;&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__&nbsp;───===",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___||___|",
        ""
    ];
    // "        ###",
    // "       #####",
    // "      _|o o|_",
    // "     /  \__/  \\",
    // "     |___   ----===",
    // "     |___|___|",
    // ""
    return dibujo;
}
const fellerCutingRight = () => {
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;###&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;o&nbsp;&nbsp;o&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;\\__/&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp",
        "===───&nbsp;__|&nbsp;&nbsp;&nbsp;",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___||___|&nbsp;&nbsp;&nbsp;",
        ""
    ];
    // "       ###      ",
    // "      #####     ",
    // "     _|o o|_    ",
    // "    /  \\_/  \\   ",
    // "==----   ___|   ",
    // "    |___|___|   "

    return dibujo;
}
const treeBranchRight = () => {
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oOo",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ oO",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/--00oO",
        "--<&nbsp;&nbsp;&nbsp;OOo",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\oOO"
    ];
    return dibujo;
    // "     oOo",
    // "     / oO",
    // "   /--00oO",
    // "--<   OOo ",
    // "   \\oOO"
}
const treeBranchLeft = () => {
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;o&nbsp;&nbsp;&nbsp;&nbsp;",
        "&nbsp;o0Oo--\\&nbsp;&nbsp;&nbsp;",
        "O0Oo&nbsp;&nbsp;--\\&nbsp;&nbsp;",
        "oOOOo&nbsp;&nbsp;/>--",
        "&nbsp;&nbsp;o0O-/&nbsp;&nbsp;&nbsp;&nbsp;"
    ];
    return dibujo;
    // "   o  o    ",
    // " o0Oo--\\   ",
    // "O0Oo  --\\  ",
    // "oOOOo  /->-",
    // "  o0O-/    "
}
const tomb = () => {
    const dibujo = [
        "&nbsp;&nbsp;______",
        "&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\",
        "│ R.I.P.&nbsp;│",
        "│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
        "└────┘"
    ];
    return dibujo;
    //" _______"
    //"/       \"
    //"│ R.I.P.│"
    //"│       │"
    //"└───────┘"
}
const WizardSleepI = () =>{
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Z",
        "&nbsp;╔═╗&nbsp;&nbsp;&nbsp;&nbsp;/\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Z",
        "&nbsp;╚╦╝&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;Z",
        "&nbsp;&nbsp;&nbsp;&nbsp;║&nbsp;&nbsp;&nbsp;/___\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;║&nbsp;_|&nbsp;-&nbsp;&nbsp;-&nbsp;|_",
        "&nbsp;&nbsp;&nbsp;&nbsp;║/&nbsp;&nbsp;&nbsp;\\__/&nbsp;&nbsp;&nbsp;&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;║|_______|&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___||___|"
    ];
    return dibujo;
//                Z
//    ╔═╗    / \   Z
//    ╚╦╝   /   \ Z
//     ║   /_____\
//     ║ _| -  - |_
//     ║/   \__/   \
//     ║|________|  \
//      |___||___|
}
const WizardSleepII = () =>{
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Z",
        "&nbsp;╔═╗&nbsp;&nbsp;&nbsp;&nbsp;/\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Z",
        "&nbsp;╚╦╝&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;Z",
        "&nbsp;&nbsp;&nbsp;&nbsp;║&nbsp;&nbsp;&nbsp;/___\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;║&nbsp;_|&nbsp;-&nbsp;&nbsp;-&nbsp;|_",
        "&nbsp;&nbsp;&nbsp;&nbsp;║/&nbsp;&nbsp;&nbsp;\\__/&nbsp;&nbsp;&nbsp;&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;║|_______|&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___||___|"
    ];
    return dibujo;
//                  Z
//    ╔═╗    / \   Z
//    ╚╦╝   /   \ Z
//     ║   /_____\
//     ║ _| -  - |_
//     ║/   \__/   \
//     ║|________|  \
//      |___||___|
}
const WizardWake = () =>{
    const dibujo = [
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!",
        "&nbsp;╔═╗&nbsp;&nbsp;&nbsp;&nbsp;/\\",
        "&nbsp;╚╦╝&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;║&nbsp;&nbsp;&nbsp;/___\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;║&nbsp;_|&nbsp;o&nbsp;o&nbsp;|_",
        "&nbsp;&nbsp;&nbsp;&nbsp;║/&nbsp;&nbsp;&nbsp;\\__/&nbsp;&nbsp;&nbsp;&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;║|_______|&nbsp;\\",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___||___|",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    ];
    return dibujo;
    //              !
    //  ╔═╗    /\
    //  ╚╦╝   /  \
    //   ║   /____\
    //   ║ _| o o |_
    //   ║/   \__/  \
    //   ║|________| \
    //    |___||___|
               
}
function pintarArbol(bidimensional) {
    let seleccion;
    let dibujo;
    for (let i = 0; i < bidimensional.length; i++) {
        for (let j = 0;j < bidimensional[i].length; j++) {
            if (j == 0 && bidimensional[i][j] == 1) {
                seleccion = $(document);
                seleccion = $("#f" + i + " .col" + j);
                dibujo = treeBranchLeft();
                seleccion.html("");
                for (let k in dibujo) {
                    seleccion.html(seleccion.html() + dibujo[k] + "<br>");
                }
            }
            else if (j == 1 && bidimensional[i][j] == 1) {
                seleccion = $(document);
                seleccion = $("#f" + i + " .col" + (j + 1));
                dibujo = treeBranchRight();
                seleccion.html("");
                for (let k in dibujo) {
                    seleccion.html(seleccion.html() + dibujo[k] + "<br>");
                }
            }
            else if (j == 0) {
                seleccion = $(document);
                seleccion = $("#f" + i + " .col" + j);
                seleccion.html("");
            }
            else {
                seleccion = $(document);
                seleccion = $("#f" + i + " .col" + (j + 1));
                seleccion.html("");
            }
        }
    }
}
function blinking(identificador, time = 250, repeticiones = 8) {
    let metronomo;
    let contador = 0;
    let objeto = document.getElementById(identificador);
    metronomo = setInterval(function() {
        objeto.style.display = (objeto.style.display == 'none' ? 'block' : 'none');
        if (contador == repeticiones) {
            objeto.style.display = 'none';
            clearInterval(metronomo);
        }
        else {
            contador++;
        }
    }, time);
}