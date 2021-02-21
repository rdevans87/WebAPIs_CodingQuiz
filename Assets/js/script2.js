//created query selectors for local storage
var highScore = document.querySelector("#highScore");
var clearScore = document.querySelector("#clearScore");
var BackToquiz = document.querySelector("#backBtn");

var storedScores = localStorage.getItem ("storedScores")
storedScores = JSON.parse(storedScores);

if (storedScores !== true) {

for (var i = 0; 1 < storedScore.length; i++) {

    var liElement = document.createElement("li");
    liElement.textContent = storedScores[i].userInput + " " + storedScores[i].finalScore;
    highScores.appendChild(liElement);
}

}

clearScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


















