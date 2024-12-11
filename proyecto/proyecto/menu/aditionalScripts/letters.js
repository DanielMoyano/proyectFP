function invokeLetter(letra) {
    let esqueleto = [[]];
    switch (letra) {
        case "f": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0) || (j<4 && i == 0) || (j<3 && i==2)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "a": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0 && i > 0) || ((j==1 || j==2) && i==0) || ((j==1 || j==2) && i==2) || (j==3 && i>0) ){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "s": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((i==0 && j > 0 && j<3) || (i==1 && j==0) || ((j>0 && j<3) && i==2) || (j==3 && i==3) || (i==4 && j<3)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "t": {
            for (let i=0; i<5; i++) {
                let aux = [];
                for (let j=0; j<5; j++) {
                    if ((i==0 && j<4) || (j>0 && j<3)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "e": {
            for (let i=0; i<5; i++) {
                let aux = [];
                for (let j=0; j<5; j++) {
                    if ((j==0) || (j<4 && i == 0) || (j<3 && i==2) || (j < 4 && i==4)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "r": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0) || (j<3 && i == 0) || (j==2 && i==1) || (j<2 && i == 2) || (j==2 && i==3) || (j>2 && j<4 && i==4)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "l": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0 || j==1) || i==4){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "v": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if (((j==0 || j==4) && i<3) || ((j==1 || j==3)&& i==3)||(j==2 && i==4)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "u": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if (((j==0 || j==4) && i<4) || (j>0 && j<4 && i==4)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "p": { 
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0) || (j<4 && i == 0) || (j<4 && i==2) || (j==4 && i==1)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "i": {
            for (let i=0; i<5; i++) {
                let aux = [];
                for (let j=0; j<5; j++) {
                    if (((i==0 || i==4) && j<4) || (j>0 && j<3)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "c": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if (((j>0 && j<5) && (i==4 || i==0) || (j==0 && i<4 && i>0))){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "o": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if (((j>0 && j<4) && (i==4 || i==0) || ((j==0 || j==4)&& i<4 && i>0))){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "k": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0) || (j==2 && i==1) || (j<2 && i == 2) || (j==2 && i==3) || (j>2 && j<4 && i==4) || (j==3 && i==0)){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "h": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0 || j==4) ||((j==1 || j==2 || j==3) && i==2) ){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "d": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if (((j>0 && j<4) && (i==4 || i==0) || j==0 || (j==4 && (i<4 && i>0)))){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        case "n": {
            for (let i=0; i<5; i++) {
                let aux = [""];
                for (let j=0; j<5; j++) {
                    if ((j==0 || j==4)  || (j<2 && i == 2) || (j==2 && i==3) || (j>2 && j<4 && i==4) || ((j<=1 && j==2) &&(i>=1 && i<4))){
                        aux[j]=true;
                    }
                    else   {
                        aux[j]=false;
                    }
                }
                esqueleto[i]=aux;
            }
            break;
        }
        default: {
            for (let i = 0; i<5; i++) {
                let aux= [""];
                for (let j=0; j<5; j++) {
                    aux[j]=false;
                }
                esqueleto[i]=aux;
            }
            break;
        }
    }
    return esqueleto;
}
function totalLength(...esquema) {
    let selection = $("body");
    let caracter="";
    let anchoglobal = 0;
    for (let i = 0; i < esquema.length; i++) {
        let letra=esquema[i];
        for (let j = 0; j < letra.length;j++) {
            let altura = letra[j];
            for (let k=0;k< altura.length;k++) {
                let ancholetra = altura[k].length;
                for (l = 0;l< ancholetra;l++) {
                    anchoglobal++;
                }
            }
        }
    }
    return anchoglobal;
}
function writeWord(cadena) {
    let selection = $("body");
    let longitudT = totalLength(cadena);
    let caracter="";
    for (let i = 0; i < (longitudT/25); i++) {
        for (let j = 0; j < cadena[i].length;j++) {
            let lista = cadena[i][j];
            for (let k=0; k < longitudT/5; k++) {
                let l = k;
                let m = i;
                if (l > lista.length && m + 1 < longitudT/25){
                    while (l > lista.length && m + 1 < longitudT/25) {
                        m++;
                        l-=6;
                    }
                    lista2 = cadena[m][j];
                    if (lista2[l]) {
                        caracter += '<a class="char">█</a>';
                    }
                    else {
                        caracter += '<a class="spc">█</a>';
                    }
                }
                else {
                    if (lista[k]) {
                        caracter += '<a class="char">█</a>';
                    }
                    else {
                        caracter += '<a class="spc">█</a>';
                    }
                }
            }
            caracter += "<a class='spc'>█</a>";
            caracter += "<br>";
        }
        break;
    }
    return caracter;
}

