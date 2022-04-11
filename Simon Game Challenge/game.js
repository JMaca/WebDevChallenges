//alert("This is an alert");
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Current Level = " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  level++;
  userClickedPattern=[];
  $("#level-title").text("Current Level = " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(randomChosenColour);
}

$(".btn").click(function() {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  $("#" + userChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(userChoosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function sound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function checkAnswer(currentLevel){
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
      nextSequence()},1000);
  }
}else{
    $("#level-title").text("GAME OVER, press any key for a new game");
    sound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }

}
