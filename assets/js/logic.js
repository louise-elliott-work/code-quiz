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
var answerOptions = document.getElementById('choices');
var answerMessage = document.getElementById('answer-message');
var answerAudio;
var userSelection;

var optionA = document.createElement("button");
answerOptions.appendChild(optionA);
optionA.textContent = (answerOptionsArray [0][1]);

var optionB = document.createElement("button");
answerOptions.appendChild(optionB);
optionB.textContent = (answerOptionsArray [0][2]);

var optionC = document.createElement("button");
answerOptions.appendChild(optionC);
optionC.textContent = (answerOptionsArray [0][3]);

var optionD = document.createElement("button");
answerOptions.appendChild(optionD);
optionD.textContent = (answerOptionsArray [0][4]);



// TODO Check how to best code user selection - refactor the code from here down.

if(userSelection === "A") {
    console.log("Option A selected");
} else if(userSelection === "B") {
    console.log("Option B selected");
} else if(userSelection === "C") {
    console.log("Option C selected");
} else if(userSelection === "D") {
    console.log("Option D selected");
}

function displayQuestions () {
    document.getElementById('start-screen').classList.add("hide");
    document.getElementById('questions').classList.remove("hide");

    questionText.textContent = questionsArray [0][1];

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


