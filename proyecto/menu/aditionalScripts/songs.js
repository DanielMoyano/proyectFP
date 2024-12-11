/*Ejecución de código simultánea*/
let vol;
function songAlive() {
  // console.log("reproduciendo");
  const doTask = (iteraciones) => new Promise(async(resolve, reject) => {
    const timbre = new Sonido;
    for (let i = 0; i < iteraciones; i++) {
      try {
        if (ded) {
          throw "Jugador ya muerto";
        }
        if (mute) {
          switch (i) {
            case 0:
            case 2:
            case 7:
            case 9:
            case 11:
            case 17:
              for (let i = 87.31; i< 92.31; i++) {
                timbre.sonar("sawtooth", i,0,0,0.25);
              }
              break;
            case 1:
            case 3:
            case 5:
            case 8:
            case 10:
            case 12:
            case 15:
              for (let i = 65.41; i< 70.41; i++) {
                sonido.sonar("sawtooth", i,0,0,0.25);
              }
              break;
            case 4:
            case 6:
            case 13:
            case 14:
            case 16:
              for (let i = 110; i< 115; i++) {
                sonido.sonar("sawtooth", i,0,0,0.25);
              }
              break;
          }
        }
        else {
          switch (i) {
            case 0:
            case 2:
            case 7:
            case 9:
            case 11:
            case 17:
              for (let i = 87.31; i< 92.31; i++) {
                timbre.sonar("sawtooth", i,0,0.30,0.25);
              }
              break;
            case 1:
            case 3:
            case 5:
            case 8:
            case 10:
            case 12:
            case 15:
              for (let i = 65.41; i< 70.41; i++) {
                sonido.sonar("sawtooth", i,0,0.30,0.25);
              }
              break;
            case 4:
            case 6:
            case 13:
            case 14:
            case 16:
              for (let i = 110; i< 115; i++) {
                sonido.sonar("sawtooth", i,0,0.30,0.25);
              }
              break;
          }
      }
      } catch (fail) {
        reject({
          error: true,
          message: fail
        });
      }
      await sonido.delay(500);
    }
    resolve({
      error: false,
    });
  });

  doTask(18)
  .catch(err => console.error("Ha ocurrido algo: ", err.message));
  
}
function songDead() {
  const doTask = (iteraciones) => new Promise(async(resolve, reject) => {
    const timbre = new Sonido;
    for (let i = 0; i < iteraciones; i++) {
      try {
        if (mute) {
          switch (i) {
            case 0:
            case 2:
            case 7:
            case 9:
            case 11:
            case 17:
              for (let i = 72.78; i< 77.78; i++) {
                timbre.sonar("sawtooth", i,0,0,0.25);
              }
              break;
            case 1:
            case 3:
            case 5:
            case 8:
            case 10:
            case 12:
            case 15:
              for (let i = 56.74; i< 61.74; i++) {
                sonido.sonar("sawtooth", i,0,0,0.25);
              }
              break;
            case 4:
            case 6:
            case 13:
            case 14:
            case 16:
              for (let i = 100; i< 105; i++) {
                sonido.sonar("sawtooth", i,0,0,0.25);
              }
              break;
          }
        }
        else {
          switch (i) {
            case 0:
            case 2:
            case 7:
            case 9:
            case 11:
            case 17:
              for (let i = 72.78; i< 77.78; i++) {
                timbre.sonar("sawtooth", i,0,0.30,0.25);
              }
              break;
            case 1:
            case 3:
            case 5:
            case 8:
            case 10:
            case 12:
            case 15:
              for (let i = 56.74; i< 61.74; i++) {
                sonido.sonar("sawtooth", i,0,0.30,0.25);
              }
              break;
            case 4:
            case 6:
            case 13:
            case 14:
            case 16:
              for (let i = 100; i< 105; i++) {
                sonido.sonar("sawtooth", i,0,0.30,0.25);
              }
              break;
          }
        }
      } catch (fail) {
        reject({
          error: true,
          message: fail
        });
      }
      await sonido.delay(500);
    }
    resolve({
      error: false,
    });
  });

  doTask(18)
  .catch(err => console.error("Ha ocurrido algo: ", err.message));
  
}