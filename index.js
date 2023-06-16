// get a random number between 1 to 6 for player 1
var randomNumber1 = Math.random() ;
randomNumber1 = randomNumber1*6 ;
randomNumber1 = Math.floor (randomNumber1) ;
randomNumber1 = randomNumber1 + 1 ;

// change the image path to what is according to the random number
var x = randomNumber1 ;
var imagePath1 = document.querySelector(".img1").getAttribute("src") ;
var newImagePath1 = imagePath1.slice(0, 13) + x + imagePath1.slice (14, imagePath1.length) ;
document.querySelector(".img1").setAttribute ("src", newImagePath1) ;

// get a random number between 1 to 6 for player 2
var randomNumber2 = Math.random() ;
randomNumber2 = randomNumber2*6 ;
randomNumber2 = Math.floor (randomNumber2) ;
randomNumber2 = randomNumber2 + 1 ;

var x = randomNumber2 ;
var imagePath2 = document.querySelector(".img2").getAttribute("src") ;
var newImagePath2 = imagePath2.slice(0, 13) + x + imagePath2.slice (14, imagePath2.length) ;
document.querySelector(".img2").setAttribute ("src", newImagePath2) ;

if (randomNumber1 > randomNumber2) {
    document.querySelector("div h1").textContent = "Player 1 Wins!" ;
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("div h1").textContent = "Player 2 Wins!" ;
}
else {
    document.querySelector("div h1").textContent = "Refresh ME!" ;
}