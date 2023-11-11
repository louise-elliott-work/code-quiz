// * Separate js file for scores to be saved in local storage.

// Create array of user scores.
var scoresArray = [];

// Retrieve new user entry from local storage.
var userEntry = JSON.parse(localStorage.getItem("userEntry"));

// ! Work out why userEntry is being overwritten each time so the array only ever holds one userEntry.
// Add new user entry to user scores array.
scoresArray.push(userEntry);

console.log("scoresArray = " + scoresArray);
console.log("scoresArray.length = " + scoresArray.length);
console.log("scoresArray entries = " + Object.entries(scoresArray));

// Function to run through scores array and display items as list elements in an ordered list.
// var scoresTable = document.querySelector("#highscores");
// function displayScores () {
    // userEntry = JSON.stringify(userEntry);
    // userInitials = userEntry.userInitials;
    // console.log(userInitials);
    // for (var i = 0; i < scoresArray.length; i++) {
        // var newListElement = document.createElement('li');
        // newListElement.textContent = (userEntry);
        // scoresTable.appendChild(newListElement);
    // }


// }

// displayScores();

// On clicking 'Clear Highscores', clear information from local storage and reload blank page scoreboard.
var clear = document.getElementById('clear');
clear.addEventListener('click', clearScores);
function clearScores () {
    localStorage.clear();
    location.reload();
}