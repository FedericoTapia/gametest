class Enemy extends Character{

    constructor(){
        super();
        this.enemy = document.createElement("div");
        this.enemy.setAttribute("id", "enemy");
        document.getElementById("enemys").appendChild(this.enemy);
    }

    status(){

        let pos = this.enemy.getBoundingClientRect();
        return(pos.x);

    }
    posX(){
        let posX = this.enemy.getBoundingClientRect();
        return(posX.x);
    }
    posY(){
        let posY = this.enemy.getBoundingClientRect();
        return(posY.y);
    }
}