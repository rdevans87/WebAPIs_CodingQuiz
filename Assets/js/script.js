// declared variables for query selector HTML

var highScore = document.querySelector("#highScore");
var clearScore = document.querySelector("#clearScore");
var BackToquiz = document.querySelector("#BackToquiz");

//Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});