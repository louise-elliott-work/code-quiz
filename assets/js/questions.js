// Separate js file for questions to facilitate changes and additions.

// Array of questions here to facilitate references and extension. Add text at the end.
var questionsArray = [
    [1, "Question 1 text here"],
    [2, "Question 2 text here"],
    [3, "Question 3 text here"],
    [4, "Question 4 text here"],
    [5, "Question 5 text here"],
];

// Array of answers here to facilitate references and extension. Add text at the end.
var answerOptionsArray = [
    [1, ["option A text here"], ["option B text here"], ["option C text here"], ["option D text here"]],
    [2, ["option A text here"], ["option B text here"], ["option C text here"], ["option D text here"]],
    [3, ["option A text here"], ["option B text here"], ["option C text here"], ["option D text here"]],
    [4, ["option A text here"], ["option B text here"], ["option C text here"], ["option D text here"]],
    [5, ["option A text here"], ["option B text here"], ["option C text here"], ["option D text here"]],
]

// Array of correct answers here reference in if statement below.
var correctAnswersArray = [
    [1, "B"],
    [2, "D"],
    [3, "A"],
    [4, "A"],
    [5, "C"],
];

// userAnswer variable. This needs to store the value of the input by the user and it needs to change update for each new question.
// TODO Add in how to capture this from user input.
var userAnswer;

// correctAnswer variable. This needs to reference the correctAnswersArray to capture the correct answer for the specified question.
// TODO Work out how best to reference this from the correctAnswersArray according to the question number.
var correctAnswer;
