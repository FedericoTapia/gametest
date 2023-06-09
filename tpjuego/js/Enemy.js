class Enemy extends Character{

    constructor(){
        super();
        this.enemy = document.createElement("div");
        this.enemy.setAttribute("class", "enemy");
        document.getElementById("enemys").appendChild(this.enemy);
    }
    destroy(){
        document.getElementById("enemys").removeChild(this.enemy);
    }
    status(){
        this.pos = this.enemy.getBoundingClientRect();
        return this.pos;
    }
    stop(){
        this.enemy = undefined;
    }
}