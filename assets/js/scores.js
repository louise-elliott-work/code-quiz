// * Separate js file for scores to be saved in local storage.

scoresArray = JSON.parse(localStorage.getItem("scoresArray"));

// Store users' initials and final scores as arrays of objects.
console.log("type of scoresArray = " + typeof(scoresArray));
console.log("scoresArray = " + scoresArray);
console.log("userEntry = " + userEntry);

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
