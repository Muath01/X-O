class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
        this.cehckBtn = document.querySelector(".checker")
        this.x = true;
    }

    changeTurn(event){
        if(this.x && !this.checkWinner() && event.target.innerHTML ==""){
            const circle = document.createElement("div")
            circle.classList.add("circle")
            event.target.appendChild(circle)
            // event.target.classList.add("circle")
            // console.log(event.target.innerHTML)
            // event.target.innerHTML = "X";
            this.x = false;           
        }else if(!this.x && !this.checkWinner() && event.target.innerHTML ==""){
            event.target.innerHTML = "O";
            this.x = true;
          }
    }
    
    checkWinner(){
        let warr = [];
        console.log("e")
        warr.forEach(w=>{
            console.log(w)
        })
        this.boxes.forEach(box =>{
            warr.push(box);
            })
           for(let i = 0; i < warr.length-2; i++){
               if(warr[i].innerHTML != ""){
            if((i == 0 || i == 3 || i == 6) && warr[i].innerHTML === warr[i+1].innerHTML && warr[i].innerHTML === warr[i+2].innerHTML){
                return true;
            }else if(i<=2 && warr[i].innerHTML === warr[i+3].innerHTML && warr[i].innerHTML === warr[i+6].innerHTML){
                return true;
            }else if(i == 2 && warr[i].innerHTML === warr[i+2].innerHTML && warr[i].innerHTML === warr[i+4].innerHTML){

                return true;
            }else if(i == 0 && warr[i].innerHTML === warr[4].innerHTML && warr[i].innerHTML === warr[8].innerHTML){
                return true;   
            }else{
                return false;
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


const piece = document.querySelector(".piece-on")
const empty = document.querySelectorAll(".inner-square")

piece.addEventListener("dragstart", dragStart);
piece.addEventListener("dragend", dragEnd);

empty.forEach(emp=>{
    emp.addEventListener("dragover", dragOver)
    emp.addEventListener("dragenter", dragEnter)
    emp.addEventListener("dragleave", dragLeave)
    emp.addEventListener("drop", dragDrop)
})

function dragStart(){
    this.className += " hold";
    setTimeout(()=>{
        this.className= "invisible"
    },0)
    console.log(this)
}

function dragEnd(){
    this.className = "piece-on"
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add("hovered")
}
function dragLeave(){
    this.classList.remove("hovered")
}
function dragDrop(){
    this.classList.remove("hovered")
    this.append(piece)
}