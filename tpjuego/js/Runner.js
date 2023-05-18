// cambiar nombre a player
console.log('aca toy');
class Runner extends Character{

    constructor(){
        super();
        this.character = document.getElementById("player");
    }

    status(){
        let pos = this.character.getBoundingClientRect();
        return(pos.x);
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