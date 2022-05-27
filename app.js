class Game{
    constructor(){
        this.boxes = document.querySelectorAll(".inner-square")
        this.cehckBtn = document.querySelector(".checker")
    }
    checkWinner(){
        let warr = [];
        this.boxes.forEach(box =>{
            //console.log(box.innerHTML)
            warr.push(box);
            })
           warr.forEach(arr =>{
               //console.log(arr);
           })
           for(let i = 0; i < warr.length-2; i++){
                console.log("here:",warr[i].innerHTML, warr[i+1].innerHTML, warr[i+2].innerHTML);
                if(warr[i].innerHTML === warr[i+1].innerHTML && warr[i].innerHTML === warr[i+2].innerHTML){
                    console.log("we have a winner");
                    break;
            }
        }
            for(let i = 0; i < warr.length-6; i++){
                console.log(`Here[${warr.length}]`,warr[i].innerHTML, warr[i+3].innerHTML, warr[i+6].innerHTML);
                if(warr[i].innerHTML === warr[i+3].innerHTML && warr[i].innerHTML === warr[i+6].innerHTML){
                    console.log("we have a winner");
                    break;        
                }else if(warr[i].innerHTML === warr[i+4].innerHTML || warr[i+2].innerHTML === warr[i+6]){
                    console.log("We have a winner 2");
                    break;
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