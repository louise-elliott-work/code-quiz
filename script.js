//A start button that when clicked a timer starts and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears.
//If the answer clicked was incorrect then subtract time from the clock.
//The quiz should end when all questions are answered or the timer reaches 0.
//When the game ends, it should display their score and give the user the ability to save their initials and their score.

// Timer starts at 75 and reduces at one second intervals.

var time = document.getElementById('time'); // Call timer element in HTML code.

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        timeLeft--;
        if(timeLeft === 0) { // Stop countdown at 0 so it doesn't go into negative numbers.
        clearInterval(timeInterval);
        displayMessage("Message here to display score and give user ability to save initials and score.");
    }
    }, 1000); // Reduce at 1 second intervals.
}

countdown(); // Call function countdown.