let rutaHtml = window.location.pathname+window.location.search;
let marcador =  (rutaHtml.match(/\//g).length)-2;
let rutaJs = "";
if (marcador < 0) {
    rutaJs = "/menu/"
}
else {
    while ( marcador > 0 ) {
        rutaJs += "../";
        marcador--;
    }
}
rutaJs = rutaJs + "aditionalScripts/";
$("body").append("<script src = "+ rutaJs +"class/Sound.js defer></script>");
$("body").append("<script src = "+ rutaJs +"sounds.js defer></script>");