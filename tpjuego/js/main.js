"use strict"

let runner = new Runner();
let enemy = new Enemy();
const enemigos = [];

document.addEventListener('keydown', ()=>{
    runner.saltar();
});

/* cada 50 milisegundos verifica estado del juego */
setInterval(gameLoop, 500);



/* cada 1.5 segundo genera un enemigo */
setInterval(generateEnemy, 1500);

//Math.random() * (3000 - 1500) + 1500

function generateEnemy() {
    let enemy = new Enemy();
    enemigos.push(enemy);

}

/**
 * Chequear estado del runner y de los enemigos
 */
function gameLoop() {

    //console.log(runner.status()[0]);
    //console.log(runner.status()[1]);
    //console.log(runner.status()[2]);
    //console.log(runner.status()[3]);
    // enemigos.forEach(Object => {
    //     console.log(Object.status());
        
    //     if (Object.status()[1] < 1) {
    //         Object.destroy();
    //         comprobar_colision(Object)
    //         enemigos.shift(Object);
    //     }
    // });

}
// const div1 = runner.status();
// const div2 = enemy.status();



function checkCollision() {
    console.log('test');
    const rect1 = runner.status();
    const rect2 = enemy.status();
    // Verificar si hay colisión
    console.log(rect1.right);
    console.log(rect1.left);
    console.log(rect1.bottom);
    console.log(rect1.top);
    console.log(rect2.right);
    console.log(rect2.left);
    console.log(rect2.bottom);
    console.log(rect2.top);


    if (!(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)) {
        console.log('¡Colisión detectada!');
    }
}
setInterval(checkCollision, 1000);
//  function comprobar_colision(enemy){
//       //const pos_item1 = runner.status();
//       //const pos_item2 = enemy.status();
//       if(!(runner.status()[0]>enemy.status()[1] ||
//         (runner.status()[1]<enemy.status()[0])||
//         (runner.status()[2]>enemy.status()[3])||
//         (runner.status()[3]<enemy.status()[2]))){
     
//               console.log("AAAAAAHAH");
          

//       }
//   }

