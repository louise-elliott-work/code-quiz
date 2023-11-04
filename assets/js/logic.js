// * Task

//A start button that when clicked a timer starts and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears.
//If the answer clicked was incorrect then subtract time (10 seconds) from the clock.
//The quiz should end when all questions are answered or the timer reaches 0.
//When the game ends, it should display their score and give the user the ability to save their initials and their score.


// * Timer

var start = document.getElementById('start'); // Call start element in HTML code.
var time = document.getElementById('time'); // Call timer element in HTML code.
var timerCount = 75;
var timer;

function beginQuiz () {
    console.log("Display first question and answer options");
    startTimer()
    displayQuestions()
}

function startTimer () {
    timer = setInterval (function() {
        time.textContent = timerCount;
        timerCount--;
        if(timerCount < 0) {
            clearInterval(timer);
            // TODO #end-screen (message display score and give user ability to save initials and score)
        }
    }, 1000);
}

start.addEventListener('click', beginQuiz);


// * Questions and answers

var questionText = document.getElementById('question-title');
var answerOptions = document.getElementById('options');
var answerOption1 = document.getElementById('option1');
var answerOption2 = document.getElementById('option2');
var answerOption3 = document.getElementById('option3');
var answerOption4 = document.getElementById('option4');

function displayQuestions () {

// TODO Work out how best to display questions and answer options using the mock-up provided.

    // If statement here to check userAnswer against correctAnswer and trigger the next action accordingly.
    if(!userAnswer) {
        console.log("Waiting for user to answer");
    }
    else if (userAnswer === correctAnswer) {
        console.log("Correct answer given - display congratulations message and play sound");
    }
    else {
        console.log("Incorrect answer given - display explanation and motivational message or image");
        // Add here reduction of time remaining.
    }

}


