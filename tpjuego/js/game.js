"use strict"

class Game{
    constructor(){
        this.background = new Background();
    }
    start(canvas, ctx){
        this.background.animate(canvas, ctx);
    }
    end(){
        this.background.stop();
    }
}
//iniciarJuego(){
//    setInterval(this.gameLoop, 500);
//
//    /* cada 1.5 segundo genera un enemigo */
//    setInterval(this.generateEnemy, Math.random() * (3000 - 1500) + 1500);
//
//    setInterval(this.checkCollision, 700);
//    document.addEventListener('keydown', ()=>{
//        this.runner.saltar();
//    });
//    this.gameLoop();
//
//
//}   
//
//
////document.addEventListener('keydown', ()=>{
////    this.runner.saltar();
////});
//
////ejecutarIntervalos(){
////setInterval(gameLoop, 500);
////
/////* cada 1.5 segundo genera un enemigo */
////setInterval(generateEnemy, Math.random() * (3000 - 1500) + 1500);
////
////setInterval(checkCollision, 700);
////}
//
//
//
//generateEnemy() {
//    let enemy = new this.enemy;
//    this.enemigos.push(enemy);
//}
//
//
//gameLoop() {
//    enemigos.forEach(Object => {
//        if (Object.status().x < 1) {
//            Object.destroy();
//            enemigos.shift(Object);
//        }
//    });
//}
//
//checkCollision() {
//    const rect1 = this.runner.status();
//    this.enemigos.forEach(Object => {
//        let rect2 = Object.status();
//        if (!(rect1.right < rect2.left ||
//            rect1.left > rect2.right ||
//            rect1.bottom < rect2.top ||
//            rect1.top > rect2.bottom)) {
//            console.log('¡Colisión detectada!');
//        }
//    });
//    
//}
//
//}