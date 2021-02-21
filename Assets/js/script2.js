//created query selectors for local storage
var highScore = document.querySelector("#highScore");
var clearScore = document.querySelector("#clearScore");
var BackToquiz = document.querySelector("#backBtn");


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

var buttonEl = document.createElement("button");
buttonEl.setAttribute("id", "submit");
buttonEl.setAttribute("type", "submit");
buttonEl.textContent = "submit";
quizQuestions.appendChild(buttonEl);

}
buttonEl.addEventListener("click", function () {

var storedScores = localStorage.getItem("storedScores")
  if (storedScores === null) {
    storedScores === [];

  } else { 
      storedScores = JSON.parse(storedScores);    
  }
  storedScores.push()
  var newScore = JSON.stringify(storedScores);
  localStorage.setItem("storedScores", newScore);

  window.location.replace("index2.html");

});

















