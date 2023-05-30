class Points{
    constructor(){
        this.record = document.createElement("h2");
        this.record.setAttribute("id", "record");
        document.getElementById("points").appendChild(this.record);
        this.value = 0;
    }
    status(){
        this.timer();
        this.record.innerHTML = `puntaje: ${this.value}`;
        this.interval = setInterval(() => {this.record.innerHTML = `puntaje: ${this.value}`;
        }, 500);
    }
    timer(){
        setInterval(() => {
            this.value ++;
          }, 500);
    }
    stop(){
        this.value = this.value;
        clearInterval(this.interval);
    }
}