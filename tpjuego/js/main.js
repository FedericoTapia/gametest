"use strict"


//juego.iniciarJuego();

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;

const game = new Game();

game.start(canvas, ctx);
let runner = new Runner();
const enemigos = [];

document.addEventListener('keydown', ()=>{
    runner.saltar();
});

/* cada 50 milisegundos verifica estado del juego */
setInterval(gameLoop, 500);

/* cada 1.5 segundo genera un enemigo */
setInterval(generateEnemy, Math.random() * (3000 - 1500) + 1500);


function generateEnemy() {
    let enemy = new Enemy();
    enemigos.push(enemy);

}

/**
 * Chequear estado del runner y de los enemigos
 */
function gameLoop() {
    enemigos.forEach(Object => {
        if (Object.status().x < 1) {
            Object.destroy();
            enemigos.shift(Object);
        }
    });
}

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
