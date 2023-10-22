// // alert("hello this is jacob whom jesus loves more and more")

var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var i = 0;


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("./sounds/" + randomChosenColour + ".mp3")
    audio.play();

    i++;
    $("h1").text("level" + i)
}


$(document).keydown(function () {
    if (i == 0) {
        nextSequence();
    }
});
var check=0;
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id")

    $("#" + userChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("./sounds/" + userChosenColour + ".mp3")
    audio.play();
    check++;
    checkAnswer(userChosenColour,check-1)
    
})


function checkAnswer(color,n){
    if(color===gamePattern[n]){
        if(n === gamePattern.length-1){
            setTimeout(function () {
                nextSequence();
            }, 1000);
            check=0 
        }
    }

    else {
        $("h1").text("Game Over!")
        $("body").addClass("game-over")
        audio = new Audio("./sounds/wrong.mp3")
        audio.play();
        setTimeout(function () {
            $("body").removeClass("game-over")
            $("h1").text("Press A Key to Start")
        }, 3000);
    
    }
}






