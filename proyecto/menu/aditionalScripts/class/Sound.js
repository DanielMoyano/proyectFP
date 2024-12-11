/*VARIABLES*/
let contexto = new AudioContext();
/*CLASE*/
class Sonido {
    oscilador;
    volumen;
    canal;
    constructor() {
        this.oscilador = null;
        this.volumen = null;
        this.canal = null;
    }
    sonar(f = "sine", n = 440.0, c = 0,v=1, t = 0.5) {
        this.oscilador = contexto.createOscillator();
        this.volumen = contexto.createGain();
        this.canal = contexto.createPanner();
        this.oscilador.type = this.setFiltre(f);
        this.canal.positionX.setValueAtTime(this.setCanal(c), contexto.currentTime);
        this.volumen.gain.value = this.setVolumen(v);
        t = this.setDuration(t);
        this.oscilador.connect(this.volumen).connect(this.canal).connect(contexto.destination);        
        this.oscilador.frequency.value = this.setSound(n);
        this.oscilador.start(0);
        this.volumen.gain.exponentialRampToValueAtTime(
            0.00001, contexto.currentTime + t
        );
        this.oscilador.stop(contexto.currentTime + t);
    }
    setDuration(duracion) {
        try {
            if (duracion < 0) {
                duracion = 0.5;
            }
            return duracion;
        } catch (error) {
            return 0.5;
        }
    }
    setFiltre(tipo) {
        if (tipo != "square" && tipo != "triangle" && tipo != "sawtooth") {
            return "sine";
        }
        else {
            return tipo;
        }
    }
    setSound(valor) {
        if (isNaN(valor)) {
            console.log("valor no válido");
            return 440.0;
        }
        else {
            return valor;
        }
    }
    setCanal(canal) {
        if (canal == "left") {
            canal = -1;
        }
        else if (canal == "right") {
            canal = 1;
        }
        else if (canal.isNaN) {
            canal = 0;
        }
        return canal;
    }
    setVolumen(vol) {
        try {
            return vol;
        } catch (vol) {
            return 1;
        }
    }
    delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
    // newSonido() {
    //     this.oscilador = contexto.createOscillator();
    //     this.volumen = contexto.createGain();         
    //     this.canal = contexto.createPanner();
    //     for (let i = -20, j=0; i<21; i++) {
    //         this.canal.positionX.setValueAtTime(i, contexto.currentTime + j); //ambos canales
    //         this.oscilador.connect(this.volumen).connect(this.canal).connect(contexto.destination);        
    //         j += 0.5;
    //     }
    //     this.oscilador.start(0);
    //     this.oscilador.stop(contexto.currentTime + 22);
    // }
}