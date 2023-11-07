// * Task

//A start button that when clicked a timer starts and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears.
//If the answer clicked was incorrect then subtract time (10 seconds) from the clock.
//The quiz should end when all questions are answered or the timer reaches 0.
//When the game ends, it should display their score and give the user the ability to save their initials and their score.


// * Start structure

var start = document.getElementById('start');
start.addEventListener('click', startTimer);
var time = document.getElementById('time');
var timerCount = 75;
var timer;

// * Questions and answers structure

var questions = document.getElementById('questions');
var questionText = document.getElementById('question-title');

var answerMessage = document.getElementById('feedback');
var answerAudio;

var answerOptions = document.getElementsByClassName("button");

var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");

var userAnswer = "";

// * Start timer and start quiz
function startTimer () {
    timer = setInterval (function() {
        time.textContent = timerCount;
        timerCount--;
        if(timerCount < 0) {
            clearInterval(timer);
            // TODO #end-screen (message display score and give user ability to save initials and score)
        }
    }, 1000);
    runQuiz();
}

function runQuiz () {
    
    // * Hide start screen
    document.getElementById('start-screen').classList.add("hide");

    // * Loop to go through questions
    for (var i = 0; i < questionsArray.length; i++) {

        // * Display question text and answer options
        document.getElementById('questions').classList.remove("hide");

        // * Target question text and answer options
        questionText.textContent = questionsArray[i][1];
        optionA.textContent = (answerOptionsArray [i][1]);
        optionB.textContent = (answerOptionsArray [i][2]);
        optionC.textContent = (answerOptionsArray [i][3]);
        optionD.textContent = (answerOptionsArray [i][4]);
        correctAnswer = (correctAnswersArray [i][1]);

        // * Capture user answer

        choices.addEventListener('click', function() {
            userAnswer = this.getAttribute("id");
            checkAnswer()
            })

        // * Check user answer against correct answer question
            function checkAnswer() {
        
                // ! For tests only - once answer check is working and looping through the array length, reference answerOptionsArray for actual correct answers.
                console.log("Number of questions for tests = " + questionsArray.length);
                console.log("i = " + i);console.log(typeof(userAnswer));
                console.log("userAnswer = " + userAnswer); 
                console.log(typeof(correctAnswer));
                console.log("correctAnswer = " + correctAnswer); 

        if (userAnswer === correctAnswer) {
            answerMessage.textContent = "Correct!";
            answerMessage.classList.remove("hide");
            // TODO check how to play audio. answerAudio.play(assets/sfx/correct.wav)
        }
        else {
            timerCount = timerCount-10;
            answerMessage.textContent = "Incorrect!";
            answerMessage.classList.remove("hide");
            // TODO check how to play audio. answerAudio.play(assets/sfx/incorrect.wav)
        }
    }

    }
}