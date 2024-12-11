/*VARIABLES*/
let selection = $(document);
let clases = ["goBack","goSettings","goApps","goDemos","goCellular","goWires","goGames","goVr","goArt","goVideos","goCredits"];
let focus = [];
let tipo = ["/..","fichero","fichero","fichero","fichero","fichero","fichero","fichero","fichero","fichero","fichero"];
let nombre = ["","SETTINGS","APPS","DEMOS","CELLULAR","WIRES","GAMES","VR","ART","VIDEOS","CREDITS"];
let globalSelector = [[[[]]]];
/*FUNCIONES*/
function update() {
    document.getElementById("time").innerHTML = timePasses();
}
/*CÓDIGO SUELTO*/
/*ESTABLECER INTERVALO*/
setInterval(update,1000);
/*SELECTORES*/
selection = $("#time");
selection.html(timePasses);
selection = $(".goBack");
selection.addClass("selected");
selection = $("#summary");
selection.html("<span>directory: GO UP</span>");
for (let i in clases) {
    if (i==0) {
        focus[i]=true;
    }
    else {
        focus[i]=false;
    }
}
for (let i=0;i<clases.length;i++) {
    globalSelector[i]=([clases[i],focus[i],tipo[i],nombre[i]]);
}
document.body.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        globalSelector=(optionUp(globalSelector,clases));
        selection = $("#summary");
        selection.html(Update3(globalSelector,clases.length));
        option();
    }
    else if (event.key == "ArrowDown") {
        globalSelector=(optionDown(globalSelector,clases));
        selection = $("#summary");
        selection.html(Update3(globalSelector,clases.length));
        option();
    }
    else if(event.key == "Enter") {
        window.location.replace(navegation(globalSelector,clases.length) + "/index.html");
    }
})