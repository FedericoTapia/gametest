"use strict"

class Game {

  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.countdown = new Countdown();
    this.countdown.status();
    this.points = new Points();
    this.points.status();
    this.items = [];
    this.enemies = [];
    this.lose = document.getElementById('lose');
    this.reset = document.getElementById('reset');
  }

  getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  start(canvas, ctx) {
    this.background.animate(canvas, ctx);
    document.addEventListener('click', () => {
      this.player.saltar();
    });
    this.gEnemy = setInterval(() => {
      this.generateEnemy();
    }, this.getRandomInterval(1000, 3000));
    this.gItem = setInterval(() => {
      this.generateItem();
    }, this.getRandomInterval(3000, 5000));
    setInterval(() => {
      this.deleteObjs(this.enemies),this.deleteObjs(this.items);
    }, 300);
    setInterval(() => {
       this.checkCollision();
    }, 700);
    setInterval(() => {
      this.checkCollisionItem();
    }, 200);
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
        }
    });
  }

  checkCollisionItem(){
    const rect1 = this.player.status();
    this.items.forEach(Object => {
        let rect2 = Object.status();
        if (!(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom)) {
            console.log('¡Colisión item!');
            this.countdown.addTime();
        }
    });
  }

  deleteObjs(array){
    array.forEach(Object => {          
      if (Object.status().x < 1) {
          Object.destroy();
          array.shift(Object);
      }
  });
  }

  generateEnemy() {
    const enemy = new Enemy();
    this.enemies.push(enemy);
  }
  generateItem(){
    const item = new Item();
    this.items.push(item);
  }

  end() {
    this.background.stop();
    this.player.muerte();
    this.countdown.stop();
    this.points.stop();
    clearInterval(this.gEnemy);
    clearInterval(this.gItem);
    this.lose.innerHTML = '<h1 id="gameover"> GAME OVER </h1>';
    this.reset.innerHTML = '<button id="restart"><a href="game.html">RESET</a></button>';
  }
}
