class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
    }
}


const tick = new Game();


tick.boxes.forEach(box =>{
    box.addEventListener("click", ()=>{
        box.style.background = "red"
    })
})