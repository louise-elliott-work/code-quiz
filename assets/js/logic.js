// * Task

//A start button that when clicked a timer starts and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears.
//If the answer clicked was incorrect then subtract time (10 seconds) from the clock.
//The quiz should end when all questions are answered or the timer reaches 0.
//When the game ends, it should display their score and give the user the ability to save their initials and their score.


// * Timer

var start = document.getElementById('start');
var time = document.getElementById('time');
var timerCount = 75;
var timer;

function beginQuiz () {
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


var questions = document.getElementById('questions');
var questionText = document.getElementById('question-title');
var answerOptions = document.querySelector(".choices");
var answerMessage = document.getElementById('answer-message');
var answerAudio;

// TODO Continue to set up formatting for questions and answer choices (as buttons).

function displayQuestions () {
    document.getElementById('start-screen').classList.add("hide");
    document.getElementById('questions').classList.remove("hide");
    // console.log("Display first question and answer options");
    // document.createElement('questionText'),
    // document.createElement('answerOptions');


    questionText.textContent = "Example question - once working, reference questionsArray";
    document.getElementById('questions').classList.add("button");
    questionText.setAttribute("style", "background-color: pink;");
    
    answerOptions.textContent = "Example answer choices - once working, reference answerOptionsArray";
    // answerOptions.setAttribute("style", "background-color: green;");

// TODO Work out how best to display questions and answer options using the mock-up provided.

    // If statement here to check userAnswer against correctAnswer and trigger the next action accordingly.
    if(!userAnswer) {
        console.log("Waiting for user to answer");
    }
    else if (userAnswer === correctAnswer) {
        console.log("Correct answer given - display message and play sound");
        answerMessage = "Correct!";
        answerAudio.play(assets/sfx/correct.wav)
    }
    else {
        console.log("Incorrect answer given - reduce time by 10 seconds, display message or image");
        timerCount = -10;
        answerMessage = "Incorrect!";
        answerAudio.play(assets/sfx/incorrect.wav)
    }

}


