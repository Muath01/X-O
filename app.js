class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
        this.cehckBtn = document.querySelector(".checker")
        this.x = true;
    }

    changeTurn(event){
        if(this.x && !this.checkWinner() && event.target.innerHTML ==""){
            event.target.innerHTML = "X";
            this.x = false;           
        }else if(!this.x && !this.checkWinner() && event.target.innerHTML ==""){
            event.target.innerHTML = "O";
            this.x = true;
          }
    }
    
    checkWinner(){
        let warr = [];
        this.boxes.forEach(box =>{
            warr.push(box);
            })
           for(let i = 0; i < warr.length-2; i++){
               if(warr[i].innerHTML != ""){
            if(warr[i].innerHTML === warr[i+1].innerHTML && warr[i].innerHTML === warr[i+2].innerHTML){
                console.log(warr[i].innerHTML, warr[i+1].innerHTML, warr[i+2].innerHTML)
                console.log("1st")
                return true;
            }else if(i<=2 && warr[i].innerHTML === warr[i+3].innerHTML && warr[i].innerHTML === warr[i+6].innerHTML){
                console.log("2nd")
                return true;
            }else if(i == 2 && warr[i].innerHTML === warr[i+2].innerHTML && warr[i].innerHTML === warr[i+3].innerHTML){
                console.log(warr[i].innerHTML, warr[i+2].innerHTML, warr[i+4].innerHTML)
                console.log("3rd")
                return true;
            }else if(i == 0 && warr[i].innerHTML === warr[4].innerHTML && warr[i].innerHTML === warr[8].innerHTML){
                console.log("4th")
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

const tick = new Game();

tick.boxes.forEach(box =>{
    box.addEventListener("click", (event)=>{
        tick.changeTurn(event);
 
    })
})

const check = document.querySelector(".checker")

check.addEventListener("click", ()=>{
    console.log(tick.checkWinner())
})

