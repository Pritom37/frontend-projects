// Dice1
var randomNumber1 = Math.floor(((Math.random()*6)+1));
var imagePath = "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", imagePath);


// dice2
var randomNumber2= Math.floor(((Math.random()*6)+1));
var imagePath = "images/dice" + randomNumber2+ ".png";
document.getElementsByClassName("img2")[0].setAttribute("src", imagePath);


// logic for H1
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}