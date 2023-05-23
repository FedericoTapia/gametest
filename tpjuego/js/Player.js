// cambiar nombre a player

class Player extends Character{

    constructor(){
        super();
        this.character = document.getElementById("player");
    }

    status(){
        this.pos = this.character.getBoundingClientRect();  
        return this.pos;
    }

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

    muerte(){
        this.clean();
        this.character.classList.add("muerte");
        
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