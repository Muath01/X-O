class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
        this.cehckBtn = document.querySelector(".checker")
        this.x = true;
    }

    changeTurn(event){
        console.log("-----")
        console.log("func", this.checkWinner())
        console.log("-----")
        if(this.x && !this.checkWinner() && event.target.innerHTML ==""){
            console.log("first if", this.checkWinner())
            console.log("hi")
            event.target.innerHTML = "X";
            this.x = false;           
        }else if(!this.x && !this.checkWinner() && event.target.innerHTML ==""){
            console.log("function else: ", this.checkWinner())
            event.target.innerHTML = "O";
            this.x = true;
          }

        
        // this.checkWinner();
    }
    
    checkWinner(){
        console.log("helslo")
        let warr = [];
        this.boxes.forEach(box =>{
            warr.push(box);
            })
        //    warr.forEach(arr =>{
        //    })
           for(let i = 0; i < warr.length-2; i++){
               if(warr[i].innerHTML != ""){
            if(warr[i].innerHTML === warr[i+1].innerHTML && warr[i].innerHTML === warr[i+2].innerHTML){
                return true;
            }else if(i<=2 && warr[i].innerHTML === warr[i+3].innerHTML && warr[i].innerHTML === warr[i+6].innerHTML){
                return true;
            }else if(i <= 2 && warr[i].innerHTML === warr[i+2].innerHTML && warr[i].innerHTML === warr[i+4].innerHTML){
                return true;
            }else if(i == 0 && warr[i].innerHTML === warr[4].innerHTML && warr[i].innerHTML === warr[8].innerHTML){
                return true;   
            }
           }
        }
        }
        reset(){
            setTimeout(()=>{document.location.reload()},2000)
            document.location.reload()  
        }
        gameOver(){

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
        tick.changeTurn(event);
 
    })
})

tick.cehckBtn.addEventListener("click", ()=>{
    tick.checkWinner();
    console.log(tick.checkWinner())
})

tick.checkWinner();
//919068d