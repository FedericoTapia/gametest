class Background{

    constructor(){
        this.backgroundLayer1 = new Image(); //cielo
        this.backgroundLayer1.src = 'image/layer-1.png';
        this.backgroundLayer2 = new Image(); 
        this.backgroundLayer2.src = 'image/layer-2.png';
        this.backgroundLayer3 = new Image(); 
        this.backgroundLayer3.src = 'image/layer-3.png';
        this.backgroundLayer4 = new Image();
        this.backgroundLayer4.src = 'image/layer-4.png';
        this.backgroundLayer5 = new Image();
        this.backgroundLayer5.src = 'image/layer-5.png';

        this.layer1 = new Layer(this.backgroundLayer1, 0.1);
        this.layer2 = new Layer(this.backgroundLayer2, 0.2);
        this.layer3 = new Layer(this.backgroundLayer3, 0.6);
        this.layer4 = new Layer(this.backgroundLayer4, 0.8);
        this.layer5 = new Layer(this.backgroundLayer5, 1.5);

        this.gameObjects = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5];
    }

    animate = (canvas, ctx) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.gameObjects.forEach((object) => {
          object.update();
          object.draw(ctx);
        });
        requestAnimationFrame(() => this.animate(canvas, ctx)); // Use arrow function to preserve the correct context
      };

    stop(){
        this.gameObjects.forEach(object => {
            object.stop();
        })
    }
}






