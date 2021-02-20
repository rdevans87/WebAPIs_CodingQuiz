//created query selectors for local storage
var highScore = document.querySelector("#highScore");
var clearScore = document.querySelector("#clearScore");
var BackToquiz = document.querySelector("#backBtn");

//Event listener to clear scores 
clearScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

backBtn.addEventListener("click", function () {


});


