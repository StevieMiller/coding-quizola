// Global variables
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const hideHeading = document.getElementById("container");

var timerEl = document.getElementById("timer");

// Event listener that starts game on click
startButton.addEventListener("click", startGame);
startButton.addEventListener("click", countdown);

// function that starts the quiz
function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  hideHeading.classList.add("hide");
}

const questions = [
  {
    question: "Which of the following is not a data type?",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Number", correct: false },
      { text: "Function", correct: true },
    ],
  },
  {
    question: "Where is the correct place to insert the JavaScript file?",
    answers: [
      { text: "The body section", correct: true },
      { text: "The head section", correct: false },
      { text: "Both the head and body sections", correct: false },
      { text: "It can be placed anywhere", correct: false },
    ],
  },
  {
    question: "Which of the following is not an operator in JavaScript?",
    answers: [
      { text: "+", correct: false },
      { text: "-", correct: false },
      { text: "~", correct: true },
      { text: "*", correct: false },
    ],
  },
  {
    question: "How do you call a function named myFunction?",
    answers: [
      { text: "call function myFunction()", correct: false },
      { text: "myFunction", correct: true },
      { text: "call myFunction", correct: false },
      { text: "Function = myFunction()", correct: true },
    ],
  },
  {
    question: "What does NaN stand for?",
    answers: [
      { text: "Not a number", correct: true },
      { text: "Never a number", correct: false },
      { text: "Nix a number", correct: false },
      { text: "Number and numeric", correct: false },
    ],
  },
];

// Timer that counts down from 60
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
      //Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
      timerEl.textContent = "";
      // Use 'clearInterval' to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}
