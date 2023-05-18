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
setInterval(generateEnemy, 3000);

//Math.random() * (3000 - 1500) + 1500

function generateEnemy() {
    let enemy = new Enemy();
    enemigos.push(enemy);

}

/**
 * Chequear estado del runner y de los enemigos
 */
function gameLoop() {

    console.log(runner.status()[0]);
    console.log(runner.status()[1]);
    console.log(runner.status()[2]);
    console.log(runner.status()[3]);
    //enemigos.forEach(Object => {
    //    console.log(Object.status());
    //});

}


 // function comprobar_colision(){
      //const pos_item1 = runner.status();
      //const pos_item2 = enemy.status();
      //if(!(runner.status([0])>enemy.status(left))
      //||
          //(pos_item1.left<pos_item2.right)||
          //(pos_item1.top>pos_item2.bottom)||
          //(pos_item1.bottom<pos_item2.top)
          //){
              //console.log("AAAAAAHAH");
          

      //}
  //}

  //setInterval(comprobar_colision, 50);

