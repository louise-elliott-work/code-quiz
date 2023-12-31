// * Separate js file for scores handling

// * Create array of user scores.
var scoresArray = [];

// * Retrieve new user entry from local storage
var userEntry = JSON.parse(localStorage.getItem("userEntry"));

// * Add new user entry to user scores array
scoresArray.push(userEntry);

// * Format scores array
var scoresArrayString = JSON.stringify(scoresArray);
const scoresArrayStringParsed = JSON.parse(scoresArrayString);
var allStoredScores = scoresArrayStringParsed[0];
if (allStoredScores) {
    var allStoredScoresDescending = allStoredScores.sort(function(a, b){
        return b.userScore - a.userScore
    })
}

// * Function to run through scores array and display items as list elements in an ordered list or message if no scores available to display
var scoresTable = document.querySelector("#highscores");
if (allStoredScores) {
function displayScores () {
    for (var i = 0; i < allStoredScores.length; i++) {
        var newListElement = document.createElement('li');
        newListElement.textContent = `${allStoredScores[i].userInitials} - ${allStoredScores[i].userScore}`;
        scoresTable.appendChild(newListElement);   
    }
}
displayScores();
} else {
    var noScores = document.getElementById("noScores");
    noScores.classList.remove("hide");
}

// * On clicking 'Clear Highscores' clear information from local storage
var clear = document.getElementById('clear');
clear.addEventListener('click', clearScores);
function clearScores () {
    localStorage.clear();
    scoresTable.classList.add("hide");
}