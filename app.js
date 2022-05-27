class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
        this.cehckBtn = document.querySelector(".checker")
        this.x = true;
    }

    changeTurn(event){
        console.log(event.target.innerHTML);
        console.log("X at first", this.x)
        if(this.x && event.target.innerHTML != "X" || event.target.innerHTML != "O"){
            console.log("herefdf")
            event.target.innerHTML = "X";
            this.x = false;
            console.log(this.x)
            if(!this.x){
                console.log("helooo")
            }
        }else if(!this.x && event.target.innerHTML != "X" || event.target.innerHTML != "O"){
            event.target.innerHTML = "O";
            this.x = true;
          }
        this.checkWinner();
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
                setTimeout(() => { document. location. reload()  }, 3000);
                break;

            }else if(i<=2 && warr[i].innerHTML === warr[i+3].innerHTML && warr[i].innerHTML === warr[i+6].innerHTML){
                console.log("winner");
                break;
            }else if(i <= 2 && warr[i].innerHTML === warr[i+4].innerHTML || warr[i+2].innerHTML === warr[i+6]){
                console.log("winner");
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
    tick.reset();
})