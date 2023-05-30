class Countdown{
    constructor(){
        this.counter = document.createElement("h2");
        this.counter.setAttribute("id", "counter");
        document.getElementById("countdown").appendChild(this.counter);
        this.value = 10;
        this.newValue = 5;
    }
    status(){
        this.timer();
        setInterval(() => {
            if (this.value > -1) {
                this.counter.innerHTML = `${this.value}`
            }
            else{
                this.value = 0;
            }
            ;
          }, 1000);
    }
    timer(){
        setInterval(() => {
            this.value--;
          }, 1000);
    }
    addTime(){
        this.value += this.newValue;
    }
    stop(){
        this.value = 0;
    }
}