
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

var userScore = 0;

// * Start timer and start quiz
function startTimer () {
    timer = setInterval (function() {
        time.textContent = timerCount;
        timerCount--;
        if(timerCount < 0) {
            clearInterval(timer);
            endQuiz();
            // TODO #end-screen (message display score and give user ability to save initials and score)
        }
    }, 1000);
    runQuiz();
}

function runQuiz () {

    var i = 0;

    function displayQuestion() {

    // * Hide start screen and previous question (if applicable)
    document.getElementById('start-screen').classList.add("hide");
    document.getElementById('questions').classList.add("hide");
    
    // * Loop to go through questions
    if (i < questionsArray.length) {

        // * Display question text and answer options
        document.getElementById('questions').classList.remove("hide");

        // * Target question text and answer options
        questionText.textContent = questionsArray[i][1];
        optionA.textContent = (answerOptionsArray [i][1]);
        optionB.textContent = (answerOptionsArray [i][2]);
        optionC.textContent = (answerOptionsArray [i][3]);
        optionD.textContent = (answerOptionsArray [i][4]);
        correctAnswer = (correctAnswersArray [i][1]);

        // * Reset user answer to null
        return userAnswer = null;

    }
    else {
        clearInterval(timer);
        endQuiz();
    }
    }

    // * Capture user answer
    function getAnswer() {
        choices.addEventListener('click', function(event) {
            userAnswer = event.target.id;
            checkAnswer();
            i++;
            displayQuestion()
        });
    }
    
    getAnswer();

    // * Check user answer against correct answer question
    function checkAnswer() {

        console.log("userAnswer = " + userAnswer);
        console.log("correctAnswer = " + correctAnswer);

        if (userAnswer === correctAnswer) {
            answerMessage.textContent = "Correct!";
            answerMessage.classList.remove("hide");
            // TODO check how to play audio. answerAudio.play(assets/sfx/correct.wav)
            userScore = userScore+1;
        }
        else {
            timerCount = timerCount-10;
            answerMessage.textContent = "Incorrect!";
            answerMessage.classList.remove("hide");
            // TODO check how to play audio. answerAudio.play(assets/sfx/incorrect.wav)
        }

        console.log("userScore = "+ userScore);
    }

    // Start quiz by displaying the first question.
    displayQuestion()
    
}

function endQuiz() {
    var endScreen = document.getElementById('end-screen');
    endScreen.classList.remove("hide");
    var finalScore = document.getElementById('final-score')
    finalScore.textContent = userScore;
}

// On clicking submit, store the user initials and final score in Local Storage.
var submit = document.getElementById('submit');
submit.addEventListener('click', saveUserEntry);
function saveUserEntry () {;
    var userInitials = document.getElementById("initials")
    var userEntry = {
        userInitials: userInitials,
        userScore: userScore
    };
    var scoresArray = JSON.parse(localStorage.getItem("scoresArray")) || [];
    scoresArray.push(userEntry);
    localStorage.setItem("userEntry", JSON.stringify(scoresArray));
}
