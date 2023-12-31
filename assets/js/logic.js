
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
        // * End quiz
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

        // * Display feedback message for 3 seconds, adding a point for correct answers and deducting 10 seconds for incorrect answers
        if (userAnswer === correctAnswer) {
            answerMessage.textContent = "Correct!";
            answerMessage.classList.remove("hide");
            setTimeout(function() {
                answerMessage.classList.add("hide");
            }, 3000);
            var audioCorrect = document.getElementById("audioCorrect");
            function playAudio() {
                audioCorrect.play();
            }
            playAudio();
            userScore = userScore+1;
        }
        else {
            answerMessage.textContent = "Incorrect!";
            answerMessage.classList.remove("hide");
            setTimeout(function() {
                answerMessage.classList.add("hide");
            }, 3000);
            var audioIncorrect = document.getElementById("audioIncorrect");
            function playAudio() {
                audioIncorrect.play();
            }
            playAudio();
            timerCount = timerCount-10;
        }
    }

    // * Start quiz by displaying the first question
    displayQuestion()

}

// * Capture and display final score
function endQuiz() {
    var endScreen = document.getElementById('end-screen');
    endScreen.classList.remove("hide");
    var finalScore = document.getElementById('final-score')
    finalScore.textContent = userScore;
}

// * On clicking submit, store user initials and final score in local storage
var submit = document.getElementById('submit');
submit.addEventListener('click', saveUserEntry);
function saveUserEntry () {;
    var userInitials = document.getElementById("initials").value;
    var userEntry = {
        userInitials: userInitials,
        userScore: userScore
    };
    let temp = JSON.parse(localStorage.getItem("userEntry")) || [];
    temp.push(userEntry);
        // Add new user entry to local storage.
        localStorage.setItem("userEntry", JSON.stringify(temp));
}