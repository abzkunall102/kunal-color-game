

let numberOfSquares=6;
 let colors=generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor=pickColor();
let colorDisplay=document.getElementById("colorDisplay");
let messageDisplay=document.querySelector("#message");
let h1=document.querySelector("h1");
colorDisplay.textContent=pickedColor;
let resetButton=document.querySelector("#reset");
let easyBtn= document.querySelector("#easyBtn");
let hardBtn= document.querySelector("#hardBtn");
h1.style.backgroundColor="steelblue"

easyBtn.addEventListener("click",function(){
    numberOfSquares=3;
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares=3;
colors=generateRandomColors(numberOfSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;

for(let i=0;i<squares.length;i++){
    if(colors[i]){
        squares[i].style.background=colors[i];
    }
    else{
        squares[i].style.display="none";
    }
}

})
hardBtn.addEventListener("click",function(){
    numberOfSquares=6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors=generateRandomColors(numberOfSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;

for(let i=0;i<squares.length;i++){
   
        squares[i].style.background=colors[i];
         squares[i].style.display="block";
    
}
})



resetButton.addEventListener("click",function(){
    messageDisplay.textContent=""
   // generate the new colours
   resetButton.textContent="New Colors"
   colors=generateRandomColors(numberOfSquares);
   //pick a new random color from array
   pickedColor=pickColor();
  // change the color Display to match the picked color
  colorDisplay.textContent=pickedColor;

  // change the quares to the new colors

  for(let i=0;i<squares.length;i++){
      squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor="steelblue"

})




for (let i=0;i<squares.length;i++){
    // ADD Initial colors to the squares
    squares[i].style.backgroundColor=colors[i];

    // add click listeners to suares
    squares[i].addEventListener("click",function(){

        let clickedColor= this.style.backgroundColor;
        // compare
        //console.log(clickedColor,pickedColor);
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor)
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again?"
        }
            else{ 
              this.style.backgroundColor="#232323";
              messageDisplay.textContent="Try Again";

            }
        
    });
}

function changeColors(color){
    //loop thorogh the squares
 for(let i=0;i<colors.length;i++){
     squares[i].style.backgroundColor=color;
 }



}
function pickColor(){
    let random =Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
let arr=[];
//add num random colors to array
for(let i =0;i<num;i++){
//get the random color and push it in the array 
  arr.push(randomColor());


}

//return the array
return arr; 
}

function randomColor(){
  // pick a red 
  let r =Math.floor(Math.random()*256);
  // pick a green
  let g=Math.floor(Math.random()*256);
  // pick a blue
  let b=Math.floor(Math.random()*256);
  return "rgb(" + r + ", "+ g + ", " + b + ")";


}



