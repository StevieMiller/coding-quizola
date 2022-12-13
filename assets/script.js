// Global variables
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.querySelectorAll(".btn");
const hideHeading = document.getElementById("heading");

var timerEl = document.getElementById("timer");

// Event listener that starts game on click
startButton.addEventListener("click", startGame);
startButton.addEventListener("click", countdown);

// Function that starts the quiz
function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  hideHeading.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  currentQuestion();
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

// Variable grabs the first question in the array
var questionsIndex = 0;
var nextQuestion = questions[questionsIndex];
var nextAnswers = questions.answers;
console.log(nextQuestion.question);

// Function that displays the question
function currentQuestion() {
  questionElement.textContent = nextQuestion.question;
  for (let i = 0; i < questionsIndex.length; i++) {
    answerButtonsElement.addEventListener("click", questionElement);
    questionElement[i].textContent = questions[questionsIndex].answers[i];
    console.log(questionElement[i]);
  }
  answerButtonsElement.textContent = questions.answers;
}

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
