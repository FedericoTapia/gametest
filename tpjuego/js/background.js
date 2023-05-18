
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 10;

const backgroundLayer1 = new Image(); //cielo
backgroundLayer1.src = 'image/layer-1.png';
const backgroundLayer2 = new Image(); 
backgroundLayer2.src = 'image/layer-2.png';
const backgroundLayer3 = new Image(); 
backgroundLayer3.src = 'image/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'image/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'image/layer-5.png';


const layer1 = new Layer(backgroundLayer1, 0.1);
const layer2 = new Layer(backgroundLayer2, 0.2);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH,CANVAS_WIDTH);

    gameObjects.forEach(object => {
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate);
};
animate();