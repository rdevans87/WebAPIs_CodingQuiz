
//created variables swith query selectors in index.html
var querySelector = document.querySelector("#wrapper")
var timeInterval = document.querySelector("#timeInterval");
var quizQuestions = document.querySelector("#quizQuestions");
var startInterval = document.querySelector("#startInterval");

//80 second to complete quiz
var intervalSeconds = 80;
//will timer position set to 0
var intervalZero = 0;
// holds question index    
var quizIndex = 0;
// 10 second penalty for incorrect answeres
var intervalPenalty = 10;
// event listener to trigger timer 

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

startInterval.addEventListener("click", function () {

    if (intervalZero === 0) {
        intervalZero = setInterval(function () {
            intervalSeconds--;
            timeInterval.textContent = "Time: " + intervalSeconds;

            if (intervalSeconds <= 0) {
                clearInterval(intervalZero);
                timesUp();
                timeInterval.textContent = "Time's up!";

            }
        }, 1000);
    }
        render(quizIndex);
});

function render(quizIndex) { 




}




