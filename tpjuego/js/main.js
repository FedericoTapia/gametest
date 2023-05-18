"use strict"

let runner = new Runner();

document.addEventListener('keydown', ()=>{
    runner.saltar();
});

/* cada 50 milisegundos verifica estado del juego */
setInterval(gameLoop, 500);



/* cada 1.5 segundo genera un enemigo */
setInterval(generateEnemy, Math.random() * (3000 - 1500) + 1500);




/**
 * Chequear estado del runner y de los enemigos
 */
function gameLoop() {

    console.log(runner.status());


}

function generateEnemy() {
    let enemy = new Enemy();
}

