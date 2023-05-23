"use strict"


//juego.iniciarJuego();

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;

const game = new Game();

game.start(canvas, ctx);

//const enemigos = [];


/* cada 50 milisegundos verifica estado del juego */
//setInterval(gameLoop, 500);



/* //destruye los enemigos

function checkCollision() {
    const rect1 = runner.status();
    enemigos.forEach(Object => {
        let rect2 = Object.status();
        if (!(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom)) {
            console.log('¡Colisión detectada!');
            game.end();
            runner.muerte();
        }
    });
    
}
setInterval(checkCollision, 700);
*/