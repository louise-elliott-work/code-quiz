// * Separate js file for questions to facilitate changes and additions.

// Array of questions here to facilitate references and extension. Add text at the end.
var questionsArray = [
    [1, "Which of these is the world's most popular programming language?"],
    [2, "Which of these HTML elements would contain the JavaScript tag?"],
    [3, "Which of these shows the correct syntax to create a function in JavaScript?"],
    [4, "Which of these shows the correct structure of a 'for loop' in JavaScript?"],
    [5, "Why is it worth learning JavaScript?"],
];

// Array of answers here to facilitate references and extension. Add text at the end.
var answerOptionsArray = [
    [1, ["C++"], ["JavaScript"], ["Python"], ["Java"]],
    [2, ["HTML"], ["js"], ["JavaScript"], ["script"]],
    [3, ["function functionName ()"], ["function () = functionName"], ["function = functionName"], ["functionName ();"]],
    [4, ["for (var i = 0; i < array.length; i++) {}"], ["for (var i; i < array.length; i++) {}"], ["for (var i = 0; i < array.length; i) {}"], ["for (var i = 0; i < array; i++) {}"]],
    [5, ["It is an extremely versatile language."], ["It is a requirement for most programming jobs."], ["There are many shortcuts you can use, once you have mastered vanilla JavaScript."], ["All of the above"]],
];

// Array of correct answers here reference in if statement below.
var correctAnswersArray = [
    [1, "B"],
    [2, "D"],
    [3, "A"],
    [4, "A"],
    [5, "D"],
];