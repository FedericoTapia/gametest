"use strict"

class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemies = [];
    this.countdown = 60;
  }

  start(canvas, ctx) {
    this.background.animate(canvas, ctx);
    document.addEventListener('keydown', () => {
      this.player.saltar();
    });
    
    setInterval(() => {
        this.countdown--,console.log(this.countdown);
      }, 1000);
    setInterval(() => {
      this.generateEnemy();
    }, 1500);
    setInterval(() => {
        this.deleteEnemy();
      }, 300);
    setInterval(() => {
       this.checkCollision();
    }, 700);
  }

  checkCollision(){
    const rect1 = this.player.status();
    this.enemies.forEach(Object => {
        let rect2 = Object.status();
        if (!(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom)) {
            console.log('¡Colisión detectada!');
            this.end();
            this.player.muerte();
        }
    });
  }

  deleteEnemy(){
        this.enemies.forEach(Object => {          
            if (Object.status().x < 1) {
                Object.destroy();
                this.enemies.shift(Object);
            }
        });
  }

  generateEnemy() {
    const enemy = new Enemy();
    this.enemies.push(enemy);
  }

  end() {
    this.background.stop();
  }
}
