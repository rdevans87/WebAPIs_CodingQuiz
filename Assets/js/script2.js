//created query selectors for local storage
var highScore = document.querySelector("#highScore");
var clearScore = document.querySelector("#clearScore");
var BackToquiz = document.querySelector("#backBtn");

function render(storedScores) {

var storedScores = localStorage.getItem ("storedScores")
storedScores = JSON.parse(storedScores);

if (storedScores !== null) {

for (var i = 0; 1 < storedScores.length; i++) {

    var liElement = document.createElement("li");
    liElement.textContent = storedScores[i].initials + " " + storedScores[i].score;
    highScore.appendChild(liElement);
}

}

//Event listener to clear scores 
clearScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

}













