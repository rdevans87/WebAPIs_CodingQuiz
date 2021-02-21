
//created variables with query selectors in index.html
var querySelector = document.querySelector("#wrapper")
var timeInterval = document.querySelector("#timeInterval");
var quizQuestions = document.querySelector("#quizQuestions");
var startInterval = document.querySelector("#startInterval");


var intervalSeconds = 80;
var intervalZero = 0;   
var quizIndex = 0;
var intervalPenalty = 10;

//created var for Quiz Array for coding questions and 
var quizArray = [
    {
        title: "Commonly used data type DO NOT include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if/else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"

    },

    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },

];

//timer starts when button is clicked
startInterval.addEventListener("click", function () {

    if (intervalZero === 0) {
        intervalZero = setInterval(function () {
            intervalSeconds--;
            timeInterval.textContent = "Time: " + intervalSeconds;

            if (intervalSeconds <= 0) {
                clearInterval(intervalZero);
                quizOver();
                timeInterval.textContent = "Time's up!";

            }
        }, 1000);
    }
        render(quizIndex);
});

var ulElement = document.createElement("ul");

function render(quizIndex) { 
    quizQuestions.innerHTML = "";
    ulElement.innerHTML = "";

    for (var i = 0; i < quizArray.length; i++) {
        var questionPrompt = quizArray[quizIndex].title;
        var choicesPrompt = quizArray[quizIndex].choices;
        quizQuestions.textcontent = questionPrompt;

        choicesPrompt.forEach(function (newItem) {
        var listChoices = document.createElement("li");
        listChoices.textContent = newItem;
        quizQuesions.appendChild(listChoices);
        listChoices.addEventListener("click", (compare));
})

}

function compare(event) {
    var userChoice = event.target;

    if (userChoice.matches("li")) {

        var divElement = document.createElement("div");
        divElement.setAttribute("class", "divElement")

        if (userChoice.textcontent == quizArray[quizIndex].answer){
            score++;
            divElement.textContent = "Correct!";
        } else { 
            intervalSeconds = intervalSeconds - intervalPenalty;
            divElement.textContent = "Wrong!" + intervalPenalty + "second penalty.";  
    }
}

/// } function for compare event
quizIndex++;

if (quizIndex >= quizArray.length) {

quizOver();
divElement.textcontent = "Great Job!" + "you got " + score + "/" + quizArray.length + "Correct!";

 } else if (quizIndex <= quizArray.length) { 

 divElement.textcontent = "Nice Try!" + "you got " + score + "/" + quizArray.length + "Correct!";

} else { 
render(questionIndex);

}
    questionsDiv.appendChild(createDiv);

}

function quizDone () {
    quizQuestions.innerHTML = "";
    timeInterval.innerHTML = "";

var headerEl = document.createElement("header")
headerEl.setAttribute ("id", "headerEl");
headerEl.textcontent = "Quiz Over!"

quizQuestiona.appendChild(headerEl)

}

}


 


    







