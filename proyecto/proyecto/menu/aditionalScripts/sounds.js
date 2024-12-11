let sonido = new Sonido;
function hit(canal, mute) {
    if (mute) {
        for (let i = 5; i< 15.0; i++) {
            sonido.sonar("sawtooth", i,canal,0);
        }
    }
    else {
        for (let i = 5; i< 15.0; i++) {
            sonido.sonar("sawtooth", i,canal);
        }
    }
}
function option() {
    sonido.sonar("sawtooth",150.0,"",0.2);
}
function lvlUp() {
    try {
        if (!mute) {
            const doTask = () => new Promise(async(resolve, reject) => {
            try {
                for (i=-4, SW = true;i<6;i+=2) {
                    if (SW) {
                        SW = false;
                        sonido.sonar("triangle",1000.0,i,1,0.1);
                    }
                    else {
                        SW = true;
                        sonido.sonar("triangle",500.0,i,1,0.1);
                    }
                    await sonido.delay(500);
                }
                sonido.sonar("triangle",500.0,i,0.5,0.1);
            }
            catch (fail) {
                reject({
                error: true,
                message: fail
                });
            }
            resolve({
                error: false,
                });
            });
            doTask()
            .catch(err => console.error("Ha ocurrido algo: ", err.message));
        }
        else {
            throw "Sonido muteado";
        }  
    } catch (error) {
        console.log(error);
    }
   
}