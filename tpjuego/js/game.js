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