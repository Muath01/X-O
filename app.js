class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
        this.cehckBtn = document.querySelector(".checker")
    }
    checkWinner(){
        let wArr = [];
        this.boxes.forEach(box =>{
            //console.log(box.innerHTML)
            wArr.push(box);
            })
           wArr.forEach(arr =>{
               //console.log(arr);
           })
           console.log(wArr[0].innerHTML);
           console.log(wArr[1].innerHTML);
           console.log(wArr[2].innerHTML);
           console.log("here");
           for(let i = 0; i < wArr.length; i++){
            for(let j = 1; j < wArr.length; j++){
                for(let k = 2; k < wArr.length; k++){
                    if(wArr[0].innerHTML == wArr[1].innerHTML && wArr[0].innerHTML == wArr[2].innerHTML){
                        console.log("we have a winner")
                    } 
                }
            }
           }
           
        }
    }



let winArr = [
    0,1,2,
    3,4,5,
    6,7,8
]
const tick = new Game();


tick.boxes.forEach(box =>{
    box.addEventListener("click", (event)=>{
        box.innerHTML = "X"
 
    })
})

tick.cehckBtn.addEventListener("click", ()=>{
    tick.checkWinner();
})

