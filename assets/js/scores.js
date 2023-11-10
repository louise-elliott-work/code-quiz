// * Separate js file for scores to be saved in local storage.

// Store users' initials and final scores as arrays of objects.
console.log("user initials = " + userInitials);
console.log("user score = " + userScore);
console.log("type of scoresArray = " + typeof(scoresArray));
console.log("scoresArray = " + scoresArray);

// Add these two values to the ol #highscores, with the highest finalScore always showing at the top.
var ol = document.querySelector("#highscores");
var li = document.createElement('li');
var text = document.createTextNode(scoresArray);
li.appendChild(text);
ol.appendChild(li);

// On clicking 'Clear Highscores', clear information from local storage.
var clear = document.getElementById('clear');
clear.addEventListener('click', clearScores);
function clearScores () {
    localStorage.clear();
}
