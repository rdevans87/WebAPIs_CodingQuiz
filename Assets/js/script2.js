//created query selectors for local storage
var highScore = document.querySelector("#highScore");
var clearScore = document.querySelector("#clearScore");
var BackToquiz = document.querySelector("#backBtn");

//Event listener to clear scores 
clearScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


var inputText = document.createElement("input");
inputText.setAttribute("id", "initials");
inputText.setAttribute("type", "text", "enter your" + initials + "here");
document.body.appendChild (inputText);

var submitButton = document.createElement("button");
submitButton.setAttribute("class", ".submit-btn");
submitButton.setAttribute("type", "submit");
document.wrapper.appendChild (submitButton);








