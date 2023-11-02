//A start button that when clicked a timer starts and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears.
//If the answer clicked was incorrect then subtract time (10 seconds) from the clock.
//The quiz should end when all questions are answered or the timer reaches 0.
//When the game ends, it should display their score and give the user the ability to save their initials and their score.



//A start button that when clicked a timer starts and the first question appears.
// Timer starts at 75 and reduces at one second intervals.
var start = document.getElementById('start'); // Call start element in HTML code.
var time = document.getElementById('time'); // Call timer element in HTML code.
var timeRemaining = 75;


var countdown = setInterval(function () { 
    time.textContent = timeRemaining;
    timeRemaining--;
    if(timeRemaining === 0) {
    clearInterval(countdown);
    // displayMessage(Message here to display score and give user ability to save initials and score. div ID end-screen);
}
}, 1000);

function beginQuiz (event) {
event.preventDefault;
setInterval();
}

start.addEventListener("click", beginQuiz);

// TODO Correct code so countdown begins when start button is clicked, rather than when page is loaded.

