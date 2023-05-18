"use strict"

let runner = new Runner();
let enemy = new Enemy();

document.addEventListener('keydown', ()=>{
    runner.saltar();
});

/* cada 100 milisegundos verifica estado del juego */
setInterval(gameLoop, 1000);



/* cada 1.5 segundo genera un enemigo */
setInterval(generateEnemy, 3000);

//Math.random() * (3000 - 1500) + 1500

function generateEnemy() {
    let enemy = new Enemy();
}

/**
 * Chequear estado del runner y de los enemigos
 */
function gameLoop() {

    //console.log(runner.status());
    console.log("posX player:" + runner.posX());
    console.log("posY player:" + runner.posY());

    //console.log(enemy.status());
    console.log("posX enemigo:" + enemy.posX());
    console.log("posY enemigo:" + enemy.posY());


}

// let div1 = document.getElementById("player");
// let div2 = document.getElementById("enemy");

// function comprobar_colision(){
//     const pos_item1 = div1.getBoundingClientRect();
//     const pos_item2 = div2.getBoundingClientRect();
//     if((pos_item1.right==pos_item2.left)||
//         (pos_item1.left<pos_item2.right)||
//         (pos_item1.top>pos_item2.bottom)||
//         (pos_item1.bottom<pos_item2.top)){
//             console.log("AAAAAAHAH");


//  }
//      }

//  setInterval(comprobar_colision, 50);

