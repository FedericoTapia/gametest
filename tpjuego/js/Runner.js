// cambiar nombre a player
console.log('aca toy');
class Runner extends Character{

    constructor(){
        super();
        this.character = document.getElementById("player");
        
        

    }

    status(){
        this.pos = this.character.getBoundingClientRect();
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

    // posX(){
    //     let posX = this.character.getBoundingClientRect();
    //     return(posX.x);
    // }
    // posY(){
    //     let posY = this.character.getBoundingClientRect();
    //     return(posY.y);
    // }

    correr(){
        this.clean();
        this.character.classList.add("correr");
    }

    saltar(){
        if (this.character.classList.contains("correr")) {
            this.clean();

            this.character.classList.add("saltar");


            this.character.addEventListener("animationend", ()=>{
                this.caer();
            });
            
        }
    }

    caer(){
        this.clean();
        this.character.classList.add("caer");

        this.character.addEventListener("animationend", () => {
            this.correr();
        });
    }

    clean(){
        this.character.classList.remove("correr");
        this.character.classList.remove("saltar");
        this.character.classList.remove("caer");
        this.character.removeEventListener("animationend", () =>{});
    }
}