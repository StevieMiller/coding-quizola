// Global variables
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answers");
const hideHeading = document.getElementById("heading");

var timerEl = document.getElementById("timer");
var timeLeft;



let questionIndex;

// Array that holds quiz questions
const questions = [
  question1 = {
    question: "Which of the following is not a data type?",
    answers: ["String", "Boolean", "Number", "Function"],
    correct: "Function",
  },
  question2 = {
    question: "Where is the correct place to insert the JavaScript file?",
    answers: [
      "The body section",
      "The head section",
      "Both the head and body sections",
      "It can be placed anywhere",
    ],
    correct: "Both the head and body sections",
  },
  question3 = {
    question: "Which of the following is not an operator in JavaScript?",
    answers: ["+", "-", "~", "*"],
    correct: "~",
  },
];

// Event listener starts quiz when start button is clicked
startButton.addEventListener("click", startQuiz);
const orderOfQuestions = (arr) => {
  let arrIndex = [];
  for (let i = 0; i < arr.length; i++) {
    arrIndex.push(i);
  }
  return arrIndex;
};

// startGame function is called when the start button is clicked
function startQuiz() {
  console.log("Started");
  startButton.classList.add("hide");
  hideHeading.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  questionIndex = 0;
  questionOrderArray = orderOfQuestions(questions);

  currentQuestion(questions, questionOrderArray[questionIndex]);
  countdown();
}

// Function that displays the question and answers
// Function pulls array and index data as parameters
function currentQuestion(array, indexOfQuestions) {
  console.log("questions", array[indexOfQuestions]);
// Renders question to the page
  questionElement.textContent = array[indexOfQuestions].question;
  let currentAnswerArray = array[indexOfQuestions].answers
  console.log(currentAnswerArray)
  let answ;
  let button;

  answerButtonsElement.textContent = "";

  for (var i = 0; i < currentAnswerArray.length; i++) {
// Renders answers to the page
// Creates list items for answers
    answ = document.createElement('li');
// Creates buttons for answers
    button = document.createElement('button')
    button.textContent = currentAnswerArray[i]
    answ.appendChild(button)
    answ.addEventListener('click', (event) => correctAnswers(event, array[indexOfQuestions].correct))
    answerButtonsElement.appendChild(answ)
  }
}


// Function that checks for correct/incorrect answers and deducts time from the clock
// Pulls correct answer data and click event as parameters
function correctAnswers(event, correctAns) {
  console.log(event.target)
  // Variable stores correct answer data 
  var chosenAnswer = event.target.textContent
  console.log(chosenAnswer);
  // Evaluates whether or not correct answer was chosen
  if (chosenAnswer === correctAns) {
    alert('Correct!')
  } else {
    // If answer is incorrect, time is subtracted from the clock
    alert('Incorrect!')
    timeLeft = (timeLeft - 5);
    currentQuestion(questions, questionIndex)
  }

  questionIndex++
  currentQuestion(questions, questionIndex)
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