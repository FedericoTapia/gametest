class Enemy extends Character{

    constructor(){
        super();

        this.enemy = document.createElement("div");
        this.enemy.classList.add("enemy");
        document.getElementById("enemys").appendChild(this.enemy);
    }

    status(){
        super.status();
    }
}