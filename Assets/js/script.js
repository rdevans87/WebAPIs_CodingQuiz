var quiz = [
    {
        title: "Commonly used data type DO NOT include:",
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


//created var for Quiz Array for coding questions
var score = 0;
var quizIndex = 0;

var intervalSeconds = 80;
var intervalHold = 0;
var intervalPenalty = 10;

// var wrapper = document.querySelector("#wrapper");
var timeInterval = document.querySelector("#timeInterval");
var quizQuestions = document.querySelector("#quizQuestions");




var startInterval = document.querySelector(".start-btn");
//timer starts when button is clicked
startInterval.addEventListener("click", function () {
    if (intervalHold === 0) {
        intervalHold = setInterval(function () {
            intervalSeconds--;
            timeInterval.textContent = "Time: " + intervalSeconds;

            if (intervalSeconds <= 0) {
                clearInterval(intervalHold);
                quizOver();
                timeInterval.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(quizIndex);
});

function render(quizIndex) {

    var ulElement = document.createElement("ul");
    quizQuestions.innerHTML = "";
    ulElement.innerHTML = "";

    for (var i = 0; i < quiz.length; i++) {
        var questionPrompt = quiz[quizIndex].title;
        var choicesPrompt = quiz[quizIndex].choices;
        quizQuestions.textContent = questionPrompt;
    }

    choicesPrompt.forEach(function (newItem) {
        var listChoices = document.createElement("li");
        listChoices.textContent = newItem;
        quizQuestions.appendChild(ulElement);
        ulElement.appendChild(listChoices);
        listChoices.addEventListener("click", (compare));
    })
}

function compare(event) {
    var userChoice = event.target;

    if (userChoice.matches("li")) {

        var divElement = document.createElement("div");
        divElement.setAttribute("id", "divElement");

        if (userChoice.textContent == quiz[quizIndex].answer) {
            score++;
            divElement.textContent = "Correct! The answer is: " + quiz[quizIndex].answer;
        } else {
            intervalSeconds = intervalSeconds - intervalPenalty;
            divElement.textContent = "Wrong! The correct answer is: " + quiz[quizIndex].answer;
        }
    }
    quizIndex++;

    if (quizIndex >= quiz.length) {
        quizOver();
        divElement.textContent = "Great Job!" + " you got " + score + "/" + quiz.length + " Correct!";
    } else {
        render(quizIndex);
    }
    quizQuestions.appendChild(divElement);
}

function quizOver() {
    quizQuestions.innerHTML = "";
    timeInterval.innerHTML = "";

    var h1Element = document.createElement("h1")
    h1Element.setAttribute("id", "h1Element");
    h1Element.textContent = "Quiz Over!";

    quizQuestions.appendChild(h1Element);

    var pElement = document.createElement("p")
    pElement.setAttribute("id", "pElement");

    quizQuestions.appendChild(pElement);

    if (intervalSeconds >= 0) {
        var timeLeft = intervalSeconds;
        var p2Element = document.createElement("p");
        clearInterval(intervalHold);
        pElement.textContent = "Your final score is: " + timeLeft;

        quizQuestions.appendChild(p2Element);
    }

    //create label for user input
    var labelInput = document.createElement("label");
    labelInput.setAttribute("id", "labelInput");
    labelInput.textContent = "Enter initals: ";

    quizQuestions.appendChild(labelInput);


    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("id", "userInput");
    inputEl.textContent = "";

    quizQuestions.appendChild(inputEl);

    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "submit");
    buttonEl.setAttribute("id", "submit");
    buttonEl.textContent = "Submit";

    quizQuestions.appendChild(buttonEl);

    buttonEl.addEventListener("click", function () {
        var userInput = inputEl.value;
        // console.log(inputEl.value)

        if (userInput === null) {
            // console.log ("no value entered")
        } else {
            var finalScore = {
                userInput: userInput,
                score: timeLeft
            }
            console.log(finalScore)
            var storedScores = localStorage.getItem("storedScores")
            if (storedScores === null) {
                storedScores = [];
            } else {
                storedScores = JSON.parse(storedScores);
            }
            storedScores.push(finalScore)
            var newScore = JSON.stringify(storedScores);
            localStorage.setItem("storedScores", newScore);

            window.location.replace("./index2.html");
        };
    });
}


