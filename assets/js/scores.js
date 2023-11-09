// * Separate js file for scores to be saved in local storage.

// Add to local storage the user's initials and final score.
localStorage.getItem("userInitials");
localStorage.getItem("userScore");

console.log(userInitials);
console.log(userScore);

// Store the user's initials and final score in an array of objects.
// ! examples below only
var scoresArray = [
    ("LE", "7"),
    ("PE", "1"),
    ("NE", "2")
]
console.log(scoresArray);

// Add new entry into the scoresArray.
var userEntry = userInitials.concat(userScore);

// Add these two values to the ol #highscores, with the highest finalScore always showing at the top.
var ol = document.querySelector("#highscores");
var li = document.createElement('li');
var text = document.createTextNode(userEntry);
li.appendChild(text);
ol.appendChild(li);

// On clicking 'Clear Highscores', clear information from local storage.
var clear = document.getElementById('clear');
clear.addEventListener('click', clearScores);
function clearScores () {
    localStorage.clear();
}
