// cambiar nombre a player
console.log('aca toy');
class Runner extends Character{

    constructor(){
        super();
        this.character = document.getElementById("player");
    }
    
    status(){
        this.character.getBoundingClientRect();
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