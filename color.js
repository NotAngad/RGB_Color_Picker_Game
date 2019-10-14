colo = ["rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")", 
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
"rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")",
];

for(var i=0; i< colo.length; i++){
    console.log(colo[i]);
}

var squares = document.querySelectorAll("#squares");
for(var i=0; i< squares.length; i++){
    squares[i].style.background = colo[i];

    squares[i].addEventListener("click", function(){
      var clickedcolor = this.style.background;
      if(clickedcolor === colo[randomcolor]){
          alert("Well done. You got it right!");
      }
      else{
          alert("Oops!. Thats not right. Try again.");
      }
    });
}

var randomcolor = +Math.floor(Math.random() * 6);
document.getElementById("randcol").textContent = colo[randomcolor];