## Web APIs: Code Quiz

This app features a timed coding quiz on Javascript Fundamentals for students to test their skills on the materials covered in this unit. The Code Quiz contains multiple-choice questions and interactive coding challenges to help familiaze students with a typical coding assessment that is often required during the interview process. 

Live URL: https://rdevans87.github.io/WebAPIs_CodingQuiz/

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Summary

This application was built using updated HTML and CSS features in Javascript to create a coding quiz that runs in a web browser. Several Javascript properties and methods were used to deliver the functionality outlined in the acceptance criteria. A function is called when a user clicks on a button to start the interactive quiz. This event triggers a time interval that appends the page with a series of multiple choice questions. Depending on which button choice the user clicks, logical comparison operators determine if the question is true based on a set of specified conditions. If the condition for an answer returns false, the interval is reduced until the time reaches zero or all questions are answered. The quiz results are set in local storage and retrieved in the appended highscores page. An input element is created along with a submit button to save user's initials accross multiple sessions. The user can start over and reset the quiz by clicking the clear button, which removes the saved data from local storage.    

## Completed Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## The following screenshots demonstrate the application functionality:


![image](https://user-images.githubusercontent.com/74195719/108615326-e0fcfc80-73d0-11eb-9ff9-f0d7a0b726bc.png)


![image](https://user-images.githubusercontent.com/74195719/108639419-61b80900-7462-11eb-95f3-64dbd960cad7.png)


![image](https://user-images.githubusercontent.com/74195719/108639436-7e544100-7462-11eb-925b-2ed619e7bc8d.png)


![image](https://user-images.githubusercontent.com/74195719/108615315-c4f95b00-73d0-11eb-8650-b956d882a7fb.png)

