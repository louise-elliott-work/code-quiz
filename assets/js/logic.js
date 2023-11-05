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
    answerQuestions()
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
var answerMessage = document.getElementById('feedback');
var answerAudio;
var userAnswer;

var optionA = document.createElement("button");
optionA.setAttribute("id", "A");
answerOptions.appendChild(optionA);
optionA.textContent = (answerOptionsArray [0][1]);

var optionB = document.createElement("button");
optionB.setAttribute("id", "B");
answerOptions.appendChild(optionB);
optionB.textContent = (answerOptionsArray [0][2]);

var optionC = document.createElement("button");
optionC.setAttribute("id", "C");
answerOptions.appendChild(optionC);
optionC.textContent = (answerOptionsArray [0][3]);

var optionD = document.createElement("button");
optionD.setAttribute("id", "D");
answerOptions.appendChild(optionD);
optionD.textContent = (answerOptionsArray [0][4]);

// TODO for loop to loop through questions

function answerQuestions () {
    document.getElementById('start-screen').classList.add("hide");
    document.getElementById('questions').classList.remove("hide");

    // ! For tests only - once answer check is working and looping through the array length, reference answerOptionsArray for actual correct answers.
    correctAnswer = "B";
    console.log("Correct answer for tests = " + correctAnswer);
    console.log("Number of questions for tests = " + questionsArray.length);

    for (var i = 0; i < questionsArray.length; i++) {

        questionText.textContent = questionsArray [i][1];
        console.log("i = " + i);

        document.querySelectorAll("button").forEach(function(buttonSelection) {
            buttonSelection.addEventListener('click', function() {
            userAnswer = this.getAttribute("id");

            // If statement here to check userAnswer against correctAnswer and trigger the next action accordingly.

            if(!userAnswer) {}
                else if (userAnswer === correctAnswer) {
                    answerMessage.textContent = "Correct!";
                    answerMessage.classList.remove("hide");
                    return;
                    // TODO check how to play audio. answerAudio.play(assets/sfx/correct.wav)
                }
                else {
                    timerCount = timerCount-10;
                    answerMessage.textContent = "Incorrect!";
                    answerMessage.classList.remove("hide");
                    return;
                    // TODO check how to play audio. answerAudio.play(assets/sfx/incorrect.wav)
                }
            })
        })
        return;
    }
}