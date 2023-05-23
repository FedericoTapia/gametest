"use strict"

class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemies = [];
  }

  start(canvas, ctx) {
    this.background.animate(canvas, ctx);

    document.addEventListener('keydown', () => {
      this.player.saltar();
    });
    setInterval(() => {
      this.generateEnemy();
    }, 1500);
    setInterval(() => {
        this.deleteEnemy();
      }, 300);
    //this.deleteEnemy();
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
