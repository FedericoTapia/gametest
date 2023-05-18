class Enemy extends Character{

    constructor(){
        super();
        this.enemy = document.createElement("div");
        this.enemy.setAttribute("id", "enemy");
        document.getElementById("enemys").appendChild(this.enemy);
    }

    status(){
        this.pos = this.enemy.getBoundingClientRect();
        //this.posX = this.pos.x;
        //this.posY = this.pos.y;
        //this.width = this.pos.width;
        //this.height = this.pos.height;
        this.right = this.pos.right;
        this.left = this.pos.left;
        this.top = this.pos.top;
        this.bottom = this.pos.bottom;
        return [this.right, this.left, this.top, this.bottom];
        //console.log("derecha: " + this.right);
        //console.log("izquierda: " + this.left);
        //console.log("arriba: " + this.top);
        //console.log("abajo: " + this.bottom);

    }
    //posX(){
    //    let posX = this.enemy.getBoundingClientRect();
    //    return(posX.x);
    //}
    //posY(){
    //    let posY = this.enemy.getBoundingClientRect();
    //    return(posY.y);
    //}
}