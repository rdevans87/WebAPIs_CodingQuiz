//created query selectors for local storage
var highScore = document.querySelector("#highScore");
var clearScore = document.querySelector("#clearScore");
var BackToquiz = document.querySelector("#backBtn");


var inputText = document.createElement("input");
inputText.setAttribute("id", "initials");
inputText.setAttribute("type", "text", "enter your" + initials + "here!");
document.body.appendChild (inputText);

var submitButton = document.createElement("button");
submitButton.setAttribute("id", "submit");
submitButton.setAttribute("type", "submit");
document.wrapper.appendChild (submitButton);




submitButton.addEventListener("click", function () {
var userInput = inputText.value;
if 




});

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











