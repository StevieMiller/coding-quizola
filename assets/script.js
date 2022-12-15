// Global variables
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answers");
const hideHeading = document.getElementById("heading");

var timerEl = document.getElementById("timer");

let chosenAnswer;

// Event listener starts game when start button is clicked
startButton.addEventListener("click", startGame);

// Event listener starts countdown when start button is clicked
startButton.addEventListener("click", countdown);

// startGame function is called when the start button is clicked
function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  hideHeading.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  // setQuestion function is called when the start button is clicked
  // setQuestion();
  currentQuestion();
  currentAnswers();
}

// Array that holds quiz questions
const questions = [
  {
    question: "Which of the following is not a data type?",
    answers: ["String", "Boolean", "Number", "Function"],
    correct: "Function",
  },
  {
    question: "Where is the correct place to insert the JavaScript file?",
    answers: [
      "The body section",
      "The head section",
      "Both the head and body sections",
      "It can be placed anywhere",
    ],
    correct: "The body section",
  },
  {
    question: "Which of the following is not an operator in JavaScript?",
    answers: ["+", "-", "~", "*"],
    correct: "~",
  },
  {
    question: "How do you call a function named myFunction?",
    answers: [
      "call function myFunction()",
      "myFunction()",
      "call myFunction",
      "Function = myFunction()",
    ],
    correct: "myFunction()",
  },
  {
    question: "What does NaN stand for?",
    answers: [
      "Not a number",
      "Never a number",
      "Nix a number",
      "Number and numeric",
    ],
    correct: "Not a number",
  },
];

// setQuestion function is called when the start button is clicked
// function setQuestion() {
//  for (let key in questions) {
//    console.log(key + ": " + questions[key]);
//  }
// }
// questionContainerElement.innerHTML = "";
// Code that sets and loops through questions
// for (var i = 0; 1 < 5; i++) {}
// }

// Variable grabs the first question in the array

var questionsIndex = 0;
var answersIndex = 0;
var correctIndex = 0;
var nextQuestion = questions[questionsIndex];
var nextAnswers = questions[answersIndex];
var correctAnswer = questions[correctIndex];
console.log(nextQuestion.question);
console.log(nextAnswers.answers);
console.log(correctAnswer.correct);
console.log(nextAnswers.answers[0]);
console.log(nextAnswers.answers[1]);

// Function that displays the question
function currentQuestion() {
  questionElement.textContent = nextQuestion.question;
  for (var i = 0; i < questionsIndex.length; i++) {
    // answerButtonsElement.addEventListener("click", questionElement);
    // questionElement[i].textContent = questions[questionsIndex].answers[i];
  }
}
// Function that displays answer options
function currentAnswers() {
  answerButtonsElement.textContent = nextAnswers.answers;
  for (var i = 0; i < answersIndex.length; i++) {
    // write code to pull answers from array by index
    // add event listener to present next question on click
  }
}
// Function that checks for correct/incorrect answers and deducts time from the clock
function correctAnswers() {
  if (chosenAnswer === false) {
    // Subtract time from the timer
  }
}

// countdown function is called when start button is clicked
function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    // As long as the 'timeLeft' is greater than 1
    if (timeLeft > 1) {
      // Set the 'textContent' of 'timerEl' to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      // When 'timeLeft' is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
      timerEl.textContent = "";
      // Use 'clearInterval' to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}
