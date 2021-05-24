
// var quizChoices = document.querySelector("#quizChoices");
var highScores = document.querySelector("#highScores");
var BackToquiz = document.querySelector("#backBtn");
var clearScore = document.querySelector("#clearScore");

    clearScore.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

  var storedScores = localStorage.getItem("storedScores")
    storedScores = JSON.parse(storedScores);

    if (storedScores !== null) {

        for (var i = 0; i < storedScores.length; i++) {

            var liElement = document.createElement("li");
            liElement.textContent = storedScores[i].userInput + " " + storedScores[i].score;
            console.log(liElement)
            highScores.appendChild(liElement);
        }
    };
 
    // document.getElementById("clearScore").onclick = clearScore


