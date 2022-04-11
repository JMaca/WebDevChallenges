var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png"
var randomSource = "images/" + randomImage;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png"
var randomSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);

console.log(randomNumber1);
console.log(randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 is the winner."
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 is the winner."
} else {
  document.querySelector("h1").innerHTML = "Its a tie."
}
