// Title : ColorPickerGame.js
// Author : Angad Sudesh Srivastav
// Time : 14th October 2019 (4:31 pm)
// Objective : To make a javascript file so the page for our color picker game is dynamic.  


//Random Color in an array : 
colo = ["rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")", 
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
];

// Selecting all squares and applying colors to them : 
var squares = document.querySelectorAll("#squares");
for(var i=0; i< squares.length; i++){
    squares[i].style.background = colo[i];

    squares[i].addEventListener("click", function(){
      var clickedcolor = this.style.background;
        
//         Checking if the clicked color is the same as the random color : 
      if(clickedcolor === colo[randomcolor]){
          alert("Well done. You got it right!");
      }
      else{
          alert("Oops!. Thats not right. Try again.");
      }
    });
}

// Picking out a random color from our array of colors : 
var randomcolor = +Math.floor(Math.random() * 6);
document.getElementById("randcol").textContent = colo[randomcolor];
