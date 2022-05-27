class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
        this.cehckBtn = document.querySelector(".checker")
        this.x = true;
    }

    changeTurn(event){
        console.log(event.target.innerHTML);
        if(this.x){
            
            event.target.innerHTML = "X";
            this.x = false;
            
            
        }else{
            event.target.innerHTML = "O";
            this.x = true;
          }

        
        //this.checkWinner();
    }
    
    checkWinner(){
        let warr = [];
        this.boxes.forEach(box =>{
            warr.push(box);
            })
           warr.forEach(arr =>{
           })
           for(let i = 0; i < warr.length-2; i++){
            if(warr[i].innerHTML === warr[i+1].innerHTML && warr[i].innerHTML === warr[i+2].innerHTML){
                console.log("winner");
                // setTimeout(() => { document. location. reload()  }, 3000);
                break;
            }else if(i<=2 && warr[i].innerHTML === warr[i+3].innerHTML && warr[i].innerHTML === warr[i+6].innerHTML){
                console.log("winner2");
                break;
            }else if(i <= 2 && warr[i].innerHTML === warr[i+2].innerHTML && warr[i].innerHTML === warr[i+4].innerHTML){
                console.log("winner3");
                break;
            }else if(i == 0 && warr[i].innerHTML === warr[4].innerHTML && warr[i].innerHTML === warr[8].innerHTML){
                console.log("winnder 4 ")
                break;
            }
           }
        }
        reset(){
            document.location.reload()  
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
})