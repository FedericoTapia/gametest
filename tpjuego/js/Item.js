class Item{
    constructor(){
        this.item = document.createElement("div");
        this.item.setAttribute("class", "item");
        document.getElementById("items").appendChild(this.item);
    }
    destroy(){
        document.getElementById("items").removeChild(this.item);
    }
    status(){
        this.pos = this.item.getBoundingClientRect();
        return this.pos;
    }
    stop(){
    }
}